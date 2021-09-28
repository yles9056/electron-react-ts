import React from 'react'
import TopBar from '../TopBar'
import SliderBar from '../SliderBar'
import Crop from '../Crop'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import './layout.css'
const useStyled = makeStyles({
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '48px'
    },
    avatar: {
        width: '64px',
        height: '48px',
        margin: '0 auto',
    }
})
export default function Layout() {
    const classes = useStyled();
    const mainArea = document.getElementsByClassName('main-area')
    return (
        <Grid sx={{ gridTemplateRows: '48px 1fr' }}>
            <Box className={`${classes.box} top-bar`}>
                <TopBar />
            </Box>
            <Grid container direction="row" sx={{ gridTemplateColumns: 'auto 1fr' }}>
                <SliderBar />
                <div className="main-area">
                    {/* <Crop /> */}
                </div>
            </Grid>
        </Grid>
    )
}