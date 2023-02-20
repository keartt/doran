import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import '../../resource/css/member/Pw.css';
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


function Pw() {
  return (
    <div className="mainContainer">


        <div className='mainCenter'>
        
        {/* 헤더 부분 */}
        <Header/>

            <div className='divMain'>
          
            {/* 여기서 작업 */}

                <div>
                    <p align = "center">                     
                        <img src= "Pw.png" width="50%" height="20%"></img>           
                    </p>                   
                </div>

                <div>
                    <form>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required id="email" name="email" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="이메일" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField required id="name" name="name" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="이름" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="phone" name="phone" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="전화번호" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="company" name="company" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="회사" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="department" name="department" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="부서" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                            <TextField required id="rank" name="rank" fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                            color: '#FF8000;'}}} label="직급" defaultValue="" variant="standard" />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth  id="btnLogin" size="small">비밀번호 찾기</Button>
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

export default Pw;
