import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import fit4life from "../assets/fit4life-5.jpg";

export const MainBanner = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: { lg: "100px", xs: "50px" },
      }}
      position="relative"
      p="20px"
      alignContent="center"
    >
      <Typography
        color="#117bad"
        fontWeight="600"
        fontSize="35px"
        fontFamily="monospace"
        marginBottom="25px"
        sx={{
          opacity: 0.7,
        }}
      >
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
          opacity: 0.2,
          display: { lg: "block", sx: "none" },
        }}
        fontSize="160px"
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
