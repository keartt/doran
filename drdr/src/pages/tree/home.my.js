import React, { useEffect } from 'react';
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "GmarketSansMedium"
  }
})

function My() {
  const [farm, setFarm] = useState([])
    // 세션에 저장된 아이디
    const userId = '강성현'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/list/my', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          }, // json형태의 데이터를 서버로 보냅니다.
          body: JSON.stringify({
          receiver: userId
        })
      })
      const json = await response.json();

      setFarm(json);
    };
    fetchData();
  }, []);
  // res 가져올 값
  // title subTitle receiver count 

  const farmList = farm.map((farm, i) =>
    <List sx={{ width: "90%", bgcolor: "background.paper" }} key={i}>
      <ListItem alignItems="flex-start" style={{marginLeft:'5%'}} >
        <ListItemText
          primary=  {`to ${farm.receiver} : ${farm.title}`}
          secondary={<React.Fragment>  {farm.subTitle}  </React.Fragment>} /><span style={{color:'#FE9A2E'}}> 🥕 {farm.count}개 </span> 
      </ListItem>
    </List>
  )
  return <>
 <Link to = "/작성페이지"> <h3 className='titleName' style={{marginLeft:'8%'}}> <h1 style={{display:'inline'}}>🧑‍🌾</h1> 내 농장!! </h3></Link >
    {/* 내가 심은 밭? 당근 개수? 마이페이지 수정?  */}
    <ThemeProvider theme={theme}>
      {farmList}
    </ThemeProvider>
  </>
}


export default My;