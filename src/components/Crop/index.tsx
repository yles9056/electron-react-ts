import React, { Component } from 'react'
import './style.css'
import cropRatio from '../../helpers/util/crop'
// 方位枚举
enum Direction {
    move = "move",
    t = "t",
    d = "d",
    l = "l",
    r = "r",
    lt = "lt",
    rt = "rt",
    ld = "ld",
    rd = "rd",
}
// 当前裁剪区域大小
interface CropInfo {
    w: number | undefined;
    h: number | undefined;
}
export default class Crop extends Component {
    // 获取当前裁剪区域元素
    cropArea: React.RefObject<HTMLDivElement>= React.createRef();
    state = {
        // 是否显示裁剪框
        isShowCrop: false,
        // 是否移动裁剪框
        clipOnMove: false,
        // 当前裁剪框左上角坐标
        curClipPos: { x: 0, y: 0 },
        // 当前鼠标坐标
        curMousePos: { x: 0, y: 0 },
        // 裁剪框需要移动的x,y
        clipMoved: { x: 0, y: 0 },
        // 当前裁剪框大小
        clipRect: { w: 400, h: 600},
        direction: ""
    }
    
    cropInfo: CropInfo = {
        w: 0,
        h: 0
    }
    controlPoints = ["t", "d", "l", "r", "lt", "rt", "ld", "rd"]
    componentDidMount = () => {
        cropRatio.on('crop', (value) => {
            if(value !== "") {
                this.setState({
                    isShowCrop: true
                })
            }
        })
        
    }
    componentDidUpdate = () => {
        // 获取当前整个裁剪区域的宽高
        if(this.cropInfo.w !== this.cropArea.current?.offsetWidth || this.cropInfo.h !== this.cropArea.current?.offsetHeight){
            this.cropInfo = {
                w: this.cropArea.current?.offsetWidth,
                h: this.cropArea.current?.offsetHeight
            }
        }
    }
    pointOnMouseDown = (dir: string, e: any) => {
        e.stopPropagation();
        console.log("控制点", dir);
        this.setState({
            clipOnMove: true,
            direction: dir,
            curMousePos: {
                x: e.clientX,
                y: e.clientY
            }
        });
        console.log('dir', dir, e.clientX, e.clientY);

    }

    onMouseDown = (e: any) => {
        console.log("点击了clip");
        this.setState({
            curClipPos: {
                x: e.target.offsetLeft,
                y: e.target.offsetTop
            },
            curMousePos: {
                x: e.clientX,
                y: e.clientY
            },
            clipOnMove: true,
            direction: "move"
        });
        console.log('clip', e.target.offsetLeft, e.target.offsetTop);
        console.log('mouse', e.clientX, e.clientY);

    }
    onMouseUp = (e: any) => {
        console.log(this.state);
        console.log('释放clip');
        console.log('鼠标抬起时：' + e.clientX, e.clientY);
        this.setState({
            clipOnMove: false
        });
    }
    onMouseMove = (e: any) => {
        if (!this.state.clipOnMove) return;
        let offsetX, offsetY;
        switch (this.state.direction) {
            case Direction.move:
                offsetX = this.state.curMousePos.x - this.state.curClipPos.x;
                offsetY = this.state.curMousePos.y - this.state.curClipPos.y;
                // 如果超出框选画面范围，则不移动
                if((this.cropInfo.h && (e.clientY - offsetY + this.state.clipRect.h) > this.cropInfo.h)
                || (this.cropInfo.w && (e.clientX - offsetX + this.state.clipRect.w) > this.cropInfo.w)
                || offsetY > e.clientY
                || offsetX > e.clientX
                ) {
                    return;
                }
                this.setState({
                    clipMoved: {
                        x: e.clientX - offsetX,
                        y: e.clientY - offsetY
                    }
                });
                break;
            case Direction.t:
                offsetY = e.clientY - this.state.curMousePos.y;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w,
                        h: this.state.clipRect.h - offsetY
                    },
                    clipMoved: {
                        x: this.state.clipMoved.x,
                        y: this.state.clipMoved.y + offsetY
                    },
                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;
            case Direction.d:
                offsetY = e.clientY - this.state.curMousePos.y;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w,
                        h: this.state.clipRect.h + offsetY
                    },
                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });

                break;
            case Direction.l:
                offsetX = e.clientX - this.state.curMousePos.x;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w - offsetX,
                        h: this.state.clipRect.h
                    },
                    clipMoved: {
                        x: this.state.clipMoved.x + offsetX,
                        y: this.state.clipMoved.y
                    },
                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;
            case Direction.r:
                offsetX = e.clientX - this.state.curMousePos.x;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w + offsetX,
                        h: this.state.clipRect.h
                    },
                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;
            case Direction.lt:
                offsetX = e.clientX - this.state.curMousePos.x;
                offsetY = e.clientY - this.state.curMousePos.y;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w - offsetX,
                        h: this.state.clipRect.h - offsetY
                    },
                    clipMoved: {
                        x: this.state.clipMoved.x + offsetX,
                        y: this.state.clipMoved.y + offsetY
                    },
                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;
            case Direction.rt:
                offsetX = e.clientX - this.state.curMousePos.x;
                offsetY = e.clientY - this.state.curMousePos.y;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w + offsetX,
                        h: this.state.clipRect.h - offsetY
                    },
                    clipMoved: {
                        x: this.state.clipMoved.x,
                        y: this.state.clipMoved.y + offsetY
                    },
                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;
            case Direction.ld:
                offsetX = e.clientX - this.state.curMousePos.x;
                offsetY = e.clientY - this.state.curMousePos.y;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w - offsetX,
                        h: this.state.clipRect.h + offsetY
                    },
                    clipMoved: {
                        x: this.state.clipMoved.x + offsetX,
                        y: this.state.clipMoved.y
                    },
                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;
            case Direction.rd:
                offsetX = e.clientX - this.state.curMousePos.x;
                offsetY = e.clientY - this.state.curMousePos.y;
                this.setState({
                    clipRect: {
                        w: this.state.clipRect.w + offsetX,
                        h: this.state.clipRect.h + offsetY
                    },

                    curMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;

            default:
                break;
        }
    }
    onMouseLeave = (e: any) => {
        console.log(e);
        if(e.clientX > e.target.offsetWidth || e.clientY > e.target.offsetHeight){
            console.log("离开当前裁剪框");
            this.setState({
                clipOnMove: false
            })
        }
    }
    render() {
        return (
            this.state.isShowCrop && 
                <div className="clip-canvas" ref={this.cropArea}
                    onMouseMove={(e) => {
                        this.onMouseMove(e);
                    }}
                    onMouseLeave = {
                        (e) => {
                            this.onMouseLeave(e)
                        }
                    }
                    onMouseUp = {
                        () => {
                            this.setState({
                                clipOnMove: false
                            })   
                        }
                    }
                    >
                    <div className="clip-bound" style={{
                        left: this.state.clipMoved.x,
                        top: this.state.clipMoved.y,
                        width: `${this.state.clipRect.w}px`,
                        height: `${this.state.clipRect.h}px`
                    }}
                        onMouseUp={(e) => {
                            this.onMouseUp(e);
                        }}
                        onMouseDown={(e) => {
                            this.onMouseDown(e);
                        }}>
                        {
                            this.controlPoints.map(p => (
                                <div key={p + 1}
                                    className={`control-point control-point-${p}`}
                                    onMouseDown={(e) => {
                                        this.pointOnMouseDown(p, e);
                                    }}
                                    onMouseUp={(e) => {
                                        this.onMouseUp(e);
                                    }}
                                ></div>
                            ))
                        }
                    </div>
                </div>

        )
    }
}
