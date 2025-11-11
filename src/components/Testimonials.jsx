import React from "react";

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Aarav Rahman",
            image: "https://i.ibb.co.com/PZ8T41PT/testi1.jpg",
            comment:
                "StudyMate helped me find the perfect study partner for Physics. We motivate each other daily and my grades have improved!",
            rating: 5,
        },
        {
            id: 2,
            name: "Nusrat Jahan",
            image: "https://i.ibb.co.com/MkXTYTWH/testi2.jpg",
            comment:
                "I used to study alone, but now learning with others makes it more engaging and effective. StudyMate is a game changer!",
            rating: 4,
        },
        {
            id: 3,
            name: "Tanvir Alam",
            image: "https://i.ibb.co.com/q3sy6Ypx/testi3.jpg",
            comment:
                "The platform is simple and effective. I connected with people studying the same subjects and we share notes regularly.",
            rating: 5,
        },
    ];

    return (
        <section className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                    What Students Say
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {reviews.map((r) => (
                        <div
                            key={r.id}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 p-6 text-center rounded-2xl"
                        >
                            <figure className="mb-4 flex justify-center">
                                <img
                                    src={r.image}
                                    alt={r.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                                />
                            </figure>
                            <div className="card-body p-0">
                                <h3 className="text-lg font-semibold mb-2">{r.name}</h3>
                                <p className="text-gray-500 text-sm mb-4">“{r.comment}”</p>

                                {/* Rating stars */}
                                <div className="flex justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-xl ${i < r.rating ? "text-yellow-400" : "text-gray-300"
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
