import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/pic1.svg'
import img2 from '../assets/Nfts/pic2.svg'
import img3 from '../assets/Nfts/pic3.svg'
import img4 from '../assets/Nfts/pic4.svg'
import img5 from '../assets/Nfts/pic5.svg'
import img6 from '../assets/Nfts/pic6.svg'
import img7 from '../assets/Nfts/pic7.svg'
import img8 from '../assets/Nfts/pic8.svg'
import img9 from '../assets/Nfts/pic9.svg'

import Arrow from '../assets/Arrow.svg'



const Container = styled.div`
width: 31vw;
height: 62vh;   

@media (max-width: 70em) {
    height: 60vh;
}

@media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
}

@media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
}

@media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-button-next {
    color: ${props => props.theme.carouselColor};
    right: 0;
    top: 60%;
    width: 3.5rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &::after {
        display: none;
    }

    @media (max-width: 64em) {
        width: : 3rem;
    }

    @media (max-width: 30em) {
        width: : 2rem;
    }
}
}

.swiper-button-prev {
    color: ${props => props.theme.carouselColor};
    left: 0;
    width: 3.5rem;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &::after {
        display: none;
    }

    @media (max-width: 64em) {
        width: : 3rem;
    }

    @media (max-width: 30em) {
        width: : 2rem;
    }
}
`


const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}
                scrollbar={{
                    draggable: true,
                }}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="Yuzui" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="Yuzui" /></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel
