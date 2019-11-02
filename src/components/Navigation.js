import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const Navigation = () => {
  return (
    <nav style={{ background: 'orange', display: 'grid', gridTemplateColumns: 'auto 1fr', padding: '10px 0' }}>
      <img style={{ height: '30px' }} src={logo} alt="Logo" />
      <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', listStyle: 'none', margin: 0, alignItems: 'center' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation