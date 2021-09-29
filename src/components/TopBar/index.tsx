import React, {useEffect} from 'react'
import { AppBar, Toolbar, IconButton,Avatar } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { MinimizeIcon, MaximizeIcon, CloseIcon, RestoreIcon } from '../../icons'
/**
 * 标题栏区域
 */
const { ipcRenderer } = window.electron;

const MyIconButton = styled(IconButton)({
    cursor: 'pointer'
})
export default function TopBar() {
    // 设置展示
    const [showRestore, setShowRestore] = React.useState(true);
    // 点击窗口控制图标时
    const setWin = (type: string) => {
        ipcRenderer.send(type)
    }

    useEffect(() => {
        ipcRenderer.on('main-window-max', () => {
            setShowRestore(true)
        });
        ipcRenderer.on('main-window-unmax', () => {
            setShowRestore(false)
        });
    })
    return (
        <>
            <Avatar sx={{width: '69px', height: '100%'}} alt="" src="./image/logo.png" variant="square" />
            <AppBar position="static" color="transparent" sx={{boxShadow: 'none', flex: 1}}>
                <Toolbar>
                    {/* <span className="icon-ic_arrow_r"></span> */}
                    <div style={{position: 'absolute', right: "5px"}}>
                        <MyIconButton aria-label="minimize" size="small" onClick={() => setWin('min')}>
                            <MinimizeIcon />
                        </MyIconButton>
                        <MyIconButton aria-label="max" size="small" onClick={() => setWin('max')}>
                            {showRestore ? <RestoreIcon /> : <MaximizeIcon />}
                        </MyIconButton>
                        <MyIconButton aria-label="close" size="small" onClick={() => setWin('close')}>
                            <CloseIcon />
                        </MyIconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
