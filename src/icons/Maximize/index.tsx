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

export default function Maximize() {
    const classes = useStyles();
    return (
        <SvgIcon
            viewBox="0 0 1024 1024"
            className={classes.root}
        >
<path d="M853.504 170.496v682.496H170.496V170.496h683.008m4.096-64h-691.2c-32.768 0-59.392 26.624-59.392 59.392v691.712c0 32.768 26.624 59.392 59.392 59.392h691.712c32.768 0 59.392-26.624 59.392-59.392v-691.2c0-33.28-26.624-59.904-59.904-59.904 0.512 0 0 0 0 0z"></path>

        </SvgIcon>
    );
}