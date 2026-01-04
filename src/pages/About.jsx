import React from "react";
import { Users, BookOpen, Globe, ShieldCheck, Goal, HandMetal } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-base-200 text-base-content px-4 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        About StudyMate
                    </h1>
                    <p className="mt-4 text-base-content/70 max-w-3xl mx-auto">
                        StudyMate is a collaborative learning platform designed to help
                        students find the perfect study partner based on subject,
                        preferences, and location—making learning more engaging and
                        effective.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"> <span className="text-primary"><Goal /> </span>Our Mission</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            Our mission is to connect learners worldwide and create a
                            supportive environment where students can grow together.
                            StudyMate promotes peer-to-peer collaboration, shared goals, and
                            interactive learning experiences.
                        </p>
                    </div>

                    <div className="bg-base-100 p-8 rounded-2xl shadow">
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <Users className="text-primary" />
                                <span>Connect with like-minded study partners</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <BookOpen className="text-primary" />
                                <span>Improve learning through collaboration</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Globe className="text-primary" />
                                <span>Find partners locally or online</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ShieldCheck className="text-primary" />
                                <span>Secure authentication with Firebase</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Why StudyMate Section */}
                <div className="bg-base-100 p-10 rounded-2xl shadow mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                        <span className="text-primary"><HandMetal /></span>Why StudyMate?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-base-content/80">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Problem</h3>
                            <p>
                                Many students struggle to find reliable study partners with similar
                                goals, subjects, or schedules. Studying alone often reduces motivation
                                and learning efficiency.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Solution</h3>
                            <p>
                                StudyMate bridges this gap by connecting students based on subject,
                                learning mode, availability, and location—making collaborative learning
                                easy and effective.
                            </p>
                        </div>
                    </div>
                </div>


                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Find Your Study Partner?
                    </h2>
                    <p className="text-base-content/70 mb-6">
                        Join StudyMate today and start learning smarter, together.
                    </p>
                    <a href="/findPartners" className="btn btn-primary px-8">
                        Find Study Partners
                    </a>
                </div>

            </div>
        </div>
    );
};

export default About;
