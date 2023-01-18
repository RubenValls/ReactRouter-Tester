import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './blog';
import Catalog from './catalog';
import Home from './home';
import Shop from './shop';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogue' element={<Catalog/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
    );
}

export default Router;
