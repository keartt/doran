import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import '../../resource/css/tree/AddCarrot.css';
import Grid from '@mui/material/Grid';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material";
import r1 from '../../resource/img/r1.png';
import r2 from '../../resource/img/r2.png';
import r3 from '../../resource/img/r3.png';
import r4 from '../../resource/img/r4.png';
import r5 from '../../resource/img/r5.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import Switch from '@mui/material/Switch';

import styled from "@emotion/styled";
const Image = styled.img`
  width: 30%;
  margin:0 auto;
`;


const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSansMedium'
  }
})

const label = { inputProps: { 'check': 'check' } };

function AddCarrot() {

  // var state = {
  //   slideIndex: 0,
  //   updateCount: 0
  // };

  // function clicks() {

  //   alert("dd");

  // }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    // afterChange: () =>
    //     this.setState(state => ({ updateCount: state.updateCount + 1 })),
    //   beforeChange: (current, next) => this.setState({ slideIndex: next })
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="mainContainer">

        <div className='mainCenter'>

          {/* 헤더 부분 */}
          <div className='mainHeader'>

            <IconButton style={{ backgroundColor: "#F4282F", width: "24px", height: "24px" }}><CloseIcon style={{ color: "white", width: "20px", height: "20px" }} /></IconButton>
            <a id="header1" href="/">도란도란</a>

            <IconButton type="submit" style={{ backgroundColor: "#40FF00", width: "24px", height: "24px" }}><CheckIcon style={{ color: "white", width: "20px", height: "20px" }} /></IconButton>
            <IconButton style={{ backgroundColor: "#40FF00", width: "24px", height: "24px" }}><CheckIcon style={{ color: "white", width: "20px", height: "20px" }} /></IconButton>


          </div>




          <div className='carrotMain'>



            <Grid container spacing={2}>

              <Grid item xs={1}></Grid>
              <Grid item xs={10}>

                <div id="slider-div">

                  {/* <Slider ref={slider => (this.slider = slider)} {...settings}> */}
                  <Slider {...settings}>
                    <div>
                      <Image src={r1} />
                    </div>
                    <div>
                      <Image src={r2} />
                    </div>
                    <div>
                      <Image src={r3} />
                    </div>
                    <div>
                      <Image src={r4} />
                    </div>
                    <div>
                      <Image src={r5} />
                    </div>
                  </Slider></div>

              </Grid>


              <Grid item xs={12} >

                <TextField className='test' id="standard-required" label="| 메시지" fullWidth sx={{
                  m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "label" : {color:'black'}, "& label.Mui-focused": {
                    color: '#FF8000;'
                  }
                }} multiline rows={5} variant="standard" />
              </Grid>

              <Grid item xs={12} ></Grid>
              <Grid item xs={12} ><span id="anonymous">| 익명</span></Grid>
              <Grid item xs={12} ><Switch {...label} defaultChecked color="warning" /></Grid>

            </Grid>



            




          </div>

        </div>

      </div>
    </ThemeProvider>
  );
}

export default AddCarrot;
