import React, { useEffect, useState } from "react";

import SvgPocket from "../../public/image/svg/SvgPath";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";

interface IotSliderProps {
  activeIndex: number;
}

let pageNumber: number = 2;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home({ activeIndex }: IotSliderProps) {
  const [startAnimation, setStartAnimation] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            ? "translate(-38vw, 30vh)"
            : "translate(-70vw, 70vh)",
          opacity: prefersDarkMode ? 1 : 0.3,
        }}
      >
        <path d={SvgPocket.wifiPath} />
      </svg>
      <div>
        <Stack spacing={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
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
              I
            </Typography>
            <Typography
              variant="h3"
              style={{
                marginRight: "2rem",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >
              oT
            </Typography>
          </div>

          <div
            id="centerBox"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
              marginLeft: "20vw",
              marginRight: "20vw",
            }}
          >
            <Grid container spacing={6}>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                style={{
                  transition: "opacity 0.7s ease-in-out",
                  opacity: startAnimation ? 1 : 0,
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: "#808080",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  원격 제어
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  어디서든 안드로이드 어플을 통해 원격으로 전등을 제어 할 수
                  있습니다. 외부와 연결된 서버를 통하여 같은 네트워크가
                  아니더라도 원격으로 제어가 가능합니다.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                style={{
                  transition: "opacity 0.7s ease-in-out",
                  opacity: startAnimation ? 1 : 0,
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: "#808080",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  실시간 제어
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  MQTT를 이용하여 실시간으로 제어를 할 수 있습니다. 뿐만 아니라
                  현재 전등의 상태까지도 확인 할 수 있으며, 실시간으로
                  변경되더라도 바로 반영이 가능합니다.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                style={{
                  transition: "opacity 0.7s ease-in-out",
                  opacity: startAnimation ? 1 : 0,
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: "#808080",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  편의성
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  즐겨찾기 기능을 이용하여 접근성이 가장 좋은 안드로이드 어플의
                  메인 화면 첫 페이지에 등록 가능. 번거롭게 세부 카테고리를
                  들어가지 않더라도 즉시 제어가 가능합니다.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                style={{
                  transition: "opacity 0.7s ease-in-out",
                  opacity: startAnimation ? 1 : 0,
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: "#808080",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  예약
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  원하는 시간, 날짜, 반복 여부, 장소를 선택하여 전등 제어를
                  예약으로 실행하는 기능입니다. 등록 뿐만 아니라 삭제, 수정을
                  통해 예약 상태를 관리 할 수 있으며 목록 보기를 통해 간편하게
                  관리 가능합니다.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </div>
    </div>
  );
}
