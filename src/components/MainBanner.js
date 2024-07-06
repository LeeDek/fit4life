import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import fit4life from "../assets/fit4life-5.jpg";

export const MainBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#117bad" fontWeight="600">
        Fit4U
      </Typography>
      <Typography
        fontWeight={700}
        marginBottom="20px"
        color="#117bad"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Fit, Treat <br /> Repeat
      </Typography>
      <img src={fit4life} alt="fit4lifeBanner" className="fit4life-banner" />
      <Typography
        fontWeight={600}
        color="#117bad"
        sx={{
          opacity: 0.1,
          display: { lg: "block", sx: "none" },
        }}
        fontSize="200px"
      >
        Studio
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out our studio classes💪
      </Typography>
      <Button
        variant="contained"
        href="#exercisews"
        sx={{ backgroundColor: "#00d1d4" }}
      >
        Studio Classes
      </Button>
    </Box>
  );
};
