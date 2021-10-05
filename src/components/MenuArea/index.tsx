import React, {useState, useEffect} from 'react'
import { DeviceMenu, Title } from '../Menu';
import menuFold from '../../helpers/util/menu-fold'
const MenuArea = () => {
    const [display, setDisplay] = useState('none');
    const changeDisplay = () => {
        setDisplay('none')
    }
    useEffect(() => {
        menuFold.on('menu-unfold', () => {
            setDisplay('block')
        })
        return () => {
            menuFold.removeAllListeners();
        }
    })
    return (
        <div style={{ width: "220px", display: 'block' }}>
            <Title name="Device"/>
            <DeviceMenu />
        </div>
    )
}
export default MenuArea;