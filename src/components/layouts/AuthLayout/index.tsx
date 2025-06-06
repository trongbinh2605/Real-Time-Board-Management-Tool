import React from "react";
import type { ReactNode } from "react";
import { Box } from "@mui/material";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <img
          src={Image1}
          alt="Image1"
          style={{
            width: "306px",
            height: "302px",
          }}
        />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <img
          src={Image2}
          alt="Image2"
          style={{
            width: "306px",
            height: "302px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AuthLayout;
