/*
Author: Ambuj
Created on: 06 Feb 2025
*/

import React from 'react';
import Sidebar from './Sidebar'; // Sidebar component
import HeaderCommon from '../features/header/HeaderCommon';   // Header component
import FooterHome from '../features/footer/FooterHome';   // Footer component
import HeaderHome from '../features/header/HeaderHome';   // Footer component

const LayoutHome = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderHome />              
      <div style={{ display: 'flex', flex: 1 }}>
        {/* <Sidebar />             Sidebar on the left */}
        <div style={{ flex: 1 }}>
          <main>{children}</main> 
        </div>
      </div>
      <FooterHome />                Footer at the bottom
    </div>  
  );
};

export default LayoutHome;
