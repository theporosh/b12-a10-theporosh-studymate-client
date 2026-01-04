import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import useAxios from "../hooks/useAxios";

const FindPartners = () => {

    const axiosInstance = useAxios();

    const { user } = useContext(AuthContext);

    // const [partners, setPartners] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Pagination state
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const partnersPerPage = 6; // Number of cards per page

    // useEffect
    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            try {
                const res = await axiosInstance.get("/students", {
                    params: {
                        search: searchTerm,
                        sort: sortOption,
                        page: currentPage,
                        limit: partnersPerPage,
                    },
                });
                setFiltered(res.data.data); 
                setTotalCount(res.data.totalCount); // total count for totalPages
            } catch (error) {
                toast.error("Failed to load partner data!");
            } finally {
                setLoading(false);
            }
        };
        fetchPartners();
    }, [searchTerm, sortOption, currentPage, axiosInstance]);

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

    // Pagination calculations
    const totalPages = Math.ceil(totalCount / partnersPerPage);



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

                {/* Pagination */}
                {!loading && totalCount > partnersPerPage && (
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-2 rounded-lg border disabled:opacity-50"
                        >
                            Prev
                        </button>

                        <div>
                            Page <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
                        </div>

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 rounded-lg border disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}



            </div>
        </div>
    );
};

export default FindPartners;