import React, {useState} from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import Title from "../Title";
import {
  formLabelStyle,
  formControlLabelStyle,
} from "../../../helpers/const/radio-style.const";
import cropRatio from '../../../helpers/util/crop';
import styles from './index.module.css';
// Todo: 与后台对接后，该处Camera列表从后台获取
const ratioList = [
  { id: "1", name: "16:9", iconName: 'icon-ic_l_16_9_n', checked: true},
  { id: "2", name: "9:16", iconName: 'icon-ic_p_16_9_n', checked: false },
  { id: "3", name: "4:3", iconName: 'icon-ic_l_4_3_n-1', checked: false},
  { id: "4", name: "3:4", iconName: 'icon-ic_p_4_3_n', checked: false },
  { id: "5", name: "1:1", iconName: 'icon-ic_1_1_n', checked: false  },
  { id: "6", name: "Free ratio", iconName: 'icon-ic_free_ratio_n', checked: false},
];

const LabelName = (props: any) => {
  const {name, iconName, checked} = props;
  return (
    <>
      <span className={`${iconName} ${styles['ratio-icon']} ${checked && styles['checked']}`}>
        <span className="path1"></span>
        <span className="path2"></span>
      </span>
      <span>{name}</span>
    </>
  )
}
const Control = (props: any) => {
  const [value, setValue] = useState('16:9')
  const handleChangeRatio = (event: any) => {
    cropRatio.emit('crop', event.target.value)
    setValue(event.target.value)
  }
  return (
    <div style={{ width: "220px", display: props.display }}>
      <Title name="Control"/>
      <FormControl sx={{ width: "220px", marginTop: '10px'}}>
        <FormLabel sx={formLabelStyle}>
          Ratio
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="radio-buttons-group"
          value={value}
          onChange={handleChangeRatio}
        >
          {
            ratioList.map((item) => (
              <FormControlLabel
                className={`${item.checked && styles['checked']}`}
                key={item.id}
                sx={formControlLabelStyle}
                value={item.name}
                control={<Radio />}
                label={<LabelName name={item.name} iconName={item.iconName} checked={item.checked}/>}
                labelPlacement="start"
              />
            ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Control;
