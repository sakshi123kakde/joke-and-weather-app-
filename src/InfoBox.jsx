import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const InfoBox = ({data}) => {
    return (
        <div 
        style={{display:"flex",
        marginTop:"30px",
        justifyContent:"center",
        alignItems:"center"}}>
    
     <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.city_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Temprature :{(data.temp-272.15).toFixed(2)}
          <br />
          Temprature min :{(data.temp_min-272.15).toFixed(2)} <br />
          Temprature max :{(data.temp_max-272.15).toFixed(2)}  <br />
           Humidity: {(data.humidity-272.15).toFixed(2)}   <br />


        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card> 
        </div>
    );
}

export default InfoBox;
