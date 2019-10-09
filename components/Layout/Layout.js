import React from 'react';
import Navbar from './Navbar/Navbar';
const Layout = ({ children }) => (
    <div className="main">
        <Navbar />
        {children}
        <style jsx>{`
            .main {
            font-family: 'Roboto', sans-serif;
            }
  `}</style>
    </div>
)

export default Layout