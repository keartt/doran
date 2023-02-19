import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import '../../resource/css/main.css';
import '../../resource/css/tree/AddFarm.css';
import Header from '../fragment/header';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})
const theme2 = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium",
    fontSize: '12px'
  }
})

var arrName = ['이기춘', '강성현', '김영재', '이유진', '김상명'];
var arrId = ['lkc', 'ksh', 'kyj', 'lyj', 'ksm'];
function renderRow(props) {
  const { index, style } = props;

  return (
    <ThemeProvider theme={theme2}>
      <ListItem style={style} key={arrName[index]} value={arrName[index]} component="div" disablePadding onClick={() => clicks(index)}>
       <ListItemButton>
          <Avatar sx={{ marginRight: 2 }}>
            <PersonIcon />
          </Avatar>
        
        <ListItemText primary={`${arrName[index]} ( ${arrId[index]} )`} secondary="IE팀 사원" />
        </ListItemButton>
        {/*<ListItemButton>
          <ListItemText primary={`Item : ${arr[index]}`} />
          <ListItemText primary={`부서`} />
          <ListItemText primary={`직급`} />
          <ListItemText primary={`아이디`} />
  </ListItemButton> */}
      </ListItem>
      
    </ThemeProvider>
  );
}

function clicks(index) {
  var name = document.getElementsByName('searchName');

  name[0].defaultValue = " ";
  //name[0].value = arr[index];
  alert(arrName[index]);
}

function AddFarm() {

  const [value, setValue] = React.useState(null);

  return (

    <ThemeProvider theme={theme}>
      <div className="mainContainer">



        <div className='mainCenter'>

          <Header />


          <form>
            <div className='treeMain'>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField required id="standard-required" fullWidth sx={{
                    m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FE9A2E' }, "& label.Mui-focused": {
                      color: '#FE9A2E;'
                    }
                  }} label="제목" defaultValue="" variant="standard" />
                </Grid>


                <Grid item xs={12}>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="마감일"
                      value={value}
                      inputFormat="YYYY-MM-DD"
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField required id="standard-required" variant="standard" fullWidth sx={{
                        m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FE9A2E' }, "& label.Mui-focused": {
                          color: '#FE9A2E;'
                        }
                      }} {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>


                <Grid item xs={11}>
                  <TextField required id="standard-required" name="searchName" fullWidth sx={{
                    m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FE9A2E' }, "& label.Mui-focused": {
                      color: '#FE9A2E;'
                    }
                  }} label="수신인" defaultValue="" variant="standard" />
                </Grid>

                <Grid item xs={1}>

                  <IconButton variant="contained" id="btnSearch" size="small">
                    <SearchIcon />
                  </IconButton>
                </Grid>


                <Grid item xs={12}>

                  <FixedSizeList
                    height={150}
                    itemSize={60}
                    itemCount={arrName.length}
                    overscanCount={5}
                  >
                    {renderRow}
                  </FixedSizeList>



                </Grid>


                <Grid item xs={12}>

                  <TextField id="standard-required" label="상세정보" fullWidth sx={{
                    m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                      color: '#FF8000;'
                    }
                  }} multiline rows={5} variant="standard" />
                </Grid>

                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                  <Button variant="contained" id="btnCreate" size="small">
                    농장 만들기
                  </Button>
                </Grid>


              </Grid>






            </div>

          </form>
        </div>

      </div>

    </ThemeProvider>
  );
}

export default AddFarm;
