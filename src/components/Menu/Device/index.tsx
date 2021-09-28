import React from 'react'
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@material-ui/core'
import './device.css'
import Title from '../Title'
// Todo: 与后台对接后，该处Camera列表从后台获取
const cameraList = [
    { id: '1', name: 'Kensington WebCam01' },
    { id: '2', name: 'Kensington WebCam02' },
    { id: '3', name: 'Kensington WebCam03' },
    { id: '4', name: 'Kensington WebCam04' },
]
const labelStyle = {
    height: '50px',
    color: '#605E5C',
    margin: 0,
    borderBottom: '0.5px solid #C8C6C4',
    padding: '0 10px',
    '& .css-ahj2mt-MuiTypography-root': {
        fontSize: '14px'
    }
}
const Device = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <>
            <Title name="Device" />
            <FormControl sx={{ width: '220px' }}>
                <FormLabel sx={{ fontSize: '14px', fontWeight: '600', paddingLeft: '15px' }}>Camera</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    {
                        cameraList.map(item => (
                            <FormControlLabel key={item.id}
                                value={item.name}
                                control={<Radio size="small" />}
                                label={item.name}
                                labelPlacement="start"
                                sx={labelStyle} />
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </>
    )
}
export default Device;