import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';


const HomeLayout = () => {

    const { state } = useNavigation()

    return (
        <div>
            
                <nav className="sticky">
                    <Navbar></Navbar>
                </nav>
          

            <main>

                <section>
                    {state=="loading" ? <Loading /> : <Outlet></Outlet>} 
                </section>

            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;