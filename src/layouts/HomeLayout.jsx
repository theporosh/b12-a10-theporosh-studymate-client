import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import TopStudyPartners from '../components/TopStudyPartners';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                   <Navbar></Navbar>
                </nav>
            </header>
            
            <main>
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
                        <Outlet></Outlet>
                </section>
                
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;