import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared components/footer/Footer';
import Navbar from '../shared components/navbar/Navbar';

function Layout(props) {
    return (
        <div>
            
            <Navbar></Navbar>
            <div className='w-10/12 mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Layout;