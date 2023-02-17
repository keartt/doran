import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import '../../resource/css/member/Login.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";
import Divider from '@mui/material/Divider';

const theme = createTheme({

    status: {
        danger: '#FE9A2E',
      },
      palette: {
        primary: {
          main: '#FE9A2E',
          darker: '#FE9A2E',
        },
        neutral: {
          main: '#FE9A2E',
          contrastText: '#FE9A2E',
        }
    },
    typography: {
        fontFamily: "GmarketSansMedium"
      }
})


function Login() {
  return (
    <div className="mainContainer">

        <div className='mainCenter'>
        
        {/* 헤더 부분 */}
        <Header/>
            
            <div className='divMain'>
          
            {/* 여기서 작업 */}

                <div>
                    <p align = "center">
                        <img src= "Login.png" width="70%" height="30%"></img>
                    </p>                   
                </div>

                <div>
                    <form>
                        <ThemeProvider theme={theme}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField required id="standard-required" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                    color: '#FF8000;'}}} label="이메일" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="비밀번호" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1} direction="row">
                                        <Button id="btnLogin" variant="contained" fullWidth theme={theme}>로그인</Button>
                                        <Button id="btnLogin" variant="contained" fullWidth theme={theme}>카카오 로그인</Button>  
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}>
                                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                                        <Button href="#text-buttons" fullWidth theme={theme}>회원가입</Button>
                                        <Button href="#text-buttons" fullWidth theme={theme}>아이디 찾기</Button>
                                        <Button href="#text-buttons" fullWidth theme={theme}>비밀번호 찾기</Button>
                                    </Stack>
                                </Grid> 
                            </Grid>
                        </ThemeProvider>
                    </form>
                </div>               
            </div>
        </div>
    </div>
  );
}

export default Login;
