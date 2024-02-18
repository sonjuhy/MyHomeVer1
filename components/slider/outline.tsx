import React, { useEffect, useState } from 'react';

import SvgPocket from '../../public/image/svg/SvgPath';
import { Typography, useMediaQuery } from '@mui/material';

interface OutlineSliderProps {
    activeIndex: number;
}

let pageNumber: number = 0;

export default function Home({activeIndex}: OutlineSliderProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [startAnimation, setStartAnimation] = useState(false);
    
    useEffect(() => {
        if(pageNumber === activeIndex){
            setStartAnimation(true);
        }
        else{
            setStartAnimation(false);
        }
      }, [activeIndex]);
    
    return (
    <div style={{width:'100vw', height:'100vh', position:'relative', display:'flex', justifyContent:'center', alignItems:'center',backgroundColor:'#f4f5ff'}}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        id='android svg'
        fill={prefersDarkMode ? "#FFFFFF" : "#808080"}
        width="514" 
        height="514" 
        viewBox="0 0 24 24"
        style={{
            position:'absolute', 
            transition: startAnimation ? 'transform 1s ease-in-out' : 'transform 0s',
            transform: startAnimation ? 'translate(30rem, 12.5rem) rotate(-45deg)' : 'translate(50rem, 50rem) rotate(-45deg)',
            opacity: prefersDarkMode ? 1 : 0.3
            }}>
            <path d={SvgPocket.androidPath}/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" 
        id='home svg'
        fill={prefersDarkMode ? "#FFFFFF" : "#808080"}
        width="254" 
        height="254" 
        viewBox="0 0 24 24"
        style={{
            position:'absolute', 
            transition: startAnimation ? 'transform 1s ease-in-out' : 'transform 0s',
            transform: startAnimation ? 'translate(-25rem, 16.5rem)' : 'translate(-50rem, 50rem)',
            opacity: prefersDarkMode ? 1 : 0.3
            }}>
            <path d={SvgPocket.homePath}/>
        </svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" 
        id='wifi svg'
        fill={prefersDarkMode ? "#FFFFFF" : "#808080"}
        width="314" 
        height="314" 
        viewBox="0 0 24 24"
        style={{
            position:'absolute', 
            transition: startAnimation ? 'transform 1s ease-in-out' : 'transform 0s',
            transform: startAnimation ? 'translate(-18rem, -15.5rem)' : 'translate(-25rem, -50rem)',
            opacity: prefersDarkMode ? 1 : 0.3
            }}>
            <path d={SvgPocket.wifiPath}/>
        </svg>
            <div id='textBox' style={{color:'inherit', textAlign:'left'}}>
                <Typography variant='h1'>Welcome!</Typography>
                <Typography variant='h4'>DIY Smart Home</Typography>
                <Typography variant='h4'>FullStack Project</Typography>
            </div>
    </div>
    );
}