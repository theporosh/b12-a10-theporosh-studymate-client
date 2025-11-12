import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const FindPartners = () => {

    const { user } = useContext(AuthContext);

    const [partners, setPartners] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //1. Fetch all partner profiles
    // useEffect(() => {
    //     const fetchPartners = async () => {
    //         setLoading(true);
    //         try {
    //             const res = await axios.get("http://localhost:3000/students");
    //             setPartners(res.data);
    //             setFiltered(res.data);
    //         } catch (error) {
    //             console.error(error);
    //             toast.error("Failed to load partner data!");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchPartners();
    // }, []);

    // 2. Fetch all partner profiles with search and sort
    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            try {
                let url = "http://localhost:3000/students?";
                if (searchTerm) url += `search=${searchTerm}&`;
                if (sortOption) url += `sort=${sortOption}`;

                const res = await axios.get(url);
                setPartners(res.data);
                setFiltered(res.data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to load partner data!");
            } finally {
                setLoading(false);
            }
        };
        fetchPartners();
    }, [searchTerm, sortOption]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleSort = (option) => {
        setSortOption(option);
    };




    // Search handler
    // const handleSearch = (e) => {
    //     const value = e.target.value.toLowerCase();
    //     setSearchTerm(value);
    //     const filteredData = partners.filter(
    //         (p) =>
    //             p.name.toLowerCase().includes(value) ||
    //             p.subject.toLowerCase().includes(value) ||
    //             p.location.toLowerCase().includes(value)
    //     );
    //     setFiltered(filteredData);
    // };

    // Sort handler
    // const handleSort = (option) => {
    //     setSortOption(option);
    //     let sortedData = [...filtered];
    //     if (option === "name") {
    //         sortedData.sort((a, b) => a.name.localeCompare(b.name));
    //     } else if (option === "experience") {
    //         const order = { Beginner: 1, Intermediate: 2, Expert: 3 };
    //         sortedData.sort((a, b) => order[a.experienceLevel] - order[b.experienceLevel]);
    //     } else if (option === "rating") {
    //         sortedData.sort((a, b) => b.rating - a.rating);
    //     }
    //     setFiltered(sortedData);
    // };




    const handleViewProfile = (id) => {
        if (!user) {
            navigate("/auth/login", { state: { from: `/partners/${id}` } });
        } else {
            navigate(`/partners/${id}`);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <h2 className="text-3xl font-bold text-primary text-center mb-10">
                    Find Study Partners
                </h2>

                {/* Sort and Search Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    {/* Sort Dropdown (Left Side) */}
                    <div className="w-full md:w-auto">
                        <select
                            className="select select-bordered w-full md:w-48"
                            value={sortOption}
                            onChange={(e) => handleSort(e.target.value)}
                        >
                            <option value="">Sort By</option>
                            <option value="name">Name</option>
                            <option value="experience">Experience</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                    {/* Search Bar (Right Side) */}
                    <div className="w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search by name, subject, or location"
                            className="input input-bordered w-full"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {/* Loading Spinner */}
                {loading && (
                    <div className="flex justify-center py-10">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                )}

                {/* Partner Cards */}
                {!loading && filtered.length > 0 ? (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((partner) => (
                            <div
                                key={partner._id}
                                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
                            >
                                <figure className="px-6 pt-6">
                                    <img
                                        src={partner.profileimage}
                                        alt={partner.name}
                                        className="rounded-xl w-32 h-32 object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{partner.name}</h2>
                                    <p className="text-sm text-gray-500">{partner.subject}</p>
                                    <p className="text-sm">
                                        <span className="font-semibold">Mode:</span> {partner.studyMode}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-semibold">Experience:</span>{" "}
                                        {partner.experienceLevel}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-semibold">Location:</span>{" "}
                                        {partner.location}
                                    </p>


                                    <p className="text-sm">
                                        <span className="font-semibold">Rating:</span> ⭐ {partner.rating}
                                    </p>

                                    <div className="card-actions mt-3">
                                        <button
                                            className="btn btn-primary btn-sm"

                                            onClick={() => handleViewProfile(partner._id)}

                                        // onClick={() => navigate("/auth/login", { state: { from: `/partners/${partner._id}` } })}

                                        // onClick={() => navigate(`/partners/${partner._id}`)}
                                        >
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    !loading && (
                        <p className="text-center text-gray-500 mt-10">No partners found.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default FindPartners;