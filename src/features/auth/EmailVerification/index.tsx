import React, { useState, useEffect } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmailVerification: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const pendingEmail = sessionStorage.getItem("pendingEmail");
    if (!pendingEmail) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = () => {
    if (verificationCode.trim()) {
      const mockToken = `mock-token-${Date.now()}`;
      localStorage.setItem("accessToken", mockToken);

      sessionStorage.removeItem("pendingEmail");
      navigate("/boards", { replace: true });
    }
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
      <Typography
        sx={{
          fontSize: "29px",
          fontWeight: "700",
          marginTop: "24px",
          marginBottom: "16px",
        }}
      >
        Email Verification
      </Typography>
      <Typography
        sx={{
          fontSize: "11px",
          textAlign: "center",
          color: "#536488",
        }}
      >
        Please enter your code that send to your email address
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Enter code verification"
        fullWidth
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        sx={{
          margin: "10px 0",
          "& input::placeholder": {
            textAlign: "center",
            color: "#565D6D",
            fontSize: "12px",
          },
          "& input": {
            paddingY: "7.5px",
          },
        }}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{
          textTransform: "none",
          height: "38px",
          backgroundColor: "#0E50E1",
          fontSize: "10px",
          marginBottom: "8px",
        }}
      >
        Submit
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

export default EmailVerification;
