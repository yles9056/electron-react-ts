import React from 'react';

// Material components
import { SvgIcon } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        width: '16px',
        height: '16px'
    }
}));

export default function Minimize() {
    const classes = useStyles();
    return (
        <SvgIcon
            viewBox="0 0 1024 1024"
            className={classes.root}
        >
<path d="M36.8 477.2h950.3c23.5 0 34.8 11.3 34.8 34.8 0 23.5-11.3 34.8-34.8 34.8H36.8C13.3 546.8 2 535.5 2 512c0-24.3 11.3-34.8 34.8-34.8z"></path>

        </SvgIcon>
    );
}