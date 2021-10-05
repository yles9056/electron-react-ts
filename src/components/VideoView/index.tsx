import React from 'react'
const VideoView = () => {
    const videoRef: any = React.useRef();
    // const {value} = props;
    // const [width, setWidth] = React.useState('100%')
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
    // React.useEffect(() => {
    //     if(value !== "") {
    //         setWidth('calc(100%-220px)')
    //     }
    // }, [value])
    return (
       <>
            {/* {value !== "" && <div>
            {value === "device" && <DeviceMenu />}
            {value === "control" && <ControlMenu/>}
            {value === "effect" && <EffectMenu />}
            {value === "adjust" && <AdjustMenu />}
            </div>} */}
           <video style={{width: '100%', height: 'calc(100vh - 48px)', objectFit: 'fill', position: 'absolute', top: '0', left: '0'}} ref={videoRef}></video>
       </>
    )
}
export default VideoView;