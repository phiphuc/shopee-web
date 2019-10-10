import React, { Component } from 'react';

class LogoFollow extends Component {
    render() {
        return (
            <>
                <svg className="shopee-svg-icon " enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"><g><circle cx="5.5" cy="5" fill="none" r="4" strokeMiterlimit="10"></circle><path d="m8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6" fill="none" strokeLinejoin="round" strokeMiterlimit="10"></path><path d="m12.6 6.9c.7 0 .9.6.9 1.2v5.7h-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path d="m9.5 1.2c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.9 2.7-2.1 3.2" fill="none" strokeLinecap="round" strokeMiterlimit="10"></path></g></svg>                <style jsx>{`
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

export default LogoFollow;