import React from 'react';
import { Link, NavLink } from "react-router";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BookOpen, FileText, Book, File, ChevronDown } from "lucide-react";
import logo from "../assets/nav-logo.png";
import human from "../assets/user.png";


const Navbar = () => {
    const navItems = (
        <>
            <li>
                <details>
                    <summary className="flex items-center gap-1">
                        <BookOpen size={18} /> Courses
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><Link to="/courses/math">Math</Link></li>
                        <li><Link to="/courses/science">Science</Link></li>
                    </ul>
                </details>
            </li>

            <li>
                <details>
                    <summary className="flex items-center gap-1">
                        <FileText size={18} /> Solutions
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><Link to="/solutions/class-9">Class 9</Link></li>
                        <li><Link to="/solutions/class-10">Class 10</Link></li>
                    </ul>
                </details>
            </li>

            <li>
                <details>
                    <summary className="flex items-center gap-1">
                        <Book size={18} /> Resources
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><Link to="/resources/notes">Notes</Link></li>
                        <li><Link to="/resources/books">Books</Link></li>
                    </ul>
                </details>
            </li>

            <li><NavLink to="/tests" className="flex items-center gap-1"><File size={18} /> Tests</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10">
                <div className="navbar-start">

                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
                        <img
                            src={logo}
                            alt=""
                            className="w-6 h-6"
                        />
                        Study Mate
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>

                {/* Social Icons */}
                <div className="navbar-end gap-4">
                    

                    <img src={human} alt="" />
                    <button className="btn btn-primary px-10">Login</button>
                    {/* <a href="#" className="text-gray-700 hover:text-blue-600">
                        <FaFacebookF size={18} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-red-600">
                        <FaYoutube size={20} />
                    </a> */}


                </div>
            </div>
        </div>
    );
};

export default Navbar;