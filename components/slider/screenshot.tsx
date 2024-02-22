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
  Pagination,
  Scrollbar,
} from "swiper/modules";

interface ScreenShotSliderProps {
  activeIndex: number;
}

let pageNumber: number = 7;

const CustomSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;

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

  const [smallMode, setSmallMode] = useState(false);
  const [fontSize, setFontSize] = useState(32);

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
  useEffect(() => {
    const handleResize = () => {
      // 컨테이너의 너비를 감지하여 글자 크기 동적 조절
      const containerWidth =
        document.getElementById("intro_container")?.offsetWidth;

      // 예시: 너비가 200px 이하일 때 글자 크기를 14로, 그 외에는 16으로 설정
      if (containerWidth && containerWidth <= 900) {
        setFontSize(16);
        setSmallMode(true);
      } else {
        setFontSize(32);
        setSmallMode(false);
      }
    };

    // 초기 로드 시와 창 크기 변경 시에 이벤트 리스너 등록
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: smallMode ? "center" : "normal",
            textAlign: smallMode ? "left" : "center",
          }}
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
            // mousewheel={false}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={!smallMode}
            modules={[EffectCoverflow, Navigation, Mousewheel]}
            onSlideChange={handleSlideChange}
            onTransitionEnd={handleTransitionEnd}
            className="mySwiper"
          >
            <CustomSwiperSlide
              style={{
                width: smallMode ? "45vw" : "15vw",
                height: "65vh",
              }}
            >
              <img src={`${prefix}/image/image/mainCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide
              style={{
                width: smallMode ? "45vw" : "15vw",
                height: "65vh",
              }}
            >
              <img src={`${prefix}/image/image/lightCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide
              style={{
                width: smallMode ? "45vw" : "15vw",
                height: "65vh",
              }}
            >
              <img src={`${prefix}/image/image/lightReserveCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide
              style={{
                width: smallMode ? "45vw" : "15vw",
                height: "65vh",
              }}
            >
              <img src={`${prefix}/image/image/cloudCapture.jpg`} />
            </CustomSwiperSlide>
            <CustomSwiperSlide
              style={{
                width: smallMode ? "45vw" : "15vw",
                height: "65vh",
              }}
            >
              <img src={`${prefix}/image/image/settingCapture.jpg`} />
            </CustomSwiperSlide>
          </Swiper>
        </div>
      </Stack>
    </div>
  );
}
