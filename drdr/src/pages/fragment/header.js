import React from 'react';
import '../../resource/css/main.css';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function header() {
  return (

    <div className='mainHeader'>

      <a id="header1" href="/">도란도란</a>
      {/* <a id="header2" href="/">x</a> */}
      <IconButton style={{backgroundColor:"#F4282F", width:"24px", height:"24px"}}><CloseIcon style={{color:"white", width:"20px", height:"20px"}}/></IconButton>

    </div>
  );
}

export default header;
