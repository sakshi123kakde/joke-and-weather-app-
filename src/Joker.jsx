import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';

const Joker = () => {
    const [joke,setJoke]=useState({setup:'',punchline:''});
    const URL='https://official-joke-api.appspot.com/jokes/random';
    useEffect(()=>{
        // console.log("In useEffect")
     async function getFirstJoke(){
            const res =await fetch(URL);
            const jsonRes=await res.json();
            console.log(jsonRes);
            setJoke(jsonRes);
        }
        getFirstJoke();
    },[]);//list of dependencies 
    
    const getNewjoke=async ()=>{
          const res =await fetch(URL);
          const jsonRes=await res.json();
        //   console.log(jsonRes);
          setJoke(jsonRes);
    }
    return (
        <div>
            <h1 style={{color:'blue'}}>Welcome to Sakshi Joker App!!</h1>
            <h2 style={{color:'red'}}>{joke.setup}</h2>
            <h2 style={{color:'red'}}>{joke.punchline}</h2>
            <Button variant="contained" onClick={getNewjoke}>Get New Joke</Button>
        </div>
    );
}

export default Joker;
