import React, { useState } from 'react'
import { Typography, Box, Slider, FormControlLabel, Checkbox, Grid, Switch } from "@material-ui/core";
import Title from "../Title";
import styles from './index.module.css'
// Adjust数据类型
interface AdjustData {
    iconName: string;
    name: string;
    value: number;
    auto: boolean;
}
// General部分Adjust数据
const adjustList: AdjustData[] = [
    { iconName: 'icon-ic_contrast', name: 'Contrast', value: 0, auto: false },
    { iconName: 'icon-ic_white_balance', name: 'White Balance', value: 0, auto: false },
    { iconName: 'icon-ic_exposure', name: 'Exposure', value: 0, auto: false }
]
// Advance部分Adjust数据
const adjustAdvanceList: AdjustData[] = [
    { iconName: 'icon-ic_brightness', name: 'Brightness', value: 0, auto: false },
    { iconName: 'icon-ic_sharpness', name: 'Sharpness', value: 0, auto: false },
    { iconName: 'icon-ic_hue', name: 'HUE', value: 0, auto: false },
    { iconName: 'icon-ic_saturation', name: 'Saturation', value: 0, auto: false },
    { iconName: 'icon-ic_gamma', name: 'Gamma', value: 0, auto: false }
]

/**
 * Adjust菜单页面
 */
const Adjust = (props: any) => {
    const [adjustData, setAdjustData] = useState(adjustList);
    const [adjustAdvanceData, setAadjustAdvanceData] = useState(adjustAdvanceList);
    const [showAdvance, setShowAdvance] = React.useState(false);

    // General部分数据滑动条变化、自动调整按钮勾选状态修改事件
    const handleSliderChange = (e: any, data: AdjustData) => {
        const  newData  = adjustData.map((item) => {
            if (item.name === data.name) {
                return { ...item, value: e.target.value }
            } else {
                return item;
            }
        });
        setAdjustData(newData);
    };
    
    const handleAuto = (e: any, data: AdjustData) => {
        const newData = adjustData.map((item) => {
            if (item.name === data.name) {
                return { ...item, auto: e.target.checked }
            } else {
                return item;
            }
        });
        setAdjustData(newData);
    }

    // Advance部分数据滑动条变化、自动调整按钮勾选状态修改事件
    const handleAdvanceSliderChange = (e: any, data: AdjustData) => {
        const  newData  = adjustAdvanceData.map((item) => {
            if (item.name === data.name) {
                return { ...item, value: e.target.value }
            } else {
                return item;
            }
        });
        setAadjustAdvanceData(newData);
    };
    const handleAdvanceAuto = (e: any, data: AdjustData) => {
        const newData = adjustData.map((item) => {
            if (item.name === data.name) {
                return { ...item, auto: e.target.checked }
            } else {
                return item;
            }
        });
        setAadjustAdvanceData(newData);
    }
    

    // 设置是否开启advance adjust内容
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowAdvance(event.target.checked);
    };
    return (
        <div style={{ width: "220px", display: props.display, height: '600px', overflowY: 'auto' }}>
            <Title name="Adjust" />
            <Typography sx={{
                fontSize: '10px',
                fontWeight: '600',
                paddingLeft: '15px',
                marginTop: '10px'
            }}>General</Typography>
            {/* General部分 */}
            {
                adjustData.map(item => (
                    <Box key={item.name} sx={{ height: '50px', borderBottom: '0.5px solid #C8C6C4', padding: '10px 15px' }}>
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', height: '20px' }}>
                            <div className={styles['adjust-title']}>
                                <span className={item.iconName} style={{ fontSize: "14px" }}>
                                </span>
                                <span className={styles['adjust-name']}>{item.name}</span>
                            </div>
                            <FormControlLabel
                                sx={{ margin: 0, '& .MuiFormControlLabel-label': { fontSize: '10px' } }}
                                value={item.auto}
                                control={<Checkbox size="small" disableRipple sx={{ padding: 0, height: '4px' }}
                                    checked={item.auto} onChange={(e) => handleAuto(e, item)} />}
                                label="Auto"
                                labelPlacement="end"
                            />
                        </Grid>
                        <Slider
                            size="small"
                            sx={{ color: "#0078AE", padding: '6px 0' }}
                            disabled={item.auto}
                            value={typeof item.value === 'number' ? item.value : 0}
                            name={item.name}
                            onChange={(e) => handleSliderChange(e, item)}
                        />
                        <span className={`${styles['adjust-value']} ${item.auto && styles['disabled']}`}>{item.value}</span>
                    </Box>
                ))
            }

            <div className={styles['adjust-advance']}>
                <span>Advance</span>
                <Switch
                    size="small"
                    checked={showAdvance}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            {
                showAdvance && adjustAdvanceList.map(advance => (
                    <Box key={advance.name} sx={{ height: '50px', borderBottom: '0.5px solid #C8C6C4', padding: '10px 15px' }}>
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', height: '20px' }}>
                            <div className={styles['adjust-title']}>
                                <span className={advance.iconName} style={{ fontSize: "14px" }}>
                                </span>
                                <span className={styles['adjust-name']}>{advance.name}</span>
                            </div>
                            <FormControlLabel
                                sx={{ margin: 0, '& .MuiFormControlLabel-label': { fontSize: '10px' } }}
                                value={advance.auto}
                                control={<Checkbox size="small" disableRipple sx={{ padding: 0, height: '4px' }}
                                 onChange={(e) => handleAdvanceAuto(e, advance)} />}
                                label="Auto"
                                labelPlacement="end"
                            />
                        </Grid>
                        <Slider
                            size="small"
                            sx={{ color: "#0078AE", padding: '6px 0' }}
                            value={typeof advance.value === 'number' ? advance.value : 0}
                            name={advance.name}
                            disabled={advance.auto}
                            onChange={(e) => handleAdvanceSliderChange(e, advance)}
                        />
                        <span className={styles['adjust-value']}>{advance.value}</span>
                    </Box>
                ))
            }
        </div>
    )
}
export default Adjust