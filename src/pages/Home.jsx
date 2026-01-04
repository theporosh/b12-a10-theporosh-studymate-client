import React from 'react';
import Banner from '../components/Banner';
import TopStudyPartners from '../components/TopStudyPartners';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Categories from '../components/Categories';
import Statistics from '../components/Statistics';
import Resources from '../components/Resources';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

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
            <section>
                <Resources></Resources>
            </section>
            <section>
                <FAQ></FAQ>
            </section>
            <section>
                <CTA></CTA>
            </section>
        </div>
    );
};

export default Home;