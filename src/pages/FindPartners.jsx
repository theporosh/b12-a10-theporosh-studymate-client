import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import useAxios from "../hooks/useAxios";

const FindPartners = () => {

    const axiosInstance = useAxios();

    const { user } = useContext(AuthContext);

    const [partners, setPartners] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    // 2. Fetch all partner profiles with search and sort
    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            try {
                let url = "/students?";
                if (searchTerm) url += `search=${searchTerm}&`;
                if (sortOption) url += `sort=${sortOption}`;

                const res = await axiosInstance.get(url);
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
    }, [searchTerm, sortOption, axiosInstance]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleSort = (option) => {
        setSortOption(option);
    };



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

                                    {user && (
                                        <p className="text-sm">
                                            <span className="font-semibold">Location:</span>{" "}
                                            {partner.location}
                                        </p>
                                    )}

                                    <p className="text-sm">
                                        <span className="font-semibold">Rating:</span> ⭐ {partner.rating}
                                    </p>

                                    <div className="card-actions mt-3">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleViewProfile(partner._id)} >
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