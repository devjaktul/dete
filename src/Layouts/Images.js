import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import tap_1024 from '../Images/tap_1024.jpg'
import tap_1280 from '../Images/tap_1280.jpg'
import tap_1600 from '../Images/tap_1600.jpg'
import tap_1920 from '../Images/tap_1920.jpg'
import flame_1280 from '../Images/flame_1280.jpg'
import flame_1920 from '../Images/flame_1280.jpg'
import contact from '../Images/contact-us_640.png'


const Images = () => {


    return ( 
       <>
            <div className='Images__container'> 
                <Routes>
                    <Route
                        path="/"
                        element={
                            <img
                                srcSet={`${tap_1024} 1024w, ${tap_1280} 1280w, ${tap_1600} 1600w, ${tap_1920} 1920w`}
                                sizes={`(max-width: 1024px), (max-width: 1280px), (max-width: 1600px), 1920w`}
                                src={tap_1920}
                                alt="woda z kranu"
                                className='Images__photo'/>
                                } 
                    />
                    <Route
                        path="/offers"
                        element={
                            <img
                                srcSet={`${flame_1280} 1280w, ${flame_1920} 1920w`}
                                sizes={`(max-width: 1280px), 1920w`}
                                src={flame_1920}
                                alt="ksjdh"
                                className='Images__photo Image-others'/>
                                } 
                    />
                    <Route
                        path="/contact"
                        element={
                            <img
                                src={contact}
                                alt="ksjdh"
                                className='Images__photo Image-contact'/>
                                } 
                    />
                </Routes>   
            </div>
       </>
     );
}
 
export default Images;