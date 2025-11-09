import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { BookOpen, Handshake, Users, File } from "lucide-react";
import human from "../assets/user.png";

const Navbar = () => {
    // Simulated login state (replace with actual auth context later)
    const [user, setUser] = useState(null); // example: { name: "John", photo: human }

    const handleLogout = () => {
        setUser(null);
        console.log("User logged out");
    };

    const linkStyle =
        "flex items-center gap-1 hover:text-primary transition-colors";

    // Before login links
    const beforeLoginLinks = (
        <>
            <NavLink to="/" className={linkStyle}>
                <BookOpen size={18} /> Home
            </NavLink>
            <NavLink to="/findPartners" className={linkStyle}>
                <Handshake size={18} /> Find Partners
            </NavLink>
            <NavLink to="/auth/login" className={linkStyle}>
                Login / Register
            </NavLink>
        </>
    );

    // After login links
    const afterLoginLinks = (
        <>
            <NavLink to="/" className={linkStyle}>
                <BookOpen size={18} /> Home
            </NavLink>
            <NavLink to="/findPartners" className={linkStyle}>
                <Handshake size={18} /> Find Partners
            </NavLink>
            <NavLink to="/createPartnerProfile" className={linkStyle}>
                <Users size={18} /> Create Partner Profile
            </NavLink>
            <NavLink to="/myConnections" className={linkStyle}>
                <File size={18} /> My Connections
            </NavLink>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-10 sticky top-0 z-50">
            {/* Left section - Logo + Mobile Menu */}
            <div className="navbar-start flex items-center gap-2">
                {/* Mobile Dropdown */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    {/* Mobile dropdown menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-56 space-y-2"
                    >
                        {user ? afterLoginLinks : beforeLoginLinks}
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary text-white p-2 rounded-full">
                        <Users size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-primary">
                        StudyMate
                    </h2>
                </Link>

                {/* Login/Register (visible on small screens) */}
                {!user && (
                    <div className="flex items-center gap-2 ml-2 lg:hidden">
                        <Link to="/login">
                            <button className="btn btn-sm btn-outline btn-primary">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-sm btn-primary">Register</button>
                        </Link>
                    </div>
                )}
            </div>

            {/* Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 font-medium text-gray-700">
                    {user ? afterLoginLinks : beforeLoginLinks}
                </ul>
            </div>

            {/* Right - Profile (only for logged-in users) */}
            <div className="navbar-end">
                {user ? (
                    <details className="dropdown dropdown-end">
                        <summary className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User"
                                    src={user.photo || human}
                                    className="object-cover"
                                />
                            </div>
                        </summary>
                        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48">
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </details>
                ) : (
                    // Desktop login/register buttons
                    <div className="hidden lg:flex items-center gap-3">
                        <Link to="/auth/login">
                            <button className="btn btn-outline btn-primary">Login</button>
                        </Link>
                        <Link to="/auth/register">
                            <button className="btn btn-primary">Register</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
