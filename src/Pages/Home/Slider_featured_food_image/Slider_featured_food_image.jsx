import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import featureImg1 from "../../../assets/home/slide1.jpg";
import featureImg2 from "../../../assets/home/slide2.jpg";
import featureImg3 from "../../../assets/home/slide3.jpg";
import featureImg4 from "../../../assets/home/slide4.jpg";
import featureImg5 from "../../../assets/home/slide5.jpg";

const Slider_featured_food_image = () => {
    return (
        <div className="mb-10 w-3/4 mx-auto">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}

                // className="mySwiper"
            >
                <SwiperSlide>
                    <img src={featureImg1} alt="" />
                    <p className="uppercase text-[34px] text-white -mt-16 text-center">
                        Salads
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={featureImg2} alt="" />
                    <p className="uppercase text-[34px] text-white -mt-16 text-center">
                        Soups
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={featureImg3} alt="" />
                    <p className="uppercase text-[34px] text-white -mt-16 text-center">
                        pizzas
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={featureImg4} alt="" />
                    <p className="uppercase text-[34px] text-white -mt-16 text-center">
                        desserts
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={featureImg5} alt="" />
                    <p className="uppercase text-[34px] text-white -mt-16 text-center">
                        Salads
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider_featured_food_image;
