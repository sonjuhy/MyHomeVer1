import React, { useContext, useEffect, useRef, useState } from "react";
import { SwiperRef, useSwiper } from "swiper/react";
import SwiperCore from "swiper";

import { Stack, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

import PortfolioContext from "../../context/context";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Scrollbar,
} from "swiper/modules";

interface ScreenShotSliderProps {
  activeIndex: number;
}

let pageNumber: number = 7;

const CustomSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 15vw;
  height: 65vh;

  img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
`;

SwiperCore.use([Navigation, Scrollbar, Mousewheel]);

// 소개(팀원, 기간, 핵심기능, 파트별 기여도)
export default function Home({ activeIndex }: ScreenShotSliderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [startAnimation, setStartAnimation] = useState(false);
  const { prefix }: any = useContext(PortfolioContext);

  const swiper = useSwiper();

  const swiperRef = useRef<SwiperRef>(null);
  const [subActiveIndex, setSubActiveIndex] = useState(0);
  const [subSendIndex, setSubSendIndex] = useState(0);

  const handleSlideChange = (event: any) => {
    if (swiperRef.current) {
      setSubActiveIndex(event.realIndex);
    }
  };

  const handleTransitionEnd = () => {
    setSubSendIndex(subActiveIndex);
  };

  useEffect(() => {
    if (pageNumber === activeIndex) {
      setStartAnimation(true);
    } else {
      setStartAnimation(false);
    }
  }, [activeIndex]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f5ff",
      }}
    >
      <Stack spacing={2}>
        <div
          style={{ display: "flex", alignItems: "center", textAlign: "left" }}
        >
          <Typography
            variant="h2"
            style={{
              display: "inline-block",
              color: "#3eccc4",
              flexShrink: 0, // 텍스트가 줄어들지 않도록 설정
            }}
          >
            스
          </Typography>
          <Typography
            variant="h3"
            style={{
              marginRight: "2rem",
              textAlign: "left",
              whiteSpace: "nowrap",
            }}
          >
            크린샷
          </Typography>
        </div>
        <div
          id="centerBox"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            mousewheel={false}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Mousewheel]}
            onSlideChange={handleSlideChange}
            onTransitionEnd={handleTransitionEnd}
            className="mySwiper"
          >
            <CustomSwiperSlide>
              <img src={`${prefix}/image/image/mainCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide>
              <img src={`${prefix}/image/image/lightCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide>
              <img src={`${prefix}/image/image/lightReserveCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide>
              <img src={`${prefix}/image/image/cloudCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide>
              <img src={`${prefix}/image/image/settingCapture.jpg`} />
            </CustomSwiperSlide>
          </Swiper>
        </div>
      </Stack>
    </div>
  );
}
