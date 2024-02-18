import React, { useEffect, useState } from "react";

import SvgPocket from "../../public/image/svg/SvgPath";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";

interface CloudSliderProps {
  activeIndex: number;
}

let pageNumber: number = 4;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home({ activeIndex }: CloudSliderProps) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f4f5ff",
      }}
    >
      <Stack spacing={2} style={{ marginTop: "5rem" }}>
        <Typography
          variant="h3"
          style={{ marginRight: "2rem", textAlign: "left" }}
        >
          <Typography
            variant="h1"
            style={{
              display: "inline-block",
              color: "#3eccc4",
              lineHeight: "1.2",
              verticalAlign: "sub",
            }}
          >
            C
          </Typography>
          loud Part
        </Typography>
        <div
          id="centerBox"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
        ></div>
      </Stack>
    </div>
  );
}
