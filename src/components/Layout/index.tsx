import React from 'react'
import TopBar from '../TopBar'
import SliderBar from '../SliderBar'
import VideoPage from '../VideoPage'
import { Grid } from '@material-ui/core'
import './layout.css'
export default function Layout() {
    return (
        <Grid container direction="row" columns={15} sx={{gridTemplateColumns: '69px auto'}}>
            <Grid item xs={1}>
                <SliderBar />
            </Grid>
            <Grid item xs container direction="column">
                <div className="top-bar">
                    <TopBar />
                </div>
                <VideoPage />
            </Grid>
        </Grid>
    )
}