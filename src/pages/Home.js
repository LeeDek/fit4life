import React, { useState } from "react";
import { Box } from "@mui/material";
import { MainBanner } from "./../components/MainBanner";
import { Exercises } from "./../components/Exercises";
import { SearchExercises } from "./../components/SearchExercises";

const Home = () => {
  return (
    <Box>
      <MainBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
