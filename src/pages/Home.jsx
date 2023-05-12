/* eslint-disable no-unused-vars */
import React from 'react';
import FirstSection from '../homepage/FirstSection';
import Banner from '../Banner';
import SecondSection from '../SecondSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
        </div>
    );
};

export default Home;