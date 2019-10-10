import React, { Component } from 'react';

class LogoFollowing extends Component {
    render() {
        return (
            <>
            <svg className="shopee-svg-icon " enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"><g><circle cx="7" cy="4.5" fill="none" r="3.8" strokeMiterlimit="10"></circle><line fill="none" strokeLinecap="round" strokeMiterlimit="10" x1="12" x2="12" y1="11.2" y2="14.2"></line><line fill="none" strokeLinecap="round" strokeMiterlimit="10" x1="10.5" x2="13.5" y1="12.8" y2="12.8"></line><path d="m1.5 13.8c0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 3.9 1.6" fill="none" strokeLinecap="round" strokeMiterlimit="10"></path></g></svg>
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

export default LogoFollowing;