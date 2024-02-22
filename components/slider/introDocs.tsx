import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";

import PortfolioContext from "../../context/context";

import { Grid, Typography, makeStyles, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IntroDocsSliderProps {
  activeIndex: number;
}

let pageNumber: number = 5;

const ParallaxBg = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  font-size: 18px;
  color: #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
`;

const BackgroundContainer = styled("div")`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
`;

const Title = styled("div")`
  font-size: 41px;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Subtitle = styled("div")`
  font-size: 21px;
  text-align: center;
`;

const Text = styled("div")`
  font-size: 17px;
  line-height: 1.3;
  margin-top: 0.1rem;
`;

// 소개(팀원, 기간, 핵심기능, 파트별 기여도)
export default function Home({ activeIndex }: IntroDocsSliderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [startAnimation, setStartAnimation] = useState(false);
  const { prefix }: any = useContext(PortfolioContext);

  const [smallMode, setSmallMode] = useState(false);
  const [fontSize, setFontSize] = useState(32);
  const [realHeight, setRealHeight] = useState(-1);

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
      const containerWidth = document.getElementById(
        "introDocs_container"
      )?.offsetWidth;

      // 예시: 너비가 200px 이하일 때 글자 크기를 14로, 그 외에는 16으로 설정
      if (containerWidth && containerWidth <= 900) {
        setFontSize(16);
        setSmallMode(true);
      } else {
        setFontSize(32);
        setSmallMode(false);
      }

      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setRealHeight(vh);
      console.log("vh: " + vh);
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
    <BackgroundContainer
      id="introDocs_container"
      style={
        {
          // width: "100vw",
          // height: realHeight === -1 ? "100vh" : `${realHeight}px`,
          // justifyContent: "center",
          // alignItems: "center",
          // display: "flex",
        }
      }
    >
      <Swiper
        style={{
          width: "100%",
          height: "100%",
        }}
        speed={600}
        parallax={true}
        navigation={
          smallMode
            ? false
            : {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
        }
        pagination={smallMode ? { type: "progressbar" } : false}
        modules={[Parallax, Navigation, Pagination]}
      >
        <ParallaxBg
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: prefersDarkMode
              ? "url(" + prefix + "image/image/introDocsBackgroundDark.png)"
              : "url(" + prefix + "image/image/introDocsBackground.png)",
          }}
          data-swiper-parallax="-23%"
        ></ParallaxBg>
        <CustomSwiperSlide
          style={{
            alignItems: smallMode ? "normal" : "center",
            marginTop: smallMode ? "1rem" : "0rem",
          }}
        >
          <div
            style={{
              width: smallMode ? "90%" : "70%",
              height: "50%",
              textAlign: "left",
            }}
          >
            <Title
              className="title"
              data-swiper-parallax="-300"
              style={{ fontSize: fontSize * 2 }}
            >
              프로젝트 소개 [1/4]
            </Title>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  서론
                </Subtitle>
                <Text className="text" data-swiper-parallax="-100">
                  <Typography style={{ fontWeight: "bolder" }}>목적</Typography>
                  <Typography>▪ IoT & 클라우드</Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>
                    팀 or 개인
                  </Typography>
                  <Typography> ▪ 개인 프로젝트</Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>기간</Typography>
                  <Typography>▪ 2021.01 ~ 2021.07</Typography>
                </Text>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  담당 업무
                </Subtitle>
                <Text className="text" data-swiper-parallax="-100">
                  <Typography style={{ fontWeight: "bolder" }}>
                    안드로이드
                  </Typography>
                  <Typography>
                    ▪ IoT 제어, Cloud 서비스 제공, 날씨 api로부터 데이터 파싱 후
                    제공
                  </Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>
                    스위치
                  </Typography>
                  <Typography> ▪ MQTT를 통한 제어, 현재 상태 제공</Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>
                    백엔드
                  </Typography>
                  <Typography>
                    ▪ 유저, 공지 사항 관련 DB의 API(PHP), MQTT 관련 신호 및
                    데이터, 예약 처리(Python)
                  </Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>서버</Typography>
                  <Typography>
                    ▪ Ubuntu 18.04 기반 서버 구축, 도메인 설정(NGINX, Iptime)
                  </Typography>
                </Text>
              </Grid>
            </Grid>
          </div>
        </CustomSwiperSlide>
        <CustomSwiperSlide
          style={{
            alignItems: smallMode ? "normal" : "center",
            marginTop: smallMode ? "1rem" : "0rem",
          }}
        >
          <div
            style={{
              width: smallMode ? "90%" : "70%",
              height: "50%",
              textAlign: "left",
            }}
          >
            <Title
              className="title"
              data-swiper-parallax="-300"
              style={{ fontSize: fontSize * 2 }}
            >
              프로젝트 소개 [2/4]
            </Title>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  기술 스택
                </Subtitle>
                <Text className="text" data-swiper-parallax="-100">
                  <Typography style={{ fontWeight: "bolder" }}>
                    안드로이드
                  </Typography>
                  <Typography>▪ Java, MQTT, SFTP</Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>
                    백엔드
                  </Typography>
                  <Typography> ▪ PHP : 유저, 예약 관련 정보</Typography>
                  <Typography> ▪ Python : MQTT, Scheduler, pymysql </Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>서버</Typography>
                  <Typography>
                    ▪ Ubuntu 18.04 LTS, MQTT(Mosquitto), Systemd, MariaDB, NGINX
                  </Typography>
                </Text>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  개발 환경
                </Subtitle>
                <Text className="text" data-swiper-parallax="-100">
                  <Typography style={{ fontWeight: "bolder" }}>
                    안드로이드
                  </Typography>
                  <Typography>▪ Android Studio</Typography>
                  {!smallMode && <br />}
                  <Typography style={{ fontWeight: "bolder" }}>
                    백엔드
                  </Typography>
                  <Typography> ▪ PHP : VSC</Typography>
                  <Typography> ▪ Python : Pycharm</Typography>
                  {!smallMode && <br />}
                </Text>
              </Grid>
            </Grid>
          </div>
        </CustomSwiperSlide>
        <CustomSwiperSlide
          style={{
            alignItems: smallMode ? "normal" : "center",
            marginTop: smallMode ? "1rem" : "0rem",
          }}
        >
          <div
            style={{
              width: smallMode ? "90%" : "80%",
              height: "70%",
              textAlign: "left",
            }}
          >
            <Title
              className="title"
              data-swiper-parallax="-300"
              style={{
                fontSize: fontSize * 2,
                textAlign: smallMode ? "center" : "match-parent",
              }}
            >
              프로젝트 소개 [3/4]
            </Title>
            <Subtitle className="subtitle" data-swiper-parallax="-200">
              구조도
            </Subtitle>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  메인 구조
                </Subtitle>
                <div
                  style={{
                    display: "block",
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    alt="main"
                    width={500}
                    height={300}
                    src={"/image/image/main.png"}
                    objectFit="cover"
                    objectPosition="center"
                  /> */}
                  <img src={`${prefix}/image/image/main.png`} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  백엔드(Python)
                </Subtitle>
                <div
                  style={{
                    display: "block",
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    alt="main"
                    width={500}
                    height={400}
                    src={"/image/image/backend.png"}
                    objectFit="cover"
                    objectPosition="center"
                  /> */}
                  <img src={`${prefix}/image/image/backend.png`} />
                </div>
              </Grid>
            </Grid>
          </div>
        </CustomSwiperSlide>
        <CustomSwiperSlide
          style={{
            alignItems: smallMode ? "normal" : "center",
            marginTop: smallMode ? "1rem" : "0rem",
          }}
        >
          <div
            style={{
              width: smallMode ? "90%" : "80%",
              height: "70%",
              textAlign: "left",
            }}
          >
            <Title
              className="title"
              data-swiper-parallax="-300"
              style={{
                fontSize: fontSize * 2,
                textAlign: smallMode ? "center" : "match-parent",
              }}
            >
              프로젝트 소개 [4/4]
            </Title>
            <Subtitle className="subtitle" data-swiper-parallax="-200">
              구조도
            </Subtitle>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  안드로이드
                </Subtitle>
                <div
                  style={{
                    display: "block",
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    alt="main"
                    width={500}
                    height={400}
                    src={"/image/image/android.png"}
                    objectFit="cover"
                    objectPosition="center"
                  /> */}
                  <img src={`${prefix}/image/image/android.png`} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Subtitle className="subtitle" data-swiper-parallax="-200">
                  스위치(ESP8266)
                </Subtitle>
                <div
                  style={{
                    display: "block",
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    alt="main"
                    width={500}
                    height={400}
                    src={"/image/image/switch.png"}
                    objectFit="cover"
                    objectPosition="center"
                  /> */}
                  <img src={`${prefix}/image/image/switch.png`} />
                </div>
              </Grid>
            </Grid>
          </div>
        </CustomSwiperSlide>
      </Swiper>
      {!smallMode && (
        <div>
          <div
            className="swiper-button-next"
            style={{ marginRight: "4rem", color: "#3eccc4" }}
          ></div>
          <div
            className="swiper-button-prev"
            style={{ marginLeft: "4rem", color: "#3eccc4" }}
          ></div>
        </div>
      )}
    </BackgroundContainer>
  );
}
