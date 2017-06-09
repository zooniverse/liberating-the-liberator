import React from 'react';
import { Link } from 'react-router';
import AuthContainer from '../containers/AuthContainer';
import { ZooniverseLogo } from 'zooniverse-react-components/lib';

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <Link to="/" className="app-title">
          <ZooniverseLogo />
          <h1>Liberating the Liberator</h1>
        </Link>
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/classify" className="link">Classify</Link>
          <Link to="/about" className="link">About</Link>
        </nav>
        <AuthContainer />
      </header>
    );
  }
}

export default Header;