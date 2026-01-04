import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Users } from "lucide-react";
import { Link } from "react-router"; 
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-gray-700 mt-12">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="bg-primary text-white p-2 rounded-full">
                            <Users size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-primary">StudyMate</h2>
                    </div>
                    <p className="text-sm leading-relaxed text-base-content">
                        StudyMate is a collaborative learning platform that helps students
                        connect with study partners based on their subjects, interests, and goals.
                        Learn smarter, stay motivated, and achieve more — together.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4 mt-5">
                        <a href="#" className="text-gray-600 hover:text-primary transition">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">
                            <FaSquareXTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-base-content">
                        <li>
                            <Link to="/" className="hover:text-primary">Home</Link>
                        </li>
                        <li>
                            <Link to="/findPartners" className="hover:text-primary">Find Partners</Link>
                        </li>
                        <li>
                            <Link to="/createPartnerProfile" className="hover:text-primary">Create Profile</Link>
                        </li>
                        <li>
                            <Link to="/myConnections" className="hover:text-primary">My Connections</Link>
                        </li>
                    </ul>
                </div>

                {/* Support & Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Resources</h3>
                    <ul className="space-y-2 text-sm text-base-content">
                        <li>
                            <Link to="/about" className="hover:text-primary">About StudyMate</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-primary">How It Works</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-primary">FAQs</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-primary">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Get in Touch</h3>
                    <ul className="space-y-2 text-sm text-base-content">
                        <li>Email:{" "}
                            <a href="mailto:support@studymate.com" className="hover:text-primary">
                                support@studymate.com
                            </a>
                        </li>
                        <li>Phone: +1 (555) 234-5678</li>
                        <li>Location: Dhaka, Bangladesh</li>
                    </ul>
                </div>
            </div>

            {/* Rights */}
            <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="font-semibold text-primary">StudyMate</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
