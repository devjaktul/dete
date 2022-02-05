import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Installations from '../Pages/Installations';
import BoilerRoom from '../Pages/BoilerRoom';
import Connections from '../Pages/Connections';
import Res from '../Pages/Res';
import Contact from '../Pages/Contact';





const Page = () => (
    
   <>
    <section className='Page__activity'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/installations" element={<Installations/>} />
            <Route path="/boilerRoom" element={<BoilerRoom/>} />
            <Route path="/connections" element={<Connections/>} />
            <Route path="/res" element={<Res/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </section>
    </>
)


export default Page