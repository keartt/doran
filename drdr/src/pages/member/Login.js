import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import '../../resource/css/member/Login.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme({
    typography: {
        fontSize: "70"
    }
})

function Login() {
  return (
    <div className="loginContainer">

        <div className='loginCenter'>
        
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
                                <Stack spacing={1} direction="row">
                                    <Button id="btnLogin" color="success" variant="contained" fullWidth>로그인</Button>  
                                    <Button id="btnLogin" variant="contained" fullWidth>회원가입</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </div>               
            </div>
        </div>
    </div>
  );
}

export default Login;
