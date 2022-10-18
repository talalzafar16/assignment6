
import React, { useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Grid, Typography, Tooltip } from '@mui/material';
import { useLocation} from 'react-router-dom';
export default function Detail() {
    let [Search,SetSearch]=useState([])
    const location =useLocation();
    useEffect(()=>{
   SetSearch([location.state.e.e]);},[])
    console.log(Search)
   return (
    <div align="center">
        <h3>Details</h3>
        <Grid container >
            {Search.map((e,i)=>(
                <div>
                <img src={e.urlToImage} width="100%" ></img>
                <Typography variant="h2">{e.title}</Typography><br/>
                <Typography variant="h4">Source={e.source.name}</Typography>
                <Typography variant="h3">{e.description}</Typography><br/>
                <Typography variant="h6">{e.content}</Typography><br/>
                <Typography variant="h4">published At={e.publishedAt}</Typography><br/>
                </div>
                ))}
        </Grid>

        
    </div>
  )
}
