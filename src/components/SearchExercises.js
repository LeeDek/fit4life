import { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

export const SearchExercises = () => {
  return (
    <Stack alignItems="center" justifyContent="center" p="10px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="20px"
        textAlign="center"
      >
        Studio Classes
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1170", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          hieght="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Classes"
          type="text"
        ></TextField>
      </Box>
    </Stack>
  );
};
