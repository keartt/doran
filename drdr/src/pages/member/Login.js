import React, { useState } from 'react';
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

const [Email, setemail] = useState("")
const [Pw, setpw] = useState("")

const onEmailHandler = (event) => {
    setemail(event.currentTarget.value)
}

const onPwHandler = (event) => {
    setpw(event.currentTarget.value)
}

const onSubmitHandler = (event) => {
    // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
    event.preventDefault();

    const formData = { email: Email, password: Pw };
      
    console.log(JSON.stringify(formData));

    fetch('/member/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, // json형태의 데이터를 서버로 보냅니다.
      body: JSON.stringify({
        email: Email,
        password: Pw
      })
    })

    .then(response => {
      // handle response from server
    })
    .catch(error => {
      // handle error
    });

  };

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
                    <form onSubmit={onSubmitHandler}>
                        <ThemeProvider theme={theme}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField required id="standard-required" name="email" value={Email} onChange={onEmailHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                    color: '#FF8000;'}}} label="이메일" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField required id="standard-required" name="pw" value={Pw} onChange={onPwHandler} fullWidth sx={{m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                                color: '#FF8000;'}}} label="비밀번호" defaultValue="" variant="standard" />
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1} direction="row">
                                        <Button type = "submit" id="btnLogin" variant="contained" fullWidth theme={theme}>로그인</Button>
                                        <Button id="btnLogin" variant="contained" fullWidth theme={theme}>카카오 로그인</Button>  
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}>
                                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                                        <Button href="/Signup" fullWidth theme={theme}>회원가입</Button>
                                        <Button href="/Email" fullWidth theme={theme}>이메일 찾기</Button>
                                        <Button href="/Pw" fullWidth theme={theme}>비밀번호 찾기</Button>
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
