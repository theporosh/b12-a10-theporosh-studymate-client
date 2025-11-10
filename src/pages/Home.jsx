import React from 'react';
import Banner from '../components/Banner';
import TopStudyPartners from '../components/TopStudyPartners';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
// import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
           {/* <Navigate to="/"></Navigate> */}

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
        </div>
    );
};

export default Home;