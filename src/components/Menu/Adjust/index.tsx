import React from 'react'
import { Typography, Box, Slider, FormControlLabel, Checkbox, Grid } from "@material-ui/core";
import Title from "../Title";
import menuFold from '../../../helpers/util/menu-fold'
const Adjust = () => {
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
    );
    const [display, setDisplay] = React.useState('block');
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };
    const changeDisplay = () => {
        setDisplay('none')
    }
    React.useEffect(() => {
        menuFold.on('menu-unfold', () => {
            setDisplay('block')
        })
        return () => {
            menuFold.removeAllListeners();
        }
    })
    return (
        <div style={{ width: "220px", display: display, padding: '0 15px' }}>
            <Title name="Adjust" onClick={changeDisplay} />
            <Typography sx={{
                fontSize: '10px',
                fontWeight: '600',
                paddingLeft: '15px'
            }}>General</Typography>
            <Box sx={{ width: '100%', height: '80px' }}>
                <Grid container sx={{justifyContent: 'space-between'}}>
                    <div>
                        <span className="icon-ic_contrast" style={{fontSize: "14px"}}>
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </span>
                        <span>Contrast</span>
                    </div>
                    <FormControlLabel
                        value="contrast"
                        control={<Checkbox />}
                        label="Auto"
                        labelPlacement="end"
                    />
                </Grid>
                <Slider
                    sx={{ color: "#0078AE" }}
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                />
                {value}
            </Box>
        </div>
    )
}
export default Adjust