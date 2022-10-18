import React, { useEffect, useState} from 'react'
import axios from 'axios'; 
import Box from '@mui/material/Box';
import { Grid, Typography, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Data() {
    const navigate=useNavigate();
    let [Search,SetSearch]=useState([])
    let getdata=(()=>{axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=67d422c309754b169e1d61104865a76c").then((success)=>{
      let list = success.data.articles;
      console.log(list)
      SetSearch(list)}).catch((err)=>{console.log(err)})})
    useEffect(() => {
      getdata();
  }, []);
   let abc=(e,i)=>{
    console.log(e)
    navigate("/Detail",{state:{e}})
  }
    return (
    <div>
   <Grid container >
            {Search.map((e,i)=>(
            <Grid  md={3} xs={12} sm={6} key={i} item padding={3}>
                <Box onClick={()=>{abc({e},{i})}}sx={{border:"2px solid black" ,padding:1 ,background:"rgb(249, 247, 247)", width: 280,height: 460, '&:hover': {backgroundColor: 'primary.main',opacity: [0.9, 0.8, 0.7]}}}>
                <img src={e.urlToImage} width="100%" ></img>
                <Tooltip title={e.title}><Typography variant="h4">{e.title}</Typography></Tooltip>
                </Box>
                
            </Grid>))}
        </Grid>


    </div>
  )
}
