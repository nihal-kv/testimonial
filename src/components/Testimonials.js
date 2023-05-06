import { useState } from 'react';
import Card from './Card';
import './testimonials.css';
import ankit from'../images/ankit.jpeg';
import ashish from '../images/ashish.jpeg';
import golu from'../images/golu.jpeg';
import prince from '../images/prince.jpeg';

const Testimonials=(props)=>{
    const fullData=props.data;
    const images=[ashish, ankit, golu, prince];
    
    const [index, setIndex]= useState(0);

    const prevHandler=()=>{
        if(index===0){
            setIndex(fullData.length-1);
        }
        else 
        {
            setIndex(index-1)
        }
    }
    const nextHandler=()=>{
        if(index===fullData.length-1){
            setIndex(0);
        }
        else 
        {
            setIndex(index+1)
        }
    }
    const surpriseHandler=()=>{
        const ind=Math.floor(Math.random()*fullData.length);
        setIndex(ind);
    }
    return (
        <div className='testimonials'>
            <Card data={fullData[index]} image={images[index]}/>
            <div>
                <button onClick={prevHandler}>prev</button>
                <button onClick={nextHandler}>next</button>
            </div>
            <button onClick={surpriseHandler}>Surprise Me</button>
            
        </div>
    );
}

export default Testimonials;