import React, {useState} from 'react'
import { RadioGroup, FormControlLabel, Radio, FormControl } from '@material-ui/core'
import Title from '../Title'
import { formControlLabelStyle } from '../../../helpers/const/radio-style.const'
// Todo: 与后台对接后，该处Camera列表从后台获取
const cameraList = [
    {id: '0', name: 'Local Camera', checked: true},
    { id: '1', name: 'Kensington WebCam01', checked: false },
    { id: '2', name: 'Kensington WebCam02', checked: false },
    { id: '3', name: 'Kensington WebCam03', checked: false },
    { id: '4', name: 'Kensington WebCam04', checked: false },
]
const LabelName = (props: any) => {
    const {checked, name} = props;
    return (
        <>
            <span style={{color: `${checked ? '#0078AE': '#605E5C'}`}}>{name}</span>
        </>
    )
}
const Device = (props: any) => {
    // const [value, setValue] = useState('0');
    const [cameraData, setCameraData] = useState(cameraList);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newData = cameraData.map((item) => {
            if (item.id === event.target.value) {
                return { ...item, checked: true }
            } else {
                return { ...item, checked: false };
            }
        });
        setCameraData(newData);
    };
    return (
        <>
        <div style={{width: "220px", display: props.display}}> 
        <Title name="Device"/>
            <FormControl sx={{ width: '220px' }}>
                <RadioGroup
                    aria-label="device"
                    name="controlled-radio-buttons-group"
                    defaultValue="0"
                    onChange={handleChange}
                >
                    {
                        cameraData.map(item => (
                            <FormControlLabel key={item.id}
                                value={item.id}
                                control={<Radio size="small" />}
                                label={<LabelName checked={item.checked} name={item.name}/>}
                                labelPlacement="start"
                                sx={formControlLabelStyle} />
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </div>
        </>
    )
}
export default Device;