import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBox = ({setDataProp}) => {
    const[city,setCity]=useState("");
    const key='518f498deb5b5b478ec447b10c0fa1b0';


    const getWeatherData = async()=>{
        console.log(city);
        const final_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        const res = await axios.get(final_url);
        console.log(res);
        
        const weatherData={
            temp:res.data.main.temp,
            temp_max:res.data.main.temp_max,
            temp_min:res.data.main.temp_min,
            humidity:res.data.main.humidity,
            icon:res.data.weather[0].icon,
            city_name:res.data.name
        };
        // console.log(weatherData);
        setDataProp(weatherData);
        setCity('');
    }
    return (
        <>
        <div>
            <TextField value={city} id="outlined-basic" label="Enter City Name " variant="outlined" onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <br />
            <Button variant="contained" onClick={getWeatherData} endIcon={<SearchIcon />}>
               Get Weather
            </Button>
        </>
    );
}

export default SearchBox;
