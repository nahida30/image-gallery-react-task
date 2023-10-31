import './App.css'
import React from 'react';
import Pin from './Pin';
import Data from './Components/Data';

const Images = () => {
    return (
        <div className='container'>
            {/* <h1>hello</h1> */}
            {
                Data && Data.map((data) => <Pin key={data.id} pinSize = {data.size}
                img={data.img}></Pin> )
            }
            {/* <Pin pinSize = {"large"}></Pin>
            <Pin pinSize = {"small"}></Pin> */}
            {/* <Pin pinSize = {"medium"}></Pin> */}
            
        </div>
    );
};

export default Images;