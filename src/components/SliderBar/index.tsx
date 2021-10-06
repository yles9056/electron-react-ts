import React from 'react'
import { Box, MenuList, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { ControlMenu, DeviceMenu, AdjustMenu, EffectMenu } from '../Menu'
import styles from './index.module.css'
/**
 * 侧边栏区域
 */
const useStyled = makeStyles({
    root: {
        width: '69px',
        borderRight: '1px solid #C8C6C4'
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
    borderRight: '1px solid #C8C6C4',
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
            <span className={`${iconName} ${styles['slider-bar-icon']} ${selected && styles['selected']}`}></span>
            <span className={`${selected && styles['selected']}`}>{menuName}</span>
        </>
    )
}
const iconList = [
    { iconName: 'icon-ic_device_p', menuName: 'Device', value: 'device' },
    { iconName: 'icon-ic_control_p', menuName: 'Control', value: 'control' },
    { iconName: 'icon-ic_effect_p', menuName: 'Effect', value: 'effect' },
    { iconName: 'icon-ic_adjust_p', menuName: 'Adjust', value: 'adjust' },
]

const otherIcon = [
    { iconName: 'icon-ic_output_p', menuName: 'Output', value: 'output' },
    { iconName: 'icon-ic_settings_p', menuName: 'Settings', value: 'settings' },
]
export default function SliderBar(props: any) {
    const classes = useStyled();
    // 当前所选菜单项值
    const [value, setValue] = React.useState(' ');
    // 判断是否被选择修改样式
    const [selected, setSelected] = React.useState(false);
    // 设置当前是展开还是收回按钮
    const [isUnfold, setIsUnfold] = React.useState('icon-ic_menu');
    const [display, setDisplay] = React.useState('block')
    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        setSelected(true);
        setDisplay('block');
        setIsUnfold('icon-ic_arrow')
        // props.getMenuValue(newValue);
    };
    const clickUnfold = () => {
        if (isUnfold === 'icon-ic_menu') {
            // setValue('device')
            setSelected(true);
            setIsUnfold('icon-ic_arrow')
            setDisplay('block')
        } else {
            setDisplay('none')
            setIsUnfold('icon-ic_menu')
        }
    }
    return (
        <Box sx={boxStyles}>
            <MenuList className={classes.root} disableListWrap>
                <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                    <i className={isUnfold} onClick={clickUnfold}></i>
                </div>
                {
                    iconList.map(item => (
                        <MenuItem className={classes.menuItem} key={item.value} disableGutters onClick={(e) => handleChange(e, item.value)}>
                            <Icon iconName={item.iconName} menuName={item.menuName} selected={selected && value === item.value}></Icon>
                        </MenuItem>
                    ))
                }
            </MenuList>
            {value === "device" && <DeviceMenu display={display} />}
            {value === "control" && <ControlMenu display={display} />}
            {value === "effect" && <EffectMenu display={display} />}
            {value === "adjust" && <AdjustMenu display={display} />}
            <ul className={styles['other-menu']}>
                {
                    otherIcon.map(item => (
                        <li key={item.value} onClick={(e) => handleChange(e, item.value)}>
                            <Icon iconName={item.iconName} menuName={item.menuName} selected={selected && value === item.value}></Icon>
                        </li>
                    ))
                }
            </ul>
        </Box>
    )
}
