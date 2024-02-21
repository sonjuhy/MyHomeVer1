import React, { useContext, useEffect, useRef, useState } from "react";

import PortfolioContext from "../../context/context";

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
import IntroDocsSlider from "../../components/slider/introDocs";
import ScreenShotSlider from "../../components/slider/screenshot";
import Head from "next/head";

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
  const { prefix }: any = useContext(PortfolioContext);
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
    <>
      <Head>
        <title>Sonjuhy Portfolio</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <meta property="og:image" content={`${prefix}/profile.png`} />
        <meta property="og:title" content={"Sonjuhy Portfolio"} />
        <meta property="og:description" content="Development History Store" />
        <meta property="og:type" content="website" />
      </Head>
      <div
        style={{
          height: "95vh",
          width: "100%",
          position: "relative",
          overflowY: "hidden",
        }}
      >
        <DisableVerticalScroll />
        <Swiper
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
          {/** 개요 */}
          <SwiperSlide
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <OutlineSlider activeIndex={sendIndex} />
          </SwiperSlide>
          {/** 핵심기능 */}
          <SwiperSlide
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <IntroSlider activeIndex={sendIndex} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <IotSlider activeIndex={sendIndex} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <CloudSlider activeIndex={sendIndex} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <AddonsSlider activeIndex={sendIndex} />
          </SwiperSlide>
          {/** 소개(팀원, 기간, 기술 스택, 개발 환경, 구조도) */}
          <SwiperSlide
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <IntroDocsSlider activeIndex={sendIndex} />
          </SwiperSlide>
          {/** 이미지 */}
          <SwiperSlide
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <ScreenShotSlider activeIndex={sendIndex} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
