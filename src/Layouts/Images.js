import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import img1 from '../Images/flame.jpg'
import img2 from '../Images/pipes.jpg'
import img3 from '../Images/tap.jpg'
import img4 from '../Images/contact.jpg'
import img5 from '../Images/hands.jpg'




const Images = () => {

  
    
    return ( 
       <>
            <div className='Images__container'> 
                <Routes>
                    <Route
                        path="/"
                        element={
                            <img
                                src={img1}
                                alt="ksjdh"
                                className='Images__photo'/>
                                } 
                    />
                    <Route
                        path="/installations"
                        element={
                            <img
                                src={img2}
                                alt="ksjdh"
                                className='Images__photo'/>
                                } 
                    />
                    <Route
                        path="/boilerRoom"
                        element={
                            <img
                                src={img3}
                                alt="ksjdh"
                                className='Images__photo'/>
                                } 
                    />
                    <Route
                        path="/connections"
                        element={
                            <img
                                src={img2}
                                alt="ksjdh"
                                className='Images__photo'/>
                                } 
                    />
                    <Route
                        path="/res"
                        element={
                            <img
                                src={img5}
                                alt="ksjdh"
                                className='Images__photo'/>
                                } 
                    />
                    <Route
                        path="/contact"
                        element={
                            <img
                                src={img4}
                                alt="ksjdh"
                                className='Images__photo'/>
                                } 
                    />
                </Routes>   
            </div>
       </>
     );
}
 
export default Images;