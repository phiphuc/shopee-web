import React, { Component } from 'react';

class LogoAddress extends Component {
    render() {
        return (
            <>
                <svg className="shopee-svg-icon" viewBox="0 0 32 32"><path d="M17.7 29.2H22c.6 0 1 .4 1 1s-.4 1-1 1H10c-.6 0-1-.4-1-1s.4-1 1-1h4.3C11.3 25.4 5 17.1 5 12.4 5 6.2 9.9 1.2 16 1.2s11 5 11 11.2c0 4.7-6.3 13-9.3 16.8zM16 3.2c-5 0-9 4.2-9 9.4s9 15.6 9 15.6 9-10.4 9-15.6c0-5.2-4-9.4-9-9.4zm-5 9c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.3-5-5zm8 0c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3 3-1.4 3-3z"></path></svg>
                <style jsx>{`
                .shopee-svg-icon {
                    display: inline-block;
                    width: 1em;
                    height: 1em;
                    fill: currentColor;
                    position: relative;
                    stroke: #000;
                    margin-bottom: 0.3em;
    margin-right: 0.4em;
                }
                `}</style>
            </>
        );
    }
}

export default LogoAddress;