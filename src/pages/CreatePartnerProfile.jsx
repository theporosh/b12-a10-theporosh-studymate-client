import React, { useContext, useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
// import useAuth from "../hooks/useAuth";
// import useAxios from "../hooks/useAxios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CreatePartnerProfile = () => {

    // const { user } = useAuth();
    // const axiosInstance = useAxios();

    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        profileimage: "",
        subject: "",
        studyMode: "",
        availabilityTime: "",
        location: "",
        experienceLevel: "",
        rating: 0,
        partnerCount: 0,
        email: user?.email || "",
    });

    const [loading, setLoading] = useState(false);

    // handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            toast.error("You must be logged in to create a profile!");
            return;
        }

        setLoading(true);
        try {
            const res = await axiosSecure.post("/partners", formData);
            console.log(res.data);
            if (res.status === 200 || res.status === 201) {
                toast.success("Profile created successfully!");
                // navigate("/dashboard" || "/"); // redirect after success
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create profile. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center py-12 px-4 bg-base-200 min-h-screen">
            <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-4 text-primary">
                        Create Partner Profile
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label font-semibold">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Profile Image */}
                        <div className="form-control">
                            <label className="label font-semibold">Profile Image URL</label>
                            <input
                                type="text"
                                name="profileimage"
                                value={formData.profileimage}
                                onChange={handleChange}
                                required
                                placeholder="Paste your profile image URL"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Subject */}
                        <div className="form-control">
                            <label className="label font-semibold">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Math, Programming, English"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Study Mode */}
                        <div className="form-control">
                            <label className="label font-semibold">Study Mode</label>
                            <select
                                name="studyMode"
                                value={formData.studyMode}
                                onChange={handleChange}
                                required
                                className="select select-bordered w-full"
                            >
                                <option value="">Select Mode</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>

                        {/* Availability */}
                        <div className="form-control">
                            <label className="label font-semibold">Availability Time</label>
                            <input
                                type="text"
                                name="availabilityTime"
                                value={formData.availabilityTime}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Evening 6–9 PM"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Location */}
                        <div className="form-control">
                            <label className="label font-semibold">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Dhaka, Bangladesh"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Experience Level */}
                        <div className="form-control">
                            <label className="label font-semibold">Experience Level</label>
                            <select
                                name="experienceLevel"
                                value={formData.experienceLevel}
                                onChange={handleChange}
                                required
                                className="select select-bordered w-full"
                            >
                                <option value="">Select Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>

                        {/* Rating */}
                        <div className="form-control">
                            <label className="label font-semibold">Rating</label>
                            <input
                                type="number"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="0–5"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Partner Count */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                Partner Count / Connections
                            </label>
                            <input
                                type="number"
                                name="partnerCount"
                                value={formData.partnerCount}
                                onChange={handleChange}
                                min="0"
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Email (read-only) */}
                        <div className="form-control">
                            <label className="label font-semibold">Email (Read Only)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Submit */}
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary w-full"
                            >
                                {loading ? "Creating..." : "Create Profile"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePartnerProfile;
