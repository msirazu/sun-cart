'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import heroBanner from '@/assets/images/hero-banner.png';
import heroBanner2 from '@/assets/images/hero-banner-2.png';
import heroBanner3 from '@/assets/images/hero-banner-3.png';

const HeroSection = () => {
    return (
        <div>
            <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} spaceBetween={50}
      slidesPerView={1} modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }} className="relative [&_.swiper-pagination]:bottom-5"
            >
                <SwiperSlide><Image src={heroBanner} alt="hero banner one" loading="eager" className="w-full object-cover"/></SwiperSlide>
                <SwiperSlide><Image src={heroBanner2} alt="hero banner two" loading="eager" className="w-full object-cover"/></SwiperSlide>
                <SwiperSlide><Image src={heroBanner3} alt="hero banner three" loading="eager" className="w-full object-cover"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSection;