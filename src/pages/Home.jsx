import React from 'react';
import Banner from '../components/Banner';
import TopStudyPartners from '../components/TopStudyPartners';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Categories from '../components/Categories';
import Statistics from '../components/Statistics';

const Home = () => {
    return (
        <div>
            <section >
                <Banner></Banner>
            </section>

            <section>
                <TopStudyPartners></TopStudyPartners>
            </section>

            <section>
                <HowItWorks></HowItWorks>
            </section>

            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <Features></Features>
            </section>
            <section>
                <Categories></Categories>
            </section>
            <section>
                <Statistics></Statistics>
            </section>
        </div>
    );
};

export default Home;