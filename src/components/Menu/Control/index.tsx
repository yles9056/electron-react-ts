import React from "react";
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
import menuFold from '../../../helpers/util/menu-fold'
import cropRatio from '../../../helpers/util/crop'
// Todo: 与后台对接后，该处Camera列表从后台获取
const ratioList = [
  { id: "1", name: "16:9"},
  { id: "2", name: "9:16" },
  { id: "3", name: "4:3" },
  { id: "4", name: "3:4" },
  { id: "5", name: "1:1" },
  { id: "6", name: "Free ratio" },
];

const Control = (props: any) => {
  const [display, setDisplay] = React.useState('block');
  const changeDisplay = () => {
    setDisplay('none')
  }
  React.useEffect(() => {
    menuFold.on('menu-unfold', () => {
      setDisplay('block')
    })
  })
  const handleChangeRatio = (event: any) => {
    console.log(event.target.value);
    cropRatio.emit('crop', event.target.value)
  }
  return (
    <div style={{ width: "220px", display: display }}>
      <Title name="Control" onClick={changeDisplay} />
      <FormControl sx={{ width: "220px" }}>
        <FormLabel sx={formLabelStyle}>Ratio</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="radio-buttons-group"
          onChange={handleChangeRatio}
        >
          {
            ratioList.map((item) => (
              <FormControlLabel
                key={item.id}
                sx={formControlLabelStyle}
                value={item.name}
                control={<Radio />}
                label={item.name}
                labelPlacement="start"
              />
            ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Control;
