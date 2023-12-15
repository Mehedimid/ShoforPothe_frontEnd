import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared components/footer/Footer';
import Navbar from '../shared components/navbar/Navbar';
import Header from '../pages/Home/Header';

function Layout(props) {
    return (
        <div className='bg-white'>
            
            <Navbar></Navbar>
            <div className='md:w-11/12 lg:w-10/12 mx-auto bg-white'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Layout;