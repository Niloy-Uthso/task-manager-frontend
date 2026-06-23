import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <div className='space-y-12'>
            <Hero></Hero>
            <Features></Features>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;