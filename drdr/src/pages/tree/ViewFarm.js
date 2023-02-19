import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import '../../resource/css/main.css';
import '../../resource/css/tree/AddFarm.css';
import Header from '../fragment/header';
import Stack from '@mui/material/Stack';

import r1 from '../../resource/img/r1.png';
import r2 from '../../resource/img/r2.png';
import r3 from '../../resource/img/r3.png';
import r4 from '../../resource/img/r4.png';
import r5 from '../../resource/img/r5.png';


import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { createTheme, ThemeProvider } from "@mui/material";

import styled from "@emotion/styled";
const Image = styled.img`
  width: 100%;
  margin:0 auto;
`;


const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})

function btnAdd(){
  window.location.href='/AddCarrot'
}

function ViewFarm() {


  return (

    <ThemeProvider theme={theme}>
      <div className="mainContainer">



        <div className='mainCenter'>

          <Header />


          <div className='carrotMain'>

            <Grid container spacing={2}>


              <Grid item xs={12}>
              <IconButton onClick={() => btnAdd()} style={{ backgroundColor:'#FF8000', borderRadius:'5px', color: "#FFFFFF", fontFamily: "GmarketSansMedium", fontSize :'15px' }}><ModeEditIcon style={{ color: "#FFFFFF"}} /><span>　작성</span></IconButton>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={1}>
                <MailOutlineIcon />
              </Grid>
              <Grid item xs={11}>
                <span id="title">제목이다</span>
              </Grid>

              <Grid item xs={1}>
                <SentimentSatisfiedAltIcon />
              </Grid>
              <Grid item xs={11}>
                <span id="recipient">김영재 (KYJ)</span>
              </Grid>

              <Grid item xs={1}>
                <ChatBubbleOutlineIcon />
              </Grid>
              <Grid item xs={11}>
                <span id="recipient">영재님 대전 잘 가세요 영재님 대전 잘 가세요 영재님 대전 잘 가세요영재님 대전 잘 가세요영재님 대전 잘 가세요</span>
              </Grid>

              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>


            </Grid>

            <Grid container spacing={9}>
              <Grid item xs={4}>
                <Stack justifyContent="center" alignItems="center" spacing={2}>

                  <Image src={r3} />
                  <a href='/ViewCarrot'>익명의 토끼</a>

                </Stack>


              </Grid>
              <Grid item xs={4}>
                <Stack justifyContent="center" alignItems="center" spacing={2}>

                  <Image src={r2} />
                  <a href='/ViewCarrot'>익명의 토끼</a>

                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack justifyContent="center" alignItems="center" spacing={2}>

                  <Image src={r1} />
                  <a href='/ViewCarrot'>익명의 토끼</a>

                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack justifyContent="center" alignItems="center" spacing={2}>

                  <Image src={r5} />
                  <a href='/ViewCarrot'>익명의 토끼</a>

                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack justifyContent="center" alignItems="center" spacing={2}>

                  <Image src={r4} />
                  <a href='/ViewCarrot'>익명의 토끼</a>

                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack justifyContent="center" alignItems="center" spacing={2}>

                  <Image src={r3} />
                  <a href='/ViewCarrot'>익명의 토끼</a>

                </Stack>
              </Grid>


            </Grid>




          </div>






        </div>

      </div>

    </ThemeProvider>
  );
}

export default ViewFarm;
