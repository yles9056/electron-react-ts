import React from 'react'
import { Box, MenuList, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { ControlMenu, DeviceMenu, AdjustMenu, EffectMenu } from '../Menu'
import './sliderBar.css'
import menuFold from '../../helpers/util/menu-fold'
/**
 * 侧边栏区域
 */
const useStyled = makeStyles({
    root: {
        width: '69px',
        borderRight: '1px solid #eee'
    },
    menuItem: {
        flexWrap: 'wrap',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'transparent'
        }
    }
})
const boxStyles = {
    display: 'flex',
    borderRight: '1px solid #eee',
    backgroundColor: '#FCFCFC',
    minHeight: '100vh'
}

interface IconProps {
    iconName: string;
    menuName: string;
    selected: boolean;
}

/* 侧边栏图标及名称显示区 */
const Icon = (props: IconProps) => {
    const { iconName, menuName, selected } = props;
    return (
        <>
            <span className={`${iconName} slider-bar-icon ${selected && "selected"}`}></span>
            <span className={`${selected && "selected"}`}>{menuName}</span>
        </>
    )
}
const iconList = [
    { iconName: 'icon-ic_device_p', menuName: 'Device', value: 'device' },
    { iconName: 'icon-ic_control_p', menuName: 'Control', value: 'control' },
    { iconName: 'icon-ic_effect_p', menuName: 'Effect', value: 'effect' },
    { iconName: 'icon-ic_adjust_p', menuName: 'Adjust', value: 'adjust' },
]
export default function SliderBar(props: any) {
    const classes = useStyled();
    const [value, setValue] = React.useState();
    const [selected, setSelected] = React.useState(false);
    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        setSelected(true);
        menuFold.emit('menu-unfold')
    };
    return (
        <Box sx={boxStyles}>
            <MenuList className={classes.root} disableListWrap>
                {
                    iconList.map(item => (
                        <MenuItem className={classes.menuItem} key={item.value} disableGutters onClick={(e) => handleChange(e, item.value)}>
                            <Icon iconName={item.iconName} menuName={item.menuName} selected={selected && value === item.value}></Icon>
                        </MenuItem>
                    ))
                }
            </MenuList>
            {value === "device" && <DeviceMenu />}
            {value === "control" && <ControlMenu handleChangeRatio={props.handleChangeRatio}/>}
            {value === "effect" && <EffectMenu />}
            {value === "adjust" && <AdjustMenu />}
        </Box>
    )
}
