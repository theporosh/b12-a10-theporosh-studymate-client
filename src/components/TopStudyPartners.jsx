import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Star } from "lucide-react";
import { AuthContext } from "../provider/AuthProvider";
import useAxios from "../hooks/useAxios";

const TopStudyPartners = () => {
    const [partners, setPartners] = useState([]);
    const navigate = useNavigate();

    const axiosInstance = useAxios();

    const { user } = useContext(AuthContext);

    // Dummy authentication check (replace with real auth context or token check)
    // const isLoggedIn = localStorage.getItem("user");

    useEffect(() => {
        const fetchTopPartners = async () => {
            try {
                const res = await axiosInstance.get("/topstudy-partners");
                // const data = await res.json();
                setPartners(res.data);
            } catch (error) {
                console.error("Error fetching top partners:", error);
            }
        };
        fetchTopPartners();
    }, [axiosInstance]);

    // const handleViewProfile = (id) => {
    //     if (!user) {
    //         navigate("/auth/login");
    //     } else {
    //         navigate(`/partners/${id}`);
    //         // navigate(`/partners/${id}`);
    //     }
    // };

    const handleViewProfile = (id) => {
        if (!user) {
            navigate("/auth/login", { state: { from: `/partners/${id}` } });
        } else {
            navigate(`/partners/${id}`);
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
                                        src={partner.profileimage}
                                        alt={partner.name}
                                        className="rounded-full w-32 h-32 object-cover border-4 border-primary"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        Subject: <span className="font-medium text-gray-400">{partner.subject}</span>
                                    </p>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Experience:{" "}
                                        <span className="font-medium text-gray-400">{partner.experienceLevel}</span>
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

                                            // onClick={() => user ? navigate(`/partners/${partner._id}`) : navigate("/auth/login")}

                                            // onClick={() => navigate("/auth/login", { state: { from: `/partners/${partner._id}` } })}

                                            // onClick={() => {
                                            //     if (user) {
                                            //         navigate(`/partners/${partner._id}`);
                                            //     } else {
                                            //         navigate("/auth/login", { state: { from: `/partners/${partner._id}` } });
                                            //     }
                                            // }}

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
