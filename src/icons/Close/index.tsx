import React from 'react';

// Material components
import { SvgIcon } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        width: '0.8em',
        height: '0.8em'
    }
}));

export default function Close() {
    const classes = useStyles();
    return (
        <SvgIcon
            viewBox="0 0 1024 1024"
            className={classes.root}
        >
<path d="M557.056 512l286.72-286.72c12.288-12.288 12.288-32.768 0-45.056-12.288-12.288-32.768-12.288-45.056 0l-286.72 286.72-286.72-286.72c-12.288-12.288-32.768-12.288-45.056 0-12.288 12.288-12.288 32.768 0 45.056l286.72 286.72-286.72 286.72c-12.288 12.288-12.288 32.768 0 45.056 12.288 12.288 32.768 12.288 45.056 0l286.72-286.72 286.72 286.72c12.288 12.288 32.768 12.288 45.056 0 12.288-12.288 12.288-32.768 0-45.056l-286.72-286.72z"></path>

        </SvgIcon>
    );
}