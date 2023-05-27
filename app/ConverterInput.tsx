"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReactFlagsSelect from "react-flags-select";

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
        boxShadow: "10px 10px 5px 0px rgba(92, 96, 153, 1)",
        WebkitBoxShadow: "10px 10px 5px 0px rgba(92, 96, 153, 1)",
        MozBoxShadow: "10px 10px 5px 0px rgba(92, 96, 153, 1)",
        backgroundColor: "#fff",
      }}
    >
      <Stack direction="row" flexWrap="wrap" spacing={8}>
        <Stack direction="column" flexWrap="wrap">
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            {props.label}
          </Typography>

          <TextField
            label="Enter amount"
            type="number"
            variant="filled"
            InputProps={{ inputProps: { min: 0 } }}
            sx={{
              border: "none",
              mt: 1,
            }}
          />
        </Stack>
        <Stack direction="column" flexWrap="wrap">
          <Typography sx={{ color: "gray", mb: 1 }}>
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
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConverterInput;
