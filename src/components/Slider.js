import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';

const Slider = () => {
    return (
        <Swiper
        loop= {true}
        slidesPerView= {1}
        speed= {3000}
        autoplay={{delay:1000,disableOnInteraction: false,}}
        effect={'fade'}
        fadeEffect={{crossFade:true,delay: 4000}}
        modules={[Autoplay,EffectFade]}
        >
            <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main1.jpg"} alt="" class="sp-nn pc-bl" /><img src={process.env.PUBLIC_URL + "/img/sp-main1.jpg"} alt="" class="sp-bl pc-nn" /></SwiperSlide>
            <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main2.jpg"} alt="" class="sp-nn pc-bl" /><img src={process.env.PUBLIC_URL + "/img/sp-main2.jpg"} alt="" class="sp-bl pc-nn" /></SwiperSlide>
            <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/main3.jpg"} alt="" class="sp-nn pc-bl" /><img src={process.env.PUBLIC_URL + "/img/sp-main3.jpg"} alt="" class="sp-bl pc-nn" /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;