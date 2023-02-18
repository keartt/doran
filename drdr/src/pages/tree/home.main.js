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

import Department from './home.department';
import Company from './home.company';
import My from './home.my';

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


export default Home;