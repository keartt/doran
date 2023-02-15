import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import { useState } from "react"
// 아이콘
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IconButton } from '@mui/material';

import '../../resource/css/home.css';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})


function Home() {
  const [company, setCompany] = useState(true)
  const [department, setDepartmet] = useState(false)
  const [my, setMy] = useState(false)
  return (
    <div className="homeContainer">

      <div className='homeCenter'>
        <Header />

        <div className='divMain'>
          <IconButton className='iconBtn' onClick={() => {
            setCompany(true)
            setDepartmet(false)
            setMy(false)
          }}><ApartmentIcon /></IconButton>

          <IconButton className='iconBtn' onClick={() => {
            setCompany(false)
            setDepartmet(true)
            setMy(false)
          }}><GroupsIcon /></IconButton>

          <IconButton className='iconBtn' onClick={() => {
            setCompany(false)
            setDepartmet(false)
            setMy(true)
          }}><PersonIcon /></IconButton>

          {company === true ? <Company /> : null}
          {department === true ? <Department /> : null}
          {my === true ? <My /> : null}
        </div>
      </div>
    </div>
  )
}

function Company() {
  return (
    <>
      <IconButton style={{  marginLeft:"5%", marginTop:"3%" , float:"left" }} ><MailOutlineIcon/></IconButton><h3 className='titleName' style={{ marginLeft: "5%"}}>회사 롤링페이퍼!! </h3> 
      <div style={{  clear :"both" }} ></div>
      <ThemeProvider theme={theme}>
        <List sx={{ width: "100%" , bgcolor: "background.paper" }}>


          <ListItem alignItems="flex-start" >
            <ListItemText
              primary="김영재에게 하고 싶었던 말"
              secondary={
                <React.Fragment>
                  {"대전으로 떠나는 그에게..."}
                </React.Fragment>
              }
            /> <IconButton style={{width:"25%"}}><CreateIcon/></IconButton>
          </ListItem>
           
         

          

        </List>
      </ThemeProvider>
    </>
  )
}

function Department() {
  return (
    <>
      <IconButton style={{  marginLeft:"5%", marginTop:"3%" , float:"left" }} ><MailOutlineIcon/></IconButton><h3 className='titleName' style={{ marginLeft: "5%"}}>부서 롤링페이퍼!! </h3> 
      <ThemeProvider theme={theme}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="홍길동동"
              secondary={
                <React.Fragment>
                  {"ㅇ~ㅇㅇ"}
                </React.Fragment>
              }
            /><IconButton style={{width:"25%"}}><CreateIcon/></IconButton>
          </ListItem>

          

        </List>
      </ThemeProvider>

    </>
  )
}

function My() {
  return (
    <>
      <h3 className='titleName' style={{ textAlign: "right", marginRight: "8%" }}>마이페이지</h3>
      <ThemeProvider theme={theme}>
        <List sx={{ width: "100%" , bgcolor: "background.paper" }}>
           
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="홍길동동2"
              secondary={
                <React.Fragment>
                  {"ㅇ~ㅇ1122ㅇ"}
                </React.Fragment>
              }
            /><IconButton style={{width:"25%"}}><CreateIcon/></IconButton>
          </ListItem> 

        </List>
      </ThemeProvider>
    
    </>
  )
}

export default Home;