import React from "react";
import {
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
} from "@material-ui/core";
import Title from "../Title";
import { Box } from "@material-ui/system";
// Todo: 与后台对接后，该处Camera列表从后台获取
const ratioList = [
    { id: "1", name: "16:9" },
    { id: "2", name: "9:16" },
    { id: "3", name: "4:3" },
    { id: "4", name: "3:4" },
];
const labelStyle = {
    height: "50px",
    color: "#605E5C",
    margin: 0,
    borderBottom: "0.5px solid #C8C6C4",
    padding: "0 10px",
    "& .css-ahj2mt-MuiTypography-root": {
        fontSize: "14px",
    },
};
// const RatioRow = () => {
//     return (
//         <Box sx={{display: 'flex'}}>
//             <span>16: 9</span>
//             <Radio/>
//         </Box>
//     )
// }
const Control = () => {
    return (
        <>
            <Title name="Control" />
            <span>
                Ratio
            </span>
        </>
    );
};
export default Control;
