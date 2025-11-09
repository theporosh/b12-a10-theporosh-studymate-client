import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                   <Navbar></Navbar>
                </nav>
            </header>
            
            <main>
              

                <section>
                        <Outlet></Outlet>
                </section>
                
            </main>

            <footer>
                
            </footer>
        </div>
    );
};

export default HomeLayout;