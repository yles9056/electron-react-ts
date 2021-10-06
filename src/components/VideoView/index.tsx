import React from 'react'
const VideoView = () => {
    const videoRef: any = React.useRef();
    const [showVideo, setShowVideo] = React.useState(true);

    // const {value} = props;
    // const [width, setWidth] = React.useState('100%')
    // let offsetWidth, offsetHeight;
    // const video: HTMLElement | null = document.getElementById('video');
    // if(video) { 
    //     offsetHeight = video.offsetHeight;
    //     offsetWidth = video.offsetWidth;
    // }
    // // console.log(offsetHeight, offsetWidth);
    React.useEffect(() => {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then((stream) => {
            // mediaStreamTrack = stream;
            if(videoRef.current) {
                videoRef.current.srcObject = stream
                videoRef.current.play();
            }
        }).catch((err) => {
            console.warn(err);
            setShowVideo(false);
        });
    }, [showVideo]);
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
            <video style={{width: '100%', height: 'calc(100vh - 48px)', objectFit: 'fill', position: 'absolute', top: '0', left: '0', display: showVideo ? 'initial' : 'none'}} ref={videoRef}></video>
            {
                !showVideo && (
                    <div
                        style={{
                            width: '100%',
                            background: '#ebebeb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        <img
                            src="./images/graphic_empty_state.png"
                            srcSet="./images/graphic_empty_state.png"
                            alt="No camera found."
                            loading="lazy"
                            style={{
                                marginBottom: '10px'
                            }}
                        />
                        <div style={{width: '17em'}}>Make sure you have connected a WebCam to the personal computer.</div>
                    </div>
                )
            }
       </>
    )
}
export default VideoView;

/*

    width: 100%;
    background: #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;

*/