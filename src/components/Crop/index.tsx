import React, { Component } from 'react'
import './style.css'
import cropRatio from '../../helpers/util/crop'
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
export default class Crop extends Component {
    cropArea = React.createRef();
    cropWidth = this.cropArea.current?.offsetWidth;
    cropHeight = this.cropArea.current?.offsetHeight;
    state = {
        isShowCrop: false,
        clipOnMove: false,
        curClipPos: { x: 0, y: 0 },
        curMousePos: { x: 0, y: 0 },
        clipMoved: { x: 0, y: 0 },
        clipRect: { w: 400, h: 600},
        direction: ""
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
        debugger;
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
                if(offsetX < e.clientX && offsetY < e.clientY) {
                    if(e.clientX - offsetX + this.state.clipRect.w > this.cropWidth) {
                        this.setState({
                            clipMoved: {
                                x: e.clientX - offsetX,
                                y: e.clientY - offsetY
                            }
                        });
                    }
                    this.setState({
                        clipMoved: {
                            x: e.clientX - offsetX,
                            y: e.clientY - offsetY
                        }
                    });
                } else if(offsetX > e.clientX && offsetY < e.clientY) {
                    this.setState({
                        clipMoved: {
                            x: 0,
                            y: e.clientY - offsetY
                        }
                    });
                } else if(offsetX < e.clientX && offsetY > e.clientY) {
                    this.setState({
                        clipMoved: {
                            x: e.clientX - offsetX,
                            y: 0
                        }
                    });
                }
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
        console.log(this.state);
        console.log(e);
        if(e.clientX > this.state.clipMoved.x || e.clientY < this.state.clipMoved.y) {
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
