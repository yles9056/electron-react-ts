import React from 'react';

// Material components
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        color: '#0078ae',
        width: '0.8em',
        height: '0.8em'
    }
});

export default function Unfold() {
    const classes = useStyles();
    return (
        <SvgIcon
            viewBox="0 0 1024 1024"
            className={classes.root}
        >
<path d="M455.2 8c-27.2 0-49.6 22.4-49.6 49.6 0 12 4.8 23.2 12 32l-0.8 0.8 2.4 2.4 406.4 407.2c7.2 7.2 7.2 18.4 0 25.6L416 935.2l0.8 0.8c-8 8.8-12.8 20-12.8 32 0 27.2 22.4 49.6 49.6 49.6 17.6 0 32-9.6 40.8-23.2 1.6-0.8 3.2-0.8 4.8-1.6l466.4-466.4c7.2-7.2 7.2-18.4 0-25.6L500.8 32.8c-1.6-1.6-3.2-1.6-5.6-2.4C486.4 17.6 472 8 455.2 8zM100.8 8C73.6 8 52 30.4 52 57.6c0 12 4.8 23.2 12 32l-0.8 0.8 2.4 2.4L472 500c7.2 7.2 7.2 18.4 0 25.6l-408.8 408 0.8 0.8c-7.2 8.8-12.8 20-12.8 32 0 27.2 21.6 49.6 49.6 49.6 17.6 0 32-9.6 40.8-23.2 1.6-0.8 3.2-0.8 4.8-1.6l466.4-466.4c7.2-7.2 7.2-18.4 0-25.6L146.4 32.8c-1.6-1.6-3.2-1.6-5.6-2.4-8.8-12.8-23.2-22.4-40-22.4z"></path>

        </SvgIcon>
    );
}