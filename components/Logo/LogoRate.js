import React, { Component } from 'react';

class LogoRate extends Component {
    render() {
        return (
            <>
                <svg className="shopee-svg-icon icon-rating" enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"><polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon></svg>
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

export default LogoRate;