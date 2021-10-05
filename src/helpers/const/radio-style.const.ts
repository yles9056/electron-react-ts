/* Radio FormControl sx styles */
const formControlLabelStyle = {
    height: "50px",
    // color: "#605E5C",
    margin: 0,
    borderBottom: "0.5px solid #C8C6C4",
    padding: "0 15px",
    justifyContent: "space-between",
    '& .css-ahj2mt-MuiTypography-root': {
        fontSize: '12px',
        fontWight: '700',
    },
    "&.Mui-checked": {
        color: "#0078AE"
    }
}

/* FormLabel sx styles */
const formLabelStyle = { 
    fontSize: '10px',
    fontWeight: '600', 
    paddingLeft: '15px',
    '&.Mui-focused': {
        color: "#605E5C"
    }
}

export {formControlLabelStyle, formLabelStyle}