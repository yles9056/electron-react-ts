import React, { Component } from 'react'
import VideoView from '../VideoView'
import './style.css'
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
    controlPoints = ["t", "d", "l", "r", "lt", "rt", "ld", "rd"]
    videoInfo = {w: 800, h: 600}
    state = {
        clipOnMove: false,
        curClipPos: { x: 0, y: 0 },
        curMousePos: { x: 0, y: 0 },
        clipMoved: { x: 0, y: 0 },
        clipRect: { w: this.videoInfo.w, h: this.videoInfo.h },
        direction: Direction.move
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
    }
    onMouseUp = (e: any) => {
        console.log(e);
        this.setState({
            clipOnMove: false
        });
    }
    onMouseMove = (e: any) => {
        if (!this.state.clipOnMove) return;
        console.log(e);
        let offsetX, offsetY;
        switch (this.state.direction) {
            case Direction.move:
                offsetX = this.state.curMousePos.x - this.state.curClipPos.x;
                offsetY = this.state.curMousePos.y - this.state.curClipPos.y;
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
    render() {
        return (
            <div className="clip-canvas"
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'pink'
                }}
                onMouseMove={(e) => {
                    this.onMouseMove(e);
                }}
                onMouseLeave={(e)=> {
                    
                }}>
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
                                <div key={p+1}
                                    className={`control-point control-point-${p}`}
                                    onMouseDown={(e) => {
                                        this.pointOnMouseDown(p, e);
                                    }}
                                ></div>
                            ))
                        }
                    </div>
                    
            <VideoView />
            </div>
        )
    }
}
