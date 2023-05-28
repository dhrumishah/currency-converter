"use client";
import React from "react";
import ConverterInput from "./ConverterInput";
import { Grid, Stack } from "@mui/material";
import Arrow from "../public/arrow.png";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Roboto } from "next/font/google";
import "./page.css";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="page-container">
      <div className="grid-bg">
        <div className="grid-column">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <ConverterInput label="From" />
            </Grid>
            <Grid item>
              <Image src={Arrow} alt="arrows" height={40} width={40} />
            </Grid>

            <Grid item>
              <ConverterInput label="To" />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            id="btn"
            sx={{
              marginTop: 2,
              width: 1 / 5,
              backgroundColor: "#294FE2",
              borderRadius: "12px",
              fontFamily: "Roboto",
            }}
          >
            Get Started!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
