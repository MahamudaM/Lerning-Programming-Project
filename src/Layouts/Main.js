import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/CommonPages/Footer/Footer';
import Hader from '../pages/CommonPages/Hader/Hader';



const Main = () => {
    return (
        <div>
         <Hader></Hader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;