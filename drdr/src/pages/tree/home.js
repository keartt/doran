import React from 'react';
import Header from '../fragment/header';
import '../../resource/css/main.css';
import { useState } from "react"
// 아이콘
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import '../../resource/css/home.css';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";



function Home() {
  const [company, setCompany] = useState(false)
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
          }}><ApartmentIcon/></IconButton>

          <IconButton className='iconBtn' onClick={() => {
            setCompany(false)
            setDepartmet(true)
            setMy(false)
          }}><GroupsIcon/></IconButton>

          <IconButton className='iconBtn' onClick={() => {
            setCompany(false)
            setDepartmet(false)
            setMy(true)
          }}><PersonIcon/></IconButton>

          {company == true ? <Company /> : null}
          {department == true ? <Department /> : null}
          {my == true ? <My /> : null}
        </div>
      </div>
    </div>
  )
}

function Company() {
  return (
    <>
    <p className='titleName'>회사</p>
    
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>
     
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>


      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>


      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>


      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="김영재에게 하고 싶었던 말"
          secondary={
            <React.Fragment>
              {"대전으로 떠나는 그에게..."}
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
    </>
  )
}

function Department() {
  return (
    <>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>
      <p>이건 부서야</p>

    </>
  )
}

function My() {
  return (
    <>
      <p>이건 마이페이지야</p>
    </>
  )
}

export default Home;