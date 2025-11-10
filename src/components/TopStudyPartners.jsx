import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Star } from "lucide-react";
import { AuthContext } from "../provider/AuthProvider";

const TopStudyPartners = () => {
    const [partners, setPartners] = useState([]);
    const navigate = useNavigate();

    const { user } = use(AuthContext);

    // Dummy authentication check (replace with real auth context or token check)
    // const isLoggedIn = localStorage.getItem("user");

    useEffect(() => {
        const fetchTopPartners = async () => {
            try {
                const res = await fetch("/public/toprated.json");
                const data = await res.json();
                setPartners(data);
            } catch (error) {
                console.error("Error fetching top partners:", error);
            }
        };
        fetchTopPartners();
    }, []);

    const handleViewProfile = (id) => {
        if (!user) {
            navigate("/auth/login");
        } else {
            // navigate(`/partners/${id}`);
            navigate(`/profileDetails/${id}`);
        }
    };

    return (
        <section className="py-12 bg-base-200">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
                    Top Study Partners
                </h2>

                {/* Partners Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {partners.length > 0 ? (
                        partners.map((partner) => (
                            <div
                                key={partner._id}
                                className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
                            >
                                <figure className="px-4 pt-4">
                                    <img
                                        src={partner.profile_image}
                                        alt={partner.name}
                                        className="rounded-full w-32 h-32 object-cover border-4 border-primary"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        Subjects:{" "}
                                        <span className="font-medium text-gray-800">
                                            {partner.subjects?.join(", ") || "N/A"}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Skills:{" "}
                                        <span className="font-medium text-gray-800">
                                            {partner.skills?.join(", ") || "N/A"}
                                        </span>
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center justify-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className={
                                                    i < Math.round(partner.rating)
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : "text-gray-300"
                                                }
                                            />
                                        ))}
                                        <span className="ml-2 text-sm text-gray-600">
                                            {partner.rating.toFixed(1)}
                                        </span>
                                    </div>

                                    {/* View Profile Button */}
                                    <div className="card-actions">
                                        <button
                                            onClick={() => handleViewProfile(partner._id)}
                                            className="btn btn-primary px-6"
                                        >
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            No top-rated study partners found.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopStudyPartners;
