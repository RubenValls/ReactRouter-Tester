import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './blog';
import Catalog from './catalog';
import Home from './home';
import Shop from './shop';

const Router = () => {
    return (
        <Routes>
            <Route path='/ReactRouter-Tester/' element={<Home/>}/>
            <Route path='/ReactRouter-Tester/catalogue' element={<Catalog/>}/>
            <Route path='/ReactRouter-Tester/shop' element={<Shop/>}/>
            <Route path='/ReactRouter-Tester/blog' element={<Blog/>}/>
        </Routes>
    );
}

export default Router;
