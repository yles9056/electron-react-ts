import React, {useEffect} from 'react'
import { Box, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/styles'
import { MinimizeIcon, MaximizeIcon, CloseIcon, UnfoldIcon, RestoreIcon } from '../../icons'
/**
 * 标题栏区域
 */
const { ipcRenderer } = window.electron;
const useStyled = makeStyles({
    root: {
        backgroundImage: 'linear-gradient(#FFFFFF, #F2F2F2)',
        boxShadow: '0px 0px 4px 0px #979797'
    },
    button: {
        position: 'absolute',
        right: '10px'
    },
    regular: {
        minHeight: '48px'
    }
})
const MyIconButton = styled(IconButton)({
    cursor: 'pointer',
    marginLeft: '20px',
    '&:hover': {
        backgroundColor: 'rgba(0, 0,0,0)'
    },
})

const topBarBox = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
}
export default function TopBar() {
    const classes = useStyled();
    // 设置展示
    const [showRestore, setShowRestore] = React.useState(false);
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
        <Box sx={topBarBox}>
            <AppBar position="static" color="inherit" className={classes.root}>
                <Toolbar classes={{ regular: classes.regular }}>
                    <UnfoldIcon />
                    <div className={classes.button}>
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
        </Box>
    )
}
