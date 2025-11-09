import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                {/* <Header></Header> */}
                <section></section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                {/* <button className="btn btn-secondary">Click Me</button> */}
                <section className="left_nav"></section>
                <section className="main">
                        <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;