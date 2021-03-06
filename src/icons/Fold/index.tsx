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

export default function Fold() {
    const classes = useStyles();
    return (
        <SvgIcon
            viewBox="0 0 1024 1024"
            className={classes.root}
        >
<path d="M568.8 8c-16.8 0-31.2 9.6-40 21.6-0.8 0.8-3.2 0.8-4.8 2.4L57.6 499.2c-7.2 7.2-7.2 18.4 0 25.6l466.4 466.4c1.6 1.6 3.2 1.6 4.8 2.4 8.8 13.6 23.2 23.2 40.8 23.2 27.2 0 48.8-21.6 48.8-48.8 0-12-4.8-23.2-12.8-32l0.8-0.8-408.8-410.4c-7.2-7.2-7.2-18.4 0-25.6l406.4-407.2 3.2-3.2-0.8-0.8c7.2-8.8 12-20 12-32 0-26.4-21.6-48-49.6-48z m314.4 22.4c-1.6 0.8-3.2 0.8-4.8 2.4L411.2 499.2c-7.2 7.2-7.2 18.4 0 25.6l466.4 466.4c1.6 1.6 3.2 1.6 4.8 2.4 8.8 13.6 23.2 23.2 40.8 23.2 27.2 0 48.8-21.6 48.8-48.8 0-12-4.8-23.2-12.8-32l0.8-0.8-409.6-410.4c-7.2-7.2-7.2-18.4 0-25.6l406.4-406.4 3.2-3.2-0.8-0.8c7.2-8.8 12-20 12-32 0-27.2-21.6-48.8-48.8-48.8-16 0-30.4 9.6-39.2 22.4z"></path>

        </SvgIcon>
    );
}