import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import '../../resource/css/member/Signup.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme({
    typography: {
        fontSize: "70"
    }
})

function Signup() {
  return (
    <div className="SignupContainer">

        <div className='SignupCenter'>
        
        {/* 헤더 부분 */}
        <Header/>

            <div className='divMain'>
          
            {/* 여기서 작업 */}

                <div>
                    <p align = "center">
                        <ThemeProvider theme={theme}>
                            <AccountCircleIcon color="action"></AccountCircleIcon>
                        </ThemeProvider>
                    </p>  
                </div>
                
                <div>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{ m: 1}} label="이메일" defaultValue=" " variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="비밀번호" defaultValue=" " variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="이름" defaultValue=" " variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="전화번호" defaultValue=" " variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="회사" defaultValue=" " variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="부서" defaultValue=" " variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="직급" defaultValue=" " variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button id="btnSignup" variant="contained" fullWidth>회원가입</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>               
            </div>
        </div>
    </div>
  );
}

export default Signup;
