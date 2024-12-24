import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const WeatherApp = () => {
    const [data,setData]=useState({
        city_name:""
    }); 
    return (
        <div>
            <h1 style={{color:"blue"}}>Welcome to Sakshi Weather App !!!</h1>
            <SearchBox setDataProp={setData}/>
            <InfoBox data={data}/>
        </div>
    );
}

export default WeatherApp;
