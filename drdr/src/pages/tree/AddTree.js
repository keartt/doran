import React from 'react';
import '../../resource/css/tree/AddTree.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


import Header from '../fragment/header';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
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
                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="제목" defaultValue="" variant="standard" />
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
                    renderInput={(params) => <TextField required id="standard-required" variant="standard" fullWidth sx={{ m: 1 }} {...params} />}
                  />
                </LocalizationProvider>
              </Grid>


              <Grid item xs={9}>
                <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="수신인" defaultValue="" variant="standard" />
              </Grid>

              <Grid item xs={3}>

                <Button variant="contained" id="btnSearch" size="small">
                  검색
                </Button>
              </Grid>





            </Grid>

            <Box
              sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
            >
              <FixedSizeList
                height={400}
                width={360}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
              >
                {renderRow}
              </FixedSizeList>
            </Box>




          </div>

        </form>
      </div>

    </div>
  );
}

export default AddTree;
