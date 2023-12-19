import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="w-3/4 mx-auto my-20">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <div>
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="px-20 text-center">
                                <p className="flex justify-center text-[45px] mb-10">
                                    <FaQuoteLeft />
                                </p>
                                <p>{review.details}</p>
                                <p className="text-[#CD9003] text-[24px] mt-6">
                                    {review.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;
