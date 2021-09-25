import React from 'react'
import { Box, Avatar, Tab, Tabs} from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/styles'
import './sliderBar.css'
/**
 * 侧边栏区域
 */
const useStyled = makeStyles({
    avatar: {
        width: '64px',
        height: '48px',
        margin: '0 auto',
    },
    tab: {
        borderColor: "divider",
    }
})
const boxStyles: {} = {
    display: 'flex',
    borderRight: '1px solid #eee',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FCFCFC'
}

const MyTab = styled(Tab)({
    textTransform: "none",
    minWidth: '60px',
    marginTop: '5px'
});

interface IconProps {
    iconName: string;
    value: number;
    index: number
}
const Icon = (props: IconProps) => {
    const {iconName, value, index} = props;
    return (
        <span className={`${iconName} slider-bar-icon ${value === index ? 'selected' : ''}`}></span>
    )
}
export default function SliderBar() {
    const classes = useStyled();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={boxStyles}>
            <div>
                <Avatar className={classes.avatar} alt="" src="./image/logo.png" variant="square" />
            </div>
            <Tabs
                className={classes.tab}
                orientation="vertical"
                aria-label="styled tabs example"
                value={value}
                onChange={handleChange}
            >
                <MyTab icon={<Icon 
                iconName="icon-ic_device_n" 
                value={value} index={0} /> }label="Device" />
                <MyTab icon={<Icon iconName="icon-ic_control_n" value={value} index={1}></Icon>} label="Controls"/>
                <MyTab icon={<Icon iconName="icon-ic_adjust_n" value={value} index={2}></Icon>} label="Adjust" />
                <MyTab icon={<Icon iconName="icon-ic_effect_n" value={value} index={3}></Icon>} label="Effect" />
            </Tabs>
        </Box>
    )
}
