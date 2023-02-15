import React from 'react';
import '../../resource/css/tree/AddTree.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from '@mui/material'
import Header from '../fragment/header';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


var arr = ['이기춘','강성현','김영재','이유진', '김상명'];
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={arr[index]} value={arr[index]} component="div" disablePadding onClick={() => clicks(index)}>
      <ListItemButton>
        <ListItemText primary={`Item : ${arr[index]}`} />
        <ListItemText primary={`부서`} />
        <ListItemText primary={`직급`} />
        <ListItemText primary={`아이디`} />
      </ListItemButton>
    </ListItem>
  );
}

function clicks(index){
  var name = document.getElementsByName('searchName');
  
  name[0].defaultValue = " ";
  //name[0].value = arr[index];
  alert(arr[index]);
}

function AddTree() {

  const [value, setValue] = React.useState(null);

  return (
    <div className="treeContainer">



      <div className='treeCenter'>

        <Header />


        <form>
          <div className='treeMain'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required id="standard-required" fullWidth sx={{
                m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                  color: '#FF8000;'
                }}} label="제목" defaultValue="" variant="standard" />
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
                      m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                        color: '#FF8000;'
                      }}} {...params} />}
                  />
                </LocalizationProvider>
              </Grid>


              <Grid item xs={11}>
                <TextField required id="standard-required" name="searchName" fullWidth sx={{
                m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                  color: '#FF8000;'
                }}} label="수신인" defaultValue="" variant="standard" />
              </Grid>

              <Grid item xs={1}>

                <IconButton variant="contained" id="btnSearch" size="small">
                  <SearchIcon/>
                </IconButton>
              </Grid>


              <Grid item xs={12}>

              <FixedSizeList
                height={150}
                itemSize={46}
                itemCount={arr.length}
                overscanCount={5}
              >
                {renderRow}
              </FixedSizeList>



              </Grid>


              <Grid item xs={12}>

                <TextField id="standard-required" label="상세정보" fullWidth sx={{
                m: 1, '& .MuiInput-underline:after': { borderBottomColor: '#FF8000' }, "& label.Mui-focused": {
                  color: '#FF8000;'
                }}}  multiline rows={5}  variant="standard" />
              </Grid>

              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Button variant="contained" id="btnCreate" size="small">
                  편지 생성
                </Button>
              </Grid>


            </Grid>

            




          </div>

        </form>
      </div>

    </div>
  );
}

export default AddTree;
