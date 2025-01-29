import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <h3>Sidebar</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/poojaKart">PoojaKart</Link></li>

      </ul>
    </div>
  );
};

export default Sidebar;
