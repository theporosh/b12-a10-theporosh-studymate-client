import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Your message has been sent successfully!");
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-base-200 text-base-content px-4 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Have questions, feedback, or suggestions?
                        We’d love to hear from you. Reach out to the StudyMate team anytime.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <Mail className="text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-base-content/70">
                                    support@studymate.com
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <Phone className="text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-base-content/70">
                                    +880 1234-567890
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <MapPin className="text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Location</h3>
                                <p className="text-base-content/70">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>

                        <p className="text-base-content/80 leading-relaxed">
                            StudyMate is dedicated to building a collaborative learning
                            community. Your feedback helps us improve and grow together.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-base-100 p-8 rounded-2xl shadow">
                        <h2 className="text-2xl font-bold mb-6">
                            Send Us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                                required
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="textarea textarea-bordered w-full"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="btn btn-primary w-full flex items-center gap-2"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
