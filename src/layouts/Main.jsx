/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <div className='min-h-[calc-(100vh-137)]'> <Outlet></Outlet></div>

            <Footer></Footer>
        </div>
    );
};

export default Main;