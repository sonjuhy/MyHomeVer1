import React, { useEffect, useState } from "react";

import SvgPocket from "../../public/image/svg/SvgPath";
import { Typography, useMediaQuery } from "@mui/material";

interface OutlineSliderProps {
  activeIndex: number;
}

let pageNumber: number = 0;

export default function Home({ activeIndex }: OutlineSliderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [startAnimation, setStartAnimation] = useState(false);

  const [fontSize, setFontSize] = useState(32);
  const [smallMode, setSmallMode] = useState(false);

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
        setFontSize(18);
        setSmallMode(true);
      } else {
        setFontSize(32);
        setSmallMode(false);
      }
      // setFontSize(containerWidth && containerWidth <= 750 ? 18 : 32);
      // console.log(containerWidth);
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
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: smallMode ? "normal" : "center",
        backgroundColor: "#f4f5ff",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="android svg"
        fill={prefersDarkMode ? "#FFFFFF" : "#808080"}
        width="514"
        height="514"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          transition: startAnimation
            ? "transform 1s ease-in-out"
            : "transform 0s",
          transform: startAnimation
            ? startAnimation
              ? "translate(15rem, 18.5rem) rotate(-45deg)"
              : "translate(30rem, 12.5rem) rotate(-45deg)"
            : "translate(50rem, 50rem) rotate(-45deg)",
          opacity: startAnimation ? (prefersDarkMode ? 0.1 : 0.3) : 0,
        }}
      >
        <path d={SvgPocket.androidPath} />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="home svg"
        fill={prefersDarkMode ? "#FFFFFF" : "#808080"}
        width="254"
        height="254"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          transition: startAnimation
            ? "transform 1s ease-in-out"
            : "transform 0s",
          transform: startAnimation
            ? smallMode
              ? "translate(-11rem, 25.5rem)"
              : "translate(-25rem, 16.5rem)"
            : "translate(-50rem, 50rem)",
          opacity: startAnimation ? (prefersDarkMode ? 0.1 : 0.3) : 0,
        }}
      >
        <path d={SvgPocket.homePath} />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="wifi svg"
        fill={prefersDarkMode ? "#FFFFFF" : "#808080"}
        width="314"
        height="314"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          transition: startAnimation
            ? "transform 1s ease-in-out"
            : "transform 0s",
          transform: startAnimation
            ? smallMode
              ? "translate(-5rem, -10.5rem)"
              : "translate(-18rem, -15.5rem)"
            : "translate(-25rem, -50rem)",
          opacity: startAnimation ? (prefersDarkMode ? 0.1 : 0.3) : 0,
        }}
      >
        <path d={SvgPocket.wifiPath} />
      </svg>
      <div
        id="textBox"
        style={{
          color: "inherit",
          textAlign: "left",
          marginTop: smallMode ? "13rem" : "0rem",
        }}
      >
        <Typography style={{ fontSize: fontSize * 3 }}>Welcome!</Typography>
        <Typography style={{ fontSize: fontSize * 1.1 }}>
          DIY Smart Home
        </Typography>
        <Typography style={{ fontSize: fontSize * 1.1 }}>
          FullStack Project
        </Typography>
      </div>
    </div>
  );
}
