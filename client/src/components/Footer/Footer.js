import React, { Component } from 'react';
import appStore from '../../app-store.png';

class Footer extends Component {
    render() {
        return (
            <div className='pure-u-1' style={mainFooterDivStyle}>
                <div className='pure-u-1 pure-u-md-1-8' >
                    <img className='pure-img' 
                        src={appStore} 
                        alt='Coming to the Apple and Android App stores.'
                        style={appStoreImgStyle}
                    />
                </div>
            </div>
        )
    }
}

// Styles
const mainFooterDivStyle = {
    position: 'fixed',
    bottom: '0',
    right: '0',
    height: '5em',
    backgroundColor: '#4f4f4f'
}

const appStoreImgStyle = {
    margin: '0.5em auto 0 auto',
    maxHeight: '4em'
}

// Wrapping Up
export default Footer;