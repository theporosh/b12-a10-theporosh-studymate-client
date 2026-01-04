import React from "react";

const Features = () => (
    <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="font-semibold text-xl mb-2">Find Partners Easily</h3>
                    <p>Search and match with students who share your subjects and interests.</p>
                </div>
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="font-semibold text-xl mb-2">Collaborate Online</h3>
                    <p>Connect instantly with study partners and collaborate in real-time.</p>
                </div>
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="font-semibold text-xl mb-2">Track Progress</h3>
                    <p>Monitor your learning and track study sessions with partners.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Features;
