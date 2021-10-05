import React, {useState} from 'react'
import styles from './index.module.css'
const Title = (props: { name: string}) => {
    const [iconName, setIconName] = useState('icon-ic_reset_d');
    const handleReset = () => {
        setIconName('icon-ic_reset_n')
    }
    return (
        <div className={styles['title']}>
            <span>{props.name}</span>
            {props.name === 'Adjust' && <i className={iconName} onClick={handleReset}></i>}
        </div>
    )
}
export default Title