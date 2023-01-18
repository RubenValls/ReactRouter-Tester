import React from 'react';
import { Link } from 'react-router-dom';

const Linkers = () => {
    return (
        <div className='container p-2'>
            <Link to='ReactRouter-Tester/'><button type="button" class="btn btn-primary btn-lg m-2">Home</button></Link> <br/>
            <Link to='ReactRouter-Tester/catalogue'><button type="button" class="btn btn-secondary btn-lg m-2">Catalogue</button></Link> <br/>
            <Link to='ReactRouter-Tester/shop'><button type="button" class="btn btn-warning btn-lg m-2">Shop</button></Link> <br/>
            <Link to='ReactRouter-Tester/blog'><button type="button" class="btn btn-danger btn-lg m-2">Blog</button></Link>
        </div>
    );
}

export default Linkers;
