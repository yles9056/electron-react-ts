import React, {useState} from "react";
import { ImageList, ImageListItem, ImageListItemBar,FormControl, FormLabel } from "@material-ui/core";
import Title from "../Title";
import {
  formLabelStyle
} from "../../../helpers/const/radio-style.const";
interface ImgList {
  img: string;
  title: string;
  isClick: boolean;
}
// Filter图像数据
const itemData:  ImgList[]= [
  {
    img: './images/graphic_none.png',
    title: "None",
    isClick: true
  },
  {
    img: "./images/graphic_bw_contrast.png",
    title: "Bw Contrast",
    isClick: false
  },
  {
    img: "./images/graphic_cool.png",
    title: "Cool",
    isClick: false
  },
  {
    img: "./images/graphic_warm.png",
    title: "Warm",
    isClick: false
  },
  {
    img:"./images/graphic_captivate.png",
    title: "Captivate",
    isClick: false
  },
  {
    img: "./images/graphic_stylish.png",
    title: "Stylish",
    isClick: false
  },
  {
    img: "./images/graphic_vibrant.png",
    title: "Vibrant",
    isClick: false
  },
  {
    img: "./images/graphic_highlight.png",
    title: "Highlight",
    isClick: false
  },
  {
    img: "./images/graphic_contrast.png",
    title: "Contrast",
    isClick: false
  }
];
const imageItemStyle = {
  width: '84px', 
  height: '96px', 
  marginBottom: '10px', 
  cursor: 'pointer'
}

const Effect = (props: any) => {
  const [currentTitle, setCurrentTitle] = useState('None');
  // 设置点击后的图像是否点击
  const handleFilterClick = (e: any, title: string) => {
    console.log(e, title)
    setCurrentTitle(title);
  }
  return (
    <div style={{ width: "220px", display: props.display }}>
      <Title name="Effect"/>
      <FormControl sx={{ width: "220px", marginTop: '10px'}}>
        <FormLabel sx={formLabelStyle}>
          Filter
        </FormLabel>
        <ImageList sx={{padding: '0 15px' }} rowHeight={96}>
          {
            itemData.map((item) => (
            <ImageListItem key={item.img} sx={{...imageItemStyle, border: `${(item.title === currentTitle) ? '2px solid #0078AE' : ''}`}}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
                onClick={(e) => handleFilterClick(e, item.title)}
              />
              <ImageListItemBar sx={{textAlign: 'center', fontWeight: 'bold'}} title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </FormControl>
    </div>
  );
};
export default Effect;
