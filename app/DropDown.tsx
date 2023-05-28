import { Box, Stack } from "@mui/material";
import React from "react";
import IndianFlag from "../public/indian-flag.png";
import Image from "next/image";

type Props = {};

const DropDown = (props: Props) => {
  return (
    <div>
      <Box
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
      </Box>
    </div>
  );
};

export default DropDown;
