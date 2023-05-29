"use client";
import React, { useState } from "react";
import ConverterInput from "./ConverterInput";
import { Grid, Stack } from "@mui/material";
import Arrow from "../public/arrow.png";
import Image from "next/image";
import Button from "@mui/material/Button";
import "./page.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./ConverterInput.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type Props = {};

const page = (props: Props) => {
  const [selected, setSelected] = useState<any>("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("INR");
  const [fromCurrencyValue, setFromCurrencyValue] = useState<number>(0);
  const [toCurrencyValue, setToCurrencyValue] = useState<number>(0);

  const handleChangeFrom = (event: SelectChangeEvent) => {
    setFromCurrencyValue(event.target.value as unknown as number);
    console.log(event.target.value);
  };

  const handleChangeTo = (event: SelectChangeEvent) => {
    setToCurrencyValue(event.target.value as unknown as number);
    console.log(toCurrencyValue);
  };
  const handleSelect = (countryCode: any) => {
    setSelected(countryCode);
  };
  const handleCurrency = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "qGMMLTHEtOwOsv1NPW5Toh5zgKlBLPfu");

      const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      const response = await fetch(
        `https://api.apilayer.com/fixer/latest?symbols=${toCurrency}&base=${fromCurrency}`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
    }
  };
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
              <Box
                sx={{
                  border: "2px solid #E0E0E0",
                  borderRadius: "20px",
                  padding: 4,
                  backgroundColor: "#fff",
                }}
              >
                <Stack direction="row" flexWrap="wrap" spacing={8}>
                  <Stack direction="column" flexWrap="wrap">
                    <Typography sx={{ color: "gray", fontSize: "14px" }}>
                      from
                    </Typography>

                    <TextField
                      type="number"
                      variant="standard"
                      InputProps={{
                        inputProps: { min: 0 },
                        disableUnderline: true,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" flexWrap="wrap">
                    <div>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={toCurrency}
                        label="Currency"
                        onChange={handleChangeFrom}
                        sx={{
                          backgroundColor: "#EFF4FE",
                          color: "#294FE2",
                          fontWeight: "700",
                        }}
                      >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                        <MenuItem value="HKD">HKD</MenuItem>
                      </Select>
                    </div>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
            <Grid item>
              <Image src={Arrow} alt="arrows" height={40} width={40} />
            </Grid>

            <Grid item>
              <Box
                sx={{
                  border: "2px solid #E0E0E0",
                  borderRadius: "20px",
                  padding: 4,
                  backgroundColor: "#fff",
                }}
              >
                <Stack direction="row" flexWrap="wrap" spacing={8}>
                  <Stack direction="column" flexWrap="wrap">
                    <Typography sx={{ color: "gray", fontSize: "14px" }}>
                      To
                    </Typography>

                    <TextField
                      type="number"
                      variant="standard"
                      InputProps={{
                        inputProps: { min: 0 },
                        disableUnderline: true,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" flexWrap="wrap">
                    <div>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={toCurrency}
                        label="Currency"
                        onChange={handleChangeTo}
                        sx={{
                          backgroundColor: "#EFF4FE",
                          color: "#294FE2",
                          fontWeight: "700",
                        }}
                      >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                        <MenuItem value="HKD">HKD</MenuItem>
                      </Select>
                    </div>
                  </Stack>
                </Stack>
              </Box>
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
