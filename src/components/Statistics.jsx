import React from "react";

const Statistics = () => (
    <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-10">Our Impact</h2>
            <div className="grid sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-4xl font-bold text-secondary">500+</h3>
                    <p className="text-gray-600 mt-2">Active Students</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-secondary">1200+</h3>
                    <p className="text-gray-600 mt-2">Study Sessions</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-secondary">300+</h3>
                    <p className="text-gray-600 mt-2">Successful Partnerships</p>
                </div>
            </div>
        </div>
    </section>
);

export default Statistics;
