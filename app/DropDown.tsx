import React, { useState, useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

type Props = {};

const DropDown = (props: Props) => {
  const [currency, setCurrency] = React.useState("INR");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };
  return (
    <div>
      {/* <Box
        sx={{
          backgroundColor: "#EFF4FE",
          borderRadius: "10px",
          cursor: "pointer",
          padding: 1,
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={1}
          sx={{
            fontSize: "15px",
            color: "#2261F2",
            fontWeight: "700",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={IndianFlag} alt="indian-flag" height={20} width={20} />
          <p>INR</p>
        </Stack>
      </Box> */}

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency}
        label="Currency"
        onChange={handleChange}
        sx={{ backgroundColor: "#EFF4FE", color: "#294FE2", fontWeight: "700" }}
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="INR">INR</MenuItem>
        <MenuItem value="HKD">HKD</MenuItem>
      </Select>
    </div>
  );
};

export default DropDown;
