import React from 'react';
import '../App.css';
import { Button } from './Button';
import SearchBar from './SearchBar'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Watch your replay</h1>
            <p>What are you waiting for?</p>
            <div>
            </div>        
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
                <SearchBar></SearchBar>
            </div>
        </div>
    );
}

export default HeroSection;
