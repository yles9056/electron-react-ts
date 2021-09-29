import React from 'react'
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@material-ui/core'
import Title from '../Title'
import menuFold from '../../../helpers/util/menu-fold'
import { formControlLabelStyle, formLabelStyle } from '../../../helpers/const/radio-style.const'
// Todo: 与后台对接后，该处Camera列表从后台获取
const cameraList = [
    { id: '1', name: 'Kensington WebCam01' },
    { id: '2', name: 'Kensington WebCam02' },
    { id: '3', name: 'Kensington WebCam03' },
    { id: '4', name: 'Kensington WebCam04' },
]

const Device = () => {
    const [value, setValue] = React.useState('');
    const [display, setDisplay] = React.useState('block');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
 
    const changeDisplay = () => {
        setDisplay('none')
    }
    React.useEffect(() => {
        menuFold.on('menu-unfold', () => {
            setDisplay('block')
        })
    })
    return (
        <div style={{width: "220px", display: display}}> 
            <Title name="Device" onClick={changeDisplay}/>
            <FormControl sx={{ width: '220px' }}>
                <FormLabel sx={formLabelStyle}>Camera</FormLabel>
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
                                sx={formControlLabelStyle} />
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </div>
    )
}
export default Device;