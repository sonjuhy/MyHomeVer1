import React, { useEffect, useState } from "react";

import SvgPocket from "../../public/image/svg/SvgPath";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";

interface CloudSliderProps {
  activeIndex: number;
}

let pageNumber: number = 3;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home({ activeIndex }: CloudSliderProps) {
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
            ? "translate(-25vw, -35vh)"
            : "translate(-70vw, -70vh)",
          opacity: prefersDarkMode ? 1 : 0.3,
        }}
      >
        <path d={SvgPocket.cloudPath} />
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
              C
            </Typography>
            <Typography
              variant="h3"
              style={{
                marginRight: "2rem",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >
              loud
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
                  파일 관리
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  어디서든 안드로이드 어플을 통해 서버에 있는 파일을 관리 할 수
                  있습니다. 파일 정보 확인, 다운로드, 업로드, 수정 등을 할 수
                  있습니다.
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
                  파일 공유
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  공용 폴더를 이용하여 사용자들끼리 파일을 공유할 수 있습니다.
                  공용 폴더에 있는 파일들은 다운로드, 수정, 삭제 등 관리를 할 수
                  있습니다.
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  transition: "opacity 0.7s ease-in-out",
                  opacity: startAnimation ? 1 : 0,
                  textAlign: "center",
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
                  개인화
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  개인 폴더를 통하여 공유되지않는 나만의 파일들을 관리 할 수
                  있습니다.
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  개인 폴더에 있는 파일들은 오직 해당 폴더를 소유한 사용자만
                  관리 할 수 있습니다.
                </Typography>
                <Typography variant="body1" style={{ color: "#808080" }}>
                  폴더의 소유권을 가지지 않은 사용자는 해당 폴더에 존재하는 파일
                  및 하위폴더 등을 탐색 및 관리를 할 수 없습니다.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </div>
    </div>
  );
}
