import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import '../../resource/css/member/Signup.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";

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

function Signup() {
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
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="이름" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="전화번호" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="회사" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="부서" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="직급" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <Button id="btnSignup" variant="contained" fullWidth theme={theme}>회원가입</Button>
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

export default Signup;
