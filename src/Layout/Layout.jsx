import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared components/footer/Footer';

function Layout(props) {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Layout;