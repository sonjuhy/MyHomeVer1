import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import OutlineSlider from "../../components/slider/outline";
import IntroSlider from "../../components/slider/intro";
import IotSlider from "../../components/slider/iot";
import CloudSlider from "../../components/slider/cloud";
import AddonsSlider from "../../components/slider/addons";

import styled from "styled-components";

const CustomSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  text-color: inherit;
  width: auto;
  height: 100vh;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DisableVerticalScroll: React.FC = () => {
  useEffect(() => {
    // 세로 스크롤을 비활성화
    const disableScroll = () => {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflowY = "hidden";
      }
    };

    // 컴포넌트가 마운트될 때 세로 스크롤 비활성화
    disableScroll();

    // 컴포넌트가 언마운트될 때 세로 스크롤을 다시 활성화
    return () => {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflowY = "auto";
      }
    };
  }, []);

  return null;
};

export default function Home() {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sendIndex, setSendIndex] = useState(0);

  const handleSlideChange = (event: any) => {
    if (swiperRef.current) {
      setActiveIndex(event.realIndex);
    }
  };

  const handleTransitionEnd = () => {
    setSendIndex(activeIndex);
  };

  return (
    <div
      style={{
        height: "95vh",
        width: "100%",
        position: "relative",
        overflowY: "hidden",
      }}
    >
      <DisableVerticalScroll />
      {/** 개요 */}
      {/** 목적 */}
      {/** 소개(팀원, 기간, 핵심기능, 파트별 기여도) */}
      {/** 소개(기술 스택, 개발 환경, 구조도) */}
      {/** 이미지 */}
      <Swiper
        className="mySwiper"
        ref={swiperRef}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        effect="slide"
        speed={1000}
        modules={[Mousewheel, Pagination]}
        onSlideChange={handleSlideChange}
        onTransitionEnd={handleTransitionEnd}
        style={{ width: "100%", height: "100%" }}
      >
        <CustomSwiperSlide>
          <OutlineSlider activeIndex={sendIndex} />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <IntroSlider activeIndex={sendIndex} />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <IotSlider activeIndex={sendIndex} />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <CloudSlider activeIndex={sendIndex} />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <AddonsSlider activeIndex={sendIndex} />
        </CustomSwiperSlide>
        <CustomSwiperSlide>Slide 4</CustomSwiperSlide>
        <CustomSwiperSlide>Slide 5</CustomSwiperSlide>
        <CustomSwiperSlide>Slide 6</CustomSwiperSlide>
      </Swiper>
    </div>
  );
}