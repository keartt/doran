import Grid from '@mui/material/Grid';
import React from 'react';
import '../../resource/css/main.css';
import '../../resource/css/tree/AddCarrot.css';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import r3 from '../../resource/img/r3.png';

import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import styled from "@emotion/styled";
const Image = styled.img`
  width: 100%;
  margin:0 auto;
`;
const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSansMedium'
  }
})


function ViewCarrot() {




  return (
    <ThemeProvider theme={theme}>
      <div className="mainContainer">

        <div className='mainCenter'>

          {/* 헤더 부분 */}
          <div className='mainHeader'>

            <IconButton style={{ backgroundColor: "#F4282F", width: "24px", height: "24px" }}><ChevronLeftIcon style={{ color: "white", width: "20px", height: "20px" }} /></IconButton>
            <a id="header1" href="/">도란도란</a>
            <IconButton style={{ backgroundColor: "#F4282F", width: "24px", height: "24px" }}><CloseIcon style={{ color: "white", width: "20px", height: "20px" }} /></IconButton>

          </div>




          <div className='carrotMain'>



            <Grid container spacing={2}>

              <Grid item xs={4.8}></Grid>
              <Grid item xs={3.2}><Image src={r3} /></Grid>
              <Grid item xs={4}></Grid>

              <Grid item xs={12}>

              <TextField id="outlined-multiline-static" label="| 바니바니당근당근 [ 익명의 토끼 ]"  fullWidth sx={{
                  m: 1, '& .MuiOutlinedInput-root.Mui-disabled': {
                    '& fieldset': {
                      borderColor: '#FF8000',
                    },'& input.Mui-disabled':{
                      color:'black'
                    }
                  },"& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",},
                    label:{
                      '&.Mui-disabled': {
                        color: '#FF8000'}
                    }
                }} multiline rows={8} defaultValue="ㅜ오아아ㅏ앙아아아아ㅏ아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ" disabled/>


              

              </Grid>
              

            </Grid>








          </div>

        </div>

      </div>
    </ThemeProvider>
  );
}

export default ViewCarrot;
 