import React, { useEffect } from 'react';
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
  // db 에서 이 배열에 넣어주면 댐 
  const [companys, setCompany] = useState([])
  // const companys = [{title : "제목", subTitle :"부제목1"},{title : "김영재에게", subTitle :"잘가라"},{title : "알고보니", subTitle :"리액트쌉고수?"}]

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('http://localhost:5005/list/company');
      const response = await fetch('/list/company');
      const json = await response.json();
      setCompany(json);
    };
    fetchData();
  }, []);

  const companyList = companys.map((company, i) =>
    <List sx={{ width: "100%", bgcolor: "background.paper" }} key={i}>
      <ListItem alignItems="flex-start" >
        <ListItemText
          primary={company.title}
          secondary={<React.Fragment>  {company.subTitle}  </React.Fragment>} />
        <IconButton style={{ width: "25%" }}><CreateIcon /></IconButton>
      </ListItem>
    </List>
  )

  return <>
    <IconButton style={{ marginLeft: "5%", marginTop: "3%", float: "left" }} ><MailOutlineIcon /></IconButton><h3 className='titleName' style={{ marginLeft: "5%" }}>회사 롤링페이퍼!! </h3>
    <div style={{ clear: "both" }} ></div>
    <ThemeProvider theme={theme}>
      {companyList}
    </ThemeProvider>
  </>
}




function Department() {
  // db 에서 이 배열에 넣어주면 댐 
  const companys = [{ title: "부서", subTitle: "부서목" }, { title: "알고보니", subTitle: "리액트쌉고수?" }]
  const companyList = companys.map((company, i) =>
    <List sx={{ width: "100%", bgcolor: "background.paper" }} key={i}>
      <ListItem alignItems="flex-start" >
        <ListItemText
          primary={company.title}
          secondary={<React.Fragment>  {company.subTitle}  </React.Fragment>} />
        <IconButton style={{ width: "25%" }}><CreateIcon /></IconButton>
      </ListItem>
    </List>
  )
  return <>
    <IconButton style={{ marginLeft: "5%", marginTop: "3%", float: "left" }} ><MailOutlineIcon /></IconButton><h3 className='titleName' style={{ marginLeft: "5%" }}>부서 롤링페이퍼!! </h3>
    <div style={{ clear: "both" }} ></div>
    <ThemeProvider theme={theme}>
      {companyList}
    </ThemeProvider>
  </>
}

function My() {
  <h3 className='titleName' style={{ textAlign: "right", marginRight: "8%" }}>마이페이지</h3>
  // db 에서 이 배열에 넣어주면 댐 
  const companys = [{ title: "마이", subTitle: "페이지" }, { title: "알고보니", subTitle: "노드 쌉고수?" }]

  const companyList = companys.map((company, i) =>
    <List sx={{ width: "100%", bgcolor: "background.paper" }} key={i}>
      <ListItem alignItems="flex-start" >
        <ListItemText
          primary={company.title}
          secondary={<React.Fragment>  {company.subTitle}  </React.Fragment>} />
        <IconButton style={{ width: "25%" }}><CreateIcon /></IconButton>
      </ListItem>
    </List>
  )
  return <>
    <h3 className='titleName' style={{ textAlign: "right", marginRight: "8%" }}>마이페이지</h3>
    <div style={{ clear: "both" }} ></div>
    <ThemeProvider theme={theme}>
      {companyList}
    </ThemeProvider>
  </>
}

export default Home;