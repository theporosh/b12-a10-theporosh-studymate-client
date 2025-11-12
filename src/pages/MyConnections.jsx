import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../hooks/useAxiosSecure";
// import useAxios from "../hooks/useAxios";


const MyConnections = () => {

    // const axiosInstance = useAxios();

    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext);
    // console.log(user)

    // console.log('token', user.accessToken);

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // for modal
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    //   Fetch user's sent partner requests
    useEffect(() => {
        if (!user?.email) return;
        const fetchData = async () => {
            try {
                const res = await axiosSecure.get(
                    `/request_partner?email=${user.email}`
                );
                setRequests(res.data);
                // console.log(res.data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to load your connections");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [user?.email , axiosSecure]);



    //  Delete a request
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this request!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/request_partner/${id}`);
                    setRequests((prev) => prev.filter((req) => req._id !== id));
                    Swal.fire("Deleted!", "Your request has been deleted.", "success");
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to delete request");
                }
            }
        });
    };

    //  Open Update Modal
    const openUpdateModal = (req) => {
        setSelectedRequest(req);
        setIsModalOpen(true);
    };

    //  Handle Update Submit
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedData = {
            partnerName: form.partnerName.value,
            partnerSubject: form.partnerSubject.value,
            partnerLocation: form.partnerLocation.value,
            partnerStudyMode: form.partnerStudyMode.value,
        };

        try {
            await axiosSecure.patch(
                `/request_partner/${selectedRequest._id}`,
                updatedData
            );
            toast.success("Request updated successfully!");

            // Update UI instantly
            setRequests((prev) =>
                prev.map((req) =>
                    req._id === selectedRequest._id ? { ...req, ...updatedData } : req
                )
            );

            setIsModalOpen(false);
        }
        catch (error) {
            console.error(error);
            toast.error("Failed to update request");
        }
    };

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                My Connections
            </h2>

            {requests.length === 0 ? (
                <p className="text-center text-gray-500">No partner requests found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-base-200">
                            <tr>
                                <th>SL No.</th>
                                <th>Partner</th>
                                <th>Subject</th>
                                <th>Study Mode</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((req, index) => (
                                <tr key={req._id}>
                                    <td className="font-bold"> {index + 1} </td>
                                    <td className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={req.partnerImage} alt={req.partnerName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{req.partnerName}</div>
                                            <div className="text-sm text-gray-500">
                                                {req.partnerEmail}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{req.partnerSubject}</td>
                                    <td>{req.partnerStudyMode || "N/A"}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => openUpdateModal(req)}
                                                className="btn btn-sm btn-outline btn-primary"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(req._id)}
                                                className="btn btn-sm btn-outline btn-error"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/*  Update Modal */}
            {isModalOpen && selectedRequest && (
                <dialog open className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Update Request Info</h3>
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <div>
                                <label className="label">
                                    <span className="label-text">Partner Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="partnerName"
                                    defaultValue={selectedRequest.partnerName}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input
                                    type="text"
                                    name="partnerSubject"
                                    defaultValue={selectedRequest.partnerSubject}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Study Mode</span>
                                </label>
                                <input
                                    type="text"
                                    name="partnerStudyMode"
                                    defaultValue={selectedRequest.partnerStudyMode || ""}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="partnerLocation"
                                    defaultValue={selectedRequest.partnerLocation || ""}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyConnections;
