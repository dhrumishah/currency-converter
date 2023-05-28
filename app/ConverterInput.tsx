"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReactFlagsSelect from "react-flags-select";
import "./ConverterInput.css";
import DropDown from "./DropDown";
type Props = {
  label: string;
};

const ConverterInput = (props: Props) => {
  const [selected, setSelected] = useState<any>("");
  const handleSelect = (countryCode: any) => {
    setSelected(countryCode);
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
          {/* <Typography sx={{ color: "gray", mb: 1 }}>
            Selected Country: {selected}
          </Typography>
          <ReactFlagsSelect
            countries={["US", "GB", "HK", "AU"]}
            // customLabels={{
            //   US: "USD",
            //   GB: "GBP",
            //   HK: "HKD",
            //   AU: "AUD",
            // }}
            placeholder="Select Curreny"
            showSelectedLabel={false}
            showOptionLabel={false}
            selectedSize={14}
            selected={selected}
            onSelect={handleSelect}
          /> */}
          <DropDown />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConverterInput;
