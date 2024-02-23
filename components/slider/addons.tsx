import React, { useEffect, useState } from "react";

import SvgPocket from "../../public/image/svg/SvgPath";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useAppSelector } from "../../context/redux/hooks";

interface AddonsSliderProps {
  activeIndex: number;
}

let pageNumber: number = 4;

export default function Home({ activeIndex }: AddonsSliderProps) {
  const [startAnimation, setStartAnimation] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: smallMode ? "normal" : "center",

        backgroundColor: "#f4f5ff",
      }}
    >
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
              ? "translate(38vw, -10vh)"
              : "translate(38vw, -30vh)"
            : "translate(70vw, -70vh)",
          opacity: startAnimation ? (prefersDarkMode ? 0.1 : 0.3) : 0,
        }}
      >
        <path d={SvgPocket.etcPath} />
      </svg>
      <Stack spacing={2}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            marginTop: smallMode ? "0.7rem" : "0rem",
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
            A
          </Typography>
          <Typography
            variant="h3"
            style={{
              marginRight: "2rem",
              textAlign: "left",
              whiteSpace: "nowrap",
            }}
          >
            dd-ons
          </Typography>
        </div>

        <div
          id="centerBox"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: smallMode ? "1rem" : "2rem",
            marginLeft: smallMode ? "5vw" : "20vw",
            marginRight: smallMode ? "5vw" : "20vw",
          }}
        >
          <Grid container spacing={smallMode ? 4 : 6}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{
                transition: "opacity 0.7s ease-in-out",
                opacity: startAnimation ? 1 : 0,
                textAlign: "left",
              }}
            >
              <Typography
                style={{
                  fontSize: fontSize * 1.2,
                  textSizeAdjust: "auto",
                  color: "#808080",
                  marginBottom: smallMode ? "0rem" : "1rem",
                  fontWeight: "bold",
                }}
              >
                날씨 정보 제공
              </Typography>
              <Typography variant="body1" style={{ color: "#808080" }}>
                기상청에서 제공하는 날씨 정보로 선택한 지역의 현재 날씨를 파악
                할 수 있습니다. 현재 기상 상황(맑음, 흐림 등), 온도, 습도, 풍속,
                풍향을 제공합니다.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{
                transition: "opacity 0.7s ease-in-out",
                opacity: startAnimation ? 1 : 0,
                textAlign: "left",
              }}
            >
              <Typography
                style={{
                  fontSize: fontSize * 1.2,
                  color: "#808080",
                  marginBottom: smallMode ? "0rem" : "1rem",
                  fontWeight: "bold",
                }}
              >
                세부 날씨 정보 제공
              </Typography>
              <Typography variant="body1" style={{ color: "#808080" }}>
                선택된 지역의 습도, 강수량까지 추가로 제공합니다. 뿐만 아니라
                1시간 간격으로 7시간의 시간별 온도를 제공합니다.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{
                transition: "opacity 0.7s ease-in-out",
                opacity: startAnimation ? 1 : 0,
                textAlign: "left",
              }}
            >
              <Typography
                style={{
                  fontSize: fontSize * 1.2,
                  color: "#808080",
                  marginBottom: smallMode ? "0rem" : "1rem",
                  fontWeight: "bold",
                }}
              >
                공지사항(메인화면)
              </Typography>
              <Typography variant="body1" style={{ color: "#808080" }}>
                메인화면 상단에 가장 최근에 작성된 공지사항을 표시합니다. 표시
                내용은 공지사항 제목과 내용이 표시됩니다.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{
                transition: "opacity 0.7s ease-in-out",
                opacity: startAnimation ? 1 : 0,
                textAlign: "left",
              }}
            >
              <Typography
                style={{
                  fontSize: fontSize * 1.2,
                  color: "#808080",
                  marginBottom: smallMode ? "0rem" : "1rem",
                  fontWeight: "bold",
                }}
              >
                공지사항 세부
              </Typography>
              <Typography variant="body1" style={{ color: "#808080" }}>
                작성된 공지사항들의 목록을 확인 할 수 있습니다. 공지사항 추가
                가능하며, 본인이 작성한 공지사항일 경우 수정도 가능합니다.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </div>
  );
}
