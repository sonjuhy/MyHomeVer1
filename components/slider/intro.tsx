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
  color: theme.palette.text.secondary,
}));

export default function Home({ activeIndex }: IntroSliderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [startAnimation, setStartAnimation] = useState(false);
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
            marginTop: "5rem",
          }}
        >
          <Grid container spacing={6}>
            <Grid
              item
              xs={4}
              sm={4}
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
                      width="150"
                      height="150"
                      viewBox="0 0 24 24"
                    >
                      <path d={SvgPocket.internetPath} />
                    </svg>
                  </Box>
                  <Typography variant="h3">IoT</Typography>
                </Item>
              </motion.div>
              <Typography variant="h5" style={{ marginTop: "2rem" }}>
                집에 IoT 생태계 구축.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
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
                      width="150"
                      height="150"
                      viewBox="0 0 24 24"
                    >
                      <path d={SvgPocket.cloudPath} />
                    </svg>
                  </Box>
                  <Typography variant="h3">Cloud</Typography>
                </Item>
              </motion.div>
              <Typography variant="h5" style={{ marginTop: "2rem" }}>
                가족을 위한 클라우드.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              style={{
                transition: "opacity 0.7s ease-in-out 0.6s",
                opacity: startAnimation ? 1 : 0,
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
                      width="150"
                      height="150"
                      viewBox="0 0 24 24"
                    >
                      <path d={SvgPocket.etcPath} />
                    </svg>
                  </Box>
                  <Typography variant="h3">Add-ons</Typography>
                </Item>
              </motion.div>
              <Typography variant="h5" style={{ marginTop: "2rem" }}>
                날씨, 공지사항 등 부가기능
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </div>
  );
}
