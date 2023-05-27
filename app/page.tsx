"use client";
import React from "react";
import ConverterInput from "./ConverterInput";
import { Grid, Stack } from "@mui/material";
import Arrow from "../public/arrow.png";
import Image from "next/image";
import Button from "@mui/material/Button";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
        spacing={2}
      >
        <Grid item>
          <ConverterInput label="From" />
        </Grid>
        <Grid item>
          <Button>
            <Image src={Arrow} alt="arrows" height={40} width={40} />
          </Button>
        </Grid>

        <Grid item>
          <ConverterInput label="To" />
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
