import React, { use, useEffect, useState } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";


const PartnerDetails = () => {
    // const {_id: id } = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const { user } = use(AuthContext);

    const [partner, setPartner] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);

    // Fetch single partner by id
    // useEffect(() => {
        
    //             axios.get(`http://localhost:3000/students/${id}`)
    //             .then(data=>{
    //                 console.log('after axios get', data.data )
    //                 setPartner(data.data);
    //             })
           
    // }, [id]);

    // Fetch single partner by id
    useEffect(() => {
        const fetchPartner = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`http://localhost:3000/students/${id}`);
                setPartner(res.data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to load partner details!");
            } finally {
                setLoading(false);
            }
        };
        fetchPartner();
    }, [id]);





    // Send Partner Request
    // const handleSendRequest = async () => {
    //     if (!user) {
    //         toast.error("Please log in to send a partner request!");
    //         navigate("/login");
    //         return;
    //     }

    //     try {
    //         setSending(true);

    //         // 1️⃣ Increase partner count
    //         await axios.patch(`http://localhost:3000/students/${id}`, {
    //             partnerCount: (partner.partnerCount || 0) + 1,
    //         });

    //         // 2️⃣ Add new record to PartnerRequests collection
    //         const requestData = {
    //             partnerId: partner._id,
    //             partnerName: partner.name,
    //             partnerEmail: partner.email,
    //             partnerSubject: partner.subject,
    //             partnerLocation: partner.location,
    //             partnerImage: partner.profileimage,
    //             requesterEmail: user.email,
    //             requesterName: user.displayName,
    //             requestedAt: new Date().toISOString(),
    //         };

    //         await axios.post(`http://localhost:3000/students/partnerRequests`, requestData);

    //         toast.success("Partner request sent successfully!");
    //         // Update partner count locally
    //         setPartner({ ...partner, partnerCount: (partner.partnerCount || 0) + 1 });
    //     } catch (error) {
    //         console.error(error);
    //         toast.error("Failed to send partner request!");
    //     } finally {
    //         setSending(false);
    //     }
    // };

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (!partner) {
        return (
            <p className="text-center text-gray-500 py-20">Partner not found.</p>
        );
    }

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-3xl mx-auto card bg-base-100 shadow-xl p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src={partner.profileimage}
                        alt={partner.name}
                        className="w-48 h-48 rounded-xl object-cover shadow-md"
                    />

                    <div className="text-center md:text-left space-y-2">
                        <h2 className="text-3xl font-bold text-primary">{partner.name}</h2>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Email:</span> {partner.email}
                        </p>
                        <p>
                            <span className="font-semibold">Subject:</span> {partner.subject}
                        </p>
                        <p>
                            <span className="font-semibold">Study Mode:</span> {partner.studyMode}
                        </p>
                        <p>
                            <span className="font-semibold">Availability:</span>{" "}
                            {partner.availabilityTime}
                        </p>
                        <p>
                            <span className="font-semibold">Location:</span> {partner.location}
                        </p>
                        <p>
                            <span className="font-semibold">Experience Level:</span>{" "}
                            {partner.experienceLevel}
                        </p>
                        <p>
                            <span className="font-semibold">Rating:</span> ⭐ {partner.rating}
                        </p>
                        <p>
                            <span className="font-semibold">Partner Count:</span>{" "}
                            {partner.partnerCount || 0}
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        // onClick={handleSendRequest}
                        disabled={sending}
                        className="btn btn-primary w-full md:w-auto"
                    >
                        {sending ? "Sending Request..." : "Send Partner Request"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnerDetails;
