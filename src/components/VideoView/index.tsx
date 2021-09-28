import React from 'react'
const VideoView = () => {
    const videoRef = React.useRef<HTMLVideoElement>();
    let offsetWidth, offsetHeight;
    const video: HTMLElement | null = document.getElementById('video');
    if(video) {
        offsetHeight = video.offsetHeight;
        offsetWidth = video.offsetWidth;
    }
    // console.log(offsetHeight, offsetWidth);
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {width: offsetWidth, height: offsetHeight}
    }).then((stream) => {
        // mediaStreamTrack = stream;
        if(videoRef.current) {
            videoRef.current.srcObject = stream
            videoRef.current.play();
        }
    }).catch(err => console.log(err))
    return (
       <div className="video-div">
           {/* <video ref={videoRef} src="./img/crop.mp4"></video> */}
       </div>
    )
}
export default VideoView;