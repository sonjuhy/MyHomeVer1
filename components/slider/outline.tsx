import React, { useEffect, useState } from "react";

import SvgPocket from "../../public/image/svg/SvgPath";
import { Typography, useMediaQuery } from "@mui/material";
import { useAppSelector } from "../../context/redux/hooks";

interface OutlineSliderProps {
  activeIndex: number;
}

let pageNumber: number = 0;

export default function Home({ activeIndex }: OutlineSliderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [startAnimation, setStartAnimation] = useState(false);

  const smallMode = useAppSelector((state) => state.page.smallMode);
  const fontSize = smallMode ? 18 : 32;

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
        height: "100svh",
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
