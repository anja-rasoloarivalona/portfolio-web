import React from 'react';
import { HomeAboutMe, HomeContact, HomeHero, HomeSkills, HomeTestimonials, HomeWorks } from './sections';
import { PageContainer } from '../../components';

const Home = () => {
    return (
        <PageContainer>
            <HomeHero />
            <HomeWorks />
            <HomeSkills />
            <HomeAboutMe />
            <HomeTestimonials />
            <HomeContact />
        </PageContainer>
    );
};

export default Home;
