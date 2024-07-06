import { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

export const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Exercises4U
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          hieght="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercise"
          type="text"
        ></TextField>
      </Box>
    </Stack>
  );
};
