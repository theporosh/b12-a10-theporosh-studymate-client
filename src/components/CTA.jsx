import React from "react";
import { Link } from "react-router";

const CTA = () => (
    <section className="py-16 bg-secondary text-secondary-content text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Study Partner?</h2>
        <p className="mb-6">Join thousands of students collaborating and achieving more together.</p>
        <Link to="/findPartners" className="btn btn-primary px-6 rounded-full">Get Started</Link>
    </section>
);

export default CTA;
