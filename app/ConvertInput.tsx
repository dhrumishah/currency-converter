"use client";
import React, { useState } from "react";
import { Grid, Stack } from "@mui/material";
import Arrow from "./../public/arrow.png";
import Image from "next/image";
import Button from "@mui/material/Button";
import "./page.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ChangeEvent } from "react";
import ReactCountryFlag from "react-country-flag";

interface ApiResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
}

type Props = {};

const ConvertInput = (props: Props) => {
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [fromCurrencyValue, setFromCurrencyValue] = useState<number>(0);
  const [toCurrencyValue, setToCurrencyValue] = useState<number>(0);
  const [gbpValue, setGbpValue] = useState<number | null>(null);

  const handleChangeFrom = (event: ChangeEvent<HTMLInputElement>) => {
    setFromCurrencyValue(parseInt(event.target.value));
    console.log(event.target.value + " from value");

    // handleCurrency()
  };

  const handleChangeTo = (event: ChangeEvent<HTMLInputElement>) => {
    setToCurrencyValue(parseInt(event.target.value));
    console.log(toCurrencyValue + " to value");

    // handleCurrency()
  };
  const handleSelectChangeFrom = (event: SelectChangeEvent) => {
    if (toCurrency === "" || toCurrency !== event.target.value)
      setFromCurrency(event.target.value);
    else console.log("cannot be same");
  };

  const handleSelectChangeTo = (event: SelectChangeEvent) => {
    if (fromCurrency === "" || fromCurrency !== event.target.value)
      setToCurrency(event.target.value);
    else console.log("cannot be same");
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

      const result: ApiResponse = await response.json();
      const gbpValue = Object.values(result.rates)[0];
      const price = fromCurrencyValue * gbpValue;
      setGbpValue(price);

      setToCurrencyValue(price);
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
                <Stack direction="row" spacing={8}>
                  <Stack direction="column" flexWrap="wrap">
                    <Typography sx={{ color: "gray", fontSize: "14px" }}>
                      From
                    </Typography>

                    <TextField
                      type="number"
                      variant="standard"
                      sx={{ fontWeight: "bold" }}
                      onChange={handleChangeFrom}
                      InputProps={{
                        inputProps: { min: 0 },
                        disableUnderline: true,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" flexWrap="wrap">
                    <div>
                      <Select
                        labelId="select-from-label"
                        id="select-from"
                        label="Currency"
                        onChange={handleSelectChangeFrom}
                        sx={{
                          backgroundColor: "#EFF4FE",
                          color: "#294FE2",
                          fontWeight: "700",
                          "&:focus": {
                            backgroundColor: "transparent", // Remove background color on focus
                            borderRadius: 0, // Remove border radius on focus
                            boxShadow: "none", // Remove box shadow on focus
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none", // Remove border
                          },
                        }}
                      >
                        <MenuItem value="USD">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ReactCountryFlag countryCode="US" svg />
                            <div>USD</div>
                          </div>
                        </MenuItem>
                        <MenuItem value="INR">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ReactCountryFlag countryCode="IN" svg />
                            <div>INR</div>
                          </div>
                        </MenuItem>
                        <MenuItem value="HKD">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ReactCountryFlag countryCode="HK" svg />
                            <div>HKD</div>
                          </div>
                        </MenuItem>
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
                <Stack direction="row" spacing={8}>
                  <Stack direction="column" flexWrap="wrap">
                    <Typography sx={{ color: "gray", fontSize: "14px" }}>
                      To
                    </Typography>

                    <TextField
                      type="number"
                      variant="standard"
                      sx={{ fontWeight: "700" }}
                      onChange={handleChangeTo}
                      value={toCurrencyValue}
                      InputProps={{
                        inputProps: { min: 0 },
                        disableUnderline: true,
                      }}
                    />
                  </Stack>
                  <Stack direction="column" flexWrap="wrap">
                    <div>
                      <Select
                        labelId="select-to-label"
                        id="select-to"
                        label="Currency"
                        onChange={handleSelectChangeTo}
                        sx={{
                          backgroundColor: "#EFF4FE",
                          color: "#294FE2",
                          fontWeight: "700",
                          "&:focus": {
                            backgroundColor: "transparent", // Remove background color on focus
                            borderRadius: 0, // Remove border radius on focus
                            boxShadow: "none", // Remove box shadow on focus
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none", // Remove border
                          },
                        }}
                      >
                        <MenuItem value="USD">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ReactCountryFlag countryCode="US" svg />
                            <div>USD</div>
                          </div>
                        </MenuItem>
                        <MenuItem value="INR">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ReactCountryFlag countryCode="IN" svg />
                            <div>INR</div>
                          </div>
                        </MenuItem>
                        <MenuItem value="HKD">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ReactCountryFlag countryCode="HK" svg />
                            <div>HKD</div>
                          </div>
                        </MenuItem>
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
            onClick={handleCurrency}
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

export default ConvertInput;
