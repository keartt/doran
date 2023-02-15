import React from 'react';
import Header from './fragment/header';
import '../resource/css/main.css';
import '../resource/css/Login.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Login() {
  return (
    <div className="mainContainer">

      <div className='mainCenter'>
        
        {/* 헤더 부분 */}
        <Header/>

        <div className='divMain'>
          
          {/* 여기서 작업 */}

            <div>
                <h1 align = "center">로그인</h1>
            </div>

            <div>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField required id="standard-required" fullWidth sx={{ m: 1}} label="ID" defaultValue=" " variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="PW" defaultValue=" " variant="standard" />
                        </Grid>
                        
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}>
                            <Button id="btnLogin" variant="contained" fullWidth>로그인</Button>
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
