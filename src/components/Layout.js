import React from 'react';
import Sidebar from './Sidebar'; // Sidebar component
import HeaderCommon from './HeaderCommon';   // Header component
import Footer from './Footer';   // Footer component

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderCommon />                Header at the top
      <div style={{ display: 'flex', flex: 1 }}>
        {/* <Sidebar />             Sidebar on the left */}
        <div style={{ flex: 1 }}>
          <main>{children}</main> {/* Page-specific content */}
        </div>
      </div>
      <Footer />                Footer at the bottom
    </div>  
  );
};

export default Layout;
