import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Form from "../components/Form";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={'white'}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="blue">
          Welcome to Volunteer.com
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={'white'}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Make your first step by signing in
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;