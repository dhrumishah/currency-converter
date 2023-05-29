"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./ConverterInput.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  label: string;
};

const ConverterInput = (props: Props) => {
  const [selected, setSelected] = useState<any>("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("INR");

  const handleChange = (event: SelectChangeEvent) => {
    setToCurrency(event.target.value as string);
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
            {props.label}
          </Typography>

          <TextField
            type="number"
            variant="standard"
            InputProps={{ inputProps: { min: 0 }, disableUnderline: true }}
          />
        </Stack>
        <Stack direction="column" flexWrap="wrap">
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={toCurrency}
              label="Currency"
              onChange={handleChange}
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
  );
};

export default ConverterInput;
