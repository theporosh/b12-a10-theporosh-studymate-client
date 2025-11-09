import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Banner = () => {
    return (
        <div className="w-full py-16">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="w-full rounded-xl overflow-hidden shadow-lg"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src="https://i.ibb.co.com/Y7LRRh0r/slide1.jpg"
                            className="w-full object-cover h-[80vh]"
                            alt="Study Together"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4 md:px-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Connect. Collaborate. Learn Together.
                            </h2>
                            <p className="max-w-2xl text-sm md:text-lg mb-6">
                                StudyMate helps you find the perfect study partner to boost your learning outcomes and stay motivated.
                            </p>
                            <Link to="/find-partners" className="btn btn-primary px-6 rounded-full text-white">
                                Find a Study Partner
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src="https://i.ibb.co.com/1GfKLWsg/slide2.jpg"
                            className="w-full object-cover h-[80vh]"
                            alt="Learning Collaboration"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4 md:px-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Make Learning Interactive & Fun
                            </h2>
                            <p className="max-w-2xl text-sm md:text-lg mb-6">
                                Join a community of learners who share your goals and interests — collaborate and grow together.
                            </p>
                            <Link to="/register" className="btn btn-secondary px-6 rounded-full text-white">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            src="https://i.ibb.co.com/bgRG3YDx/slide3.jpg"
                            className="w-full object-cover h-[80vh]"
                            alt="StudyMate Purpose"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4 md:px-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                StudyMate — Your Learning Companion
                            </h2>
                            <p className="max-w-2xl text-sm md:text-lg mb-6">
                                Find partners based on subjects, learning preferences, or location. Turn studying into teamwork.
                            </p>
                            <Link to="/about" className="btn btn-accent px-6 rounded-full text-white">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
