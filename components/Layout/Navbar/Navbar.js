import React from 'react'
import Logo from '../../Logo/Logo';
import FormInput from '../../FormInput/FormInput';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="shopee__form">
                    <Logo />
                    <FormInput />
                </div>
            </div>
            <style jsx>{`
            .navbar {
                font-family: 'Roboto', sans-serif;
                background: #ED4D2D;
                -webkit-transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
                transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
                transition: transform .2s cubic-bezier(.4,0,.2,1);
                transition: transform .2s cubic-bezier(.4,0,.2,1),-webkit-transform .2s cubic-bezier(.4,0,.2,1);
            }
            .shopee__form{
                display: inline-flex;
            }
        
            .shopee-searchbar>.btn svg {
              margin: 0 auto;
            }
            
  `}</style>
        </div>

    )
}

export default Navbar;