import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import SvgPocket from "../../public/image/svg/SvgPath";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { motion } from "framer-motion";

interface IntroSliderProps {
  activeIndex: number;
}

let pageNumber: number = 1;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: theme.palette.text.secondary,
}));

export default function Home({ activeIndex }: IntroSliderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [startAnimation, setStartAnimation] = useState(false);
  const [smallMode, setSmallMode] = useState(false);
  const [fontSize, setFontSize] = useState(32);

  const swiper = useSwiper();

  const moveToSlide = (num: number) => {
    swiper.slideToLoop(num);
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
      id="intro_container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: smallMode ? "normal" : "center",
        backgroundColor: "#f4f5ff",
      }}
    >
      <Stack spacing={2} style={{ marginTop: smallMode ? "2rem" : "0rem" }}>
        <div
          style={{ display: "flex", alignItems: "center", textAlign: "left" }}
        >
          <Typography
            variant="h2"
            style={{
              display: "inline-block",
              color: "#3eccc4",
              // flexShrink: 0, // 텍스트가 줄어들지 않도록 설정
            }}
          >
            프
          </Typography>
          <Typography
            variant="h3"
            style={{
              marginRight: "2rem",
              textAlign: "left",
              whiteSpace: "nowrap",
            }}
          >
            로젝트 목적
          </Typography>
        </div>
        <div
          id="centerBox"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              style={{
                transition: "opacity 0.7s ease-in-out",
                opacity: startAnimation ? 1 : 0,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => moveToSlide(2)}
                style={{ cursor: "pointer" }}
              >
                <Item>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="iot svg"
                      fill={prefersDarkMode ? "#FFFFFF" : "#404040"}
                      width={smallMode ? "120" : "150"}
                      height={smallMode ? "120" : "150"}
                      viewBox="0 0 24 24"
                    >
                      <path d={SvgPocket.internetPath} />
                    </svg>
                  </Box>
                  <Typography
                    variant="body1"
                    // style={{ fontSize: "2.4rem", textSizeAdjust: "auto" }}
                    style={{ fontSize: fontSize * 1.1, textSizeAdjust: "auto" }}
                  >
                    IoT
                  </Typography>
                </Item>
              </motion.div>
              <Typography
                variant="h5"
                style={{ fontSize, marginTop: smallMode ? "1rem" : "2rem" }}
              >
                집에 IoT 생태계 구축.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              style={{
                transition: "opacity 0.7s ease-in-out 0.3s",
                opacity: startAnimation ? 1 : 0,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => moveToSlide(3)}
                style={{ cursor: "pointer" }}
              >
                <Item>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="cloud svg"
                      fill={prefersDarkMode ? "#FFFFFF" : "#404040"}
                      width={smallMode ? "120" : "150"}
                      height={smallMode ? "120" : "150"}
                      viewBox="0 0 24 24"
                    >
                      <path d={SvgPocket.cloudPath} />
                    </svg>
                  </Box>
                  <Typography
                    variant="body1"
                    // style={{ fontSize: "2.4rem", textSizeAdjust: "auto" }}
                    style={{ fontSize: fontSize * 1.1, textSizeAdjust: "auto" }}
                  >
                    Cloud
                  </Typography>
                </Item>
              </motion.div>
              <Typography
                variant="h5"
                style={{ fontSize, marginTop: smallMode ? "1rem" : "2rem" }}
              >
                가족을 위한 클라우드.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              style={{
                transition: "opacity 0.7s ease-in-out 0.6s",
                opacity: startAnimation ? 1 : 0,
                marginTop: smallMode ? "2rem" : "0rem",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => moveToSlide(4)}
                style={{ cursor: "pointer" }}
              >
                <Item>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="addons svg"
                      fill={prefersDarkMode ? "#FFFFFF" : "#404040"}
                      width={smallMode ? "120" : "150"}
                      height={smallMode ? "120" : "150"}
                      viewBox="0 0 24 24"
                    >
                      <path d={SvgPocket.etcPath} />
                    </svg>
                  </Box>
                  <Typography
                    variant="body1"
                    // style={{ fontSize: "2.4rem", textSizeAdjust: "auto" }}
                    style={{ fontSize: fontSize * 1.1, textSizeAdjust: "auto" }}
                  >
                    Add-ons
                  </Typography>
                </Item>
              </motion.div>
              <Typography
                variant="h5"
                style={{ fontSize, marginTop: smallMode ? "1rem" : "2rem" }}
              >
                날씨, 공지 등 부가기능
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </div>
  );
}
