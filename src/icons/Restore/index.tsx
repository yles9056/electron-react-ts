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

export default function Restore() {
    const classes = useStyles();
    return (
        <SvgIcon
            viewBox="0 0 1024 1024"
            className={classes.root}
        >
<path d="M704 320v554.496H149.504V320h554.496m0.512-64H148.48c-34.816 0-63.488 28.16-63.488 63.488V875.52c0 34.816 28.16 63.488 63.488 63.488h556.032c34.816 0 63.488-28.16 63.488-63.488V319.488c0-35.328-28.16-63.488-63.488-63.488z m171.52-170.496H318.976c-34.816 0-62.464 28.16-62.976 62.464v65.024h64V149.504h554.496v554.496h-64V768H875.52c34.816 0 62.464-28.16 62.976-62.976V147.968c0-34.304-28.16-62.464-62.464-62.464z"></path>

        </SvgIcon>
    );
}