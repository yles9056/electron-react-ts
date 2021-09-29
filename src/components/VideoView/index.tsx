import React from 'react'
import Crop from '../Crop'
import './index.module.css'
const VideoView = () => {
    const videoRef = React.useRef<HTMLVideoElement>();
    // let offsetWidth, offsetHeight;
    // const video: HTMLElement | null = document.getElementById('video');
    // if(video) {
    //     offsetHeight = video.offsetHeight;
    //     offsetWidth = video.offsetWidth;
    // }
    // // console.log(offsetHeight, offsetWidth);
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then((stream) => {
        // mediaStreamTrack = stream;
        if(videoRef.current) {
            videoRef.current.srcObject = stream
            videoRef.current.play();
        }
    }).catch(err => console.log(err))
    return (
       <>
           <video style={{width: '100%', height: 'calc(100vh - 48px)', objectFit: 'fill', position: 'absolute', top: '0', left: '0'}} ref={videoRef}></video>
       </>
    )
}
export default VideoView;