import React from 'react';
import '../resource/css/tree/AddTree.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function AddTree() {
  return (
    <div className="treeContainer">



      <div className='treeCenter'>
        <div className='treeHeader'>

          <a id="a1" href="/AddTree">도란도란</a>
          <a id="a2" href="/">x</a>

        </div>

        <div className='treeMain'>
          <Grid container spacing={2}>
            <Grid item xs={11}>

            <TextField required id="standard-required" fullWidth sx={{ m: 1 ,'& .MuiInput-underline:after': { borderBottomColor: 'orange' }}} label="제목" defaultValue=" " variant="standard" />
            </Grid>
            <Grid item xs={11}>
            <TextField required id="standard-required" fullWidth sx={{ m: 1 }} label="마감일" defaultValue=" " variant="standard" />
            </Grid>
          </Grid>
            


        </div>


      </div>

    </div>
  );
}

export default AddTree;
