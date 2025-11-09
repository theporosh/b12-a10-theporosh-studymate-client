import React from "react";
import { Users, Search, MessageCircle } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <Search size={36} className="text-primary" />,
            title: "Find Your Study Partner",
            desc: "Search and filter learners based on subjects, goals, or nearby locations that match your study style.",
        },
        {
            id: 2,
            icon: <Users size={36} className="text-primary" />,
            title: "Connect & Collaborate",
            desc: "Send a connection request and start learning together through interactive study sessions or discussions.",
        },
        {
            id: 3,
            icon: <MessageCircle size={36} className="text-primary" />,
            title: "Achieve Better Results",
            desc: "Stay motivated, share resources, and learn efficiently with your StudyMate — because learning is better together.",
        },
    ];

    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                    How It Works
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="card bg-base-200 hover:shadow-xl transition duration-300 p-6 text-center rounded-2xl"
                        >
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
