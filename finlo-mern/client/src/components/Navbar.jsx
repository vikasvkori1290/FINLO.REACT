import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Basic styling for visibility
  const navStyle = {
    backgroundColor: '#1a1a2e',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--primary-color, #a855f7)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1.1rem'
  };

  const logoStyle = {
    ...linkStyle,
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>FINLO</Link>
      <div>
        <Link to="/explore" style={linkStyle}>Explore</Link>
        <Link to="/plan" style={linkStyle}>Plan Trip</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
