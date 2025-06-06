import React, { useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image3 from "@/assets/image3.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleContinue = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    sessionStorage.setItem("pendingEmail", email);
    navigate("/verification");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "305px",
        paddingX: "34px",
        paddingBottom: "54px",
        paddingTop: "10px",
        border: "1px solid #E0E0E0",
        height: "fit-content",
      }}
    >
      <img
        src={Image3}
        alt="Image3"
        style={{
          width: "55px",
          height: "55px",
          margin: "10px auto",
        }}
      />

      <Typography sx={{ fontSize: "11px", color: "#29354F" }}>
        Log in to continue
      </Typography>

      <TextField
        variant="outlined"
        placeholder="Enter your email"
        fullWidth
        value={email}
        onChange={handleEmailChange}
        error={!!emailError}
        helperText={emailError}
        sx={{
          margin: "10px 0px",
          "& input::placeholder": {
            textAlign: "center",
            fontSize: "14px",
            color: "#565D6D",
          },
          "& input": {
            paddingY: "7.5px",
          },
          "& .MuiFormHelperText-root": {
            fontSize: "11px",
            marginX: 0,
          },
        }}
        type="email"
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleContinue}
        sx={{
          textTransform: "none",
          height: "38px",
          marginBottom: "8px",
          backgroundColor: "#0E50E1",
          fontSize: "10px",
        }}
      >
        Continue
      </Button>

      <Typography sx={{ fontSize: "11px", color: "#3F4C67" }}>
        Privacy Policy
      </Typography>

      <Typography sx={{ fontSize: "11px", color: "#536488" }}>
        This site is protected by reCAPTCHA and the Google Privacy
      </Typography>

      <Link
        sx={{
          fontSize: "11px",
          color: "#305CBB",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Policy and Terms of Service apply.
      </Link>
    </Box>
  );
};

export default Login;
