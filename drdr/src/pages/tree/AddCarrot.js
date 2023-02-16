import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import '../../resource/css/tree/AddCarrot.css';
import Grid from '@mui/material/Grid';
import img1 from '../../resource/img/1.jpg';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { createTheme, ThemeProvider } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from "@emotion/styled";
const Image = styled.img`
  width: 30%;
  margin:0 auto;
`;


const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})


function Test() {

  var settings = {
    dots: false, // 캐러셀의 점을 보여줄 것인지
    infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
    speed: 500, // 넘어가는 속도는 몇으로 할 것인지
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="mainContainer">

        <div className='mainCenter'>

          {/* 헤더 부분 */}
          <div className='mainHeader'>

            <IconButton style={{ backgroundColor: "#F4282F", width: "24px", height: "24px" }}><CloseIcon style={{ color: "white", width: "20px", height: "20px" }} /></IconButton>
            <a id="header1" href="/">도란도란</a>
            <IconButton style={{ backgroundColor: "#40FF00", width: "24px", height: "24px" }}><CheckIcon style={{ color: "white", width: "20px", height: "20px" }} /></IconButton>

          </div>




          <div className='carrotMain'>

            <Grid container spacing={2}>


             <Grid item xs={2}></Grid>
             <Grid item xs={8}>

             <Slider {...settings}>
              <div>
                <Image src={img1} />
                
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>




             </Grid>
             <Grid item xs={2}></Grid>






            </Grid>



            




          </div>


        </div>

      </div>
    </ThemeProvider>
  );
}

export default Test;
