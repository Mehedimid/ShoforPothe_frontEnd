import React from 'react';
import Banner from './Banner';
import Navbar from '../../shared components/navbar/Navbar';

function Header(props) {
    return (
        <div>
            <Banner></Banner>
            <Navbar></Navbar>
        </div>
    );
}

export default Header;