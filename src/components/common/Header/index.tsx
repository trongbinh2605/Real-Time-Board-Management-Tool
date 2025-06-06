import React from "react";
import { AppBar, Toolbar, Box, Avatar } from "@mui/material";
import Image4 from "@/assets/image4.png";
import Image3 from "@/assets/image3.png";
import Image5 from "@/assets/image5.png";

interface HeaderProps {
  showMenuButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showMenuButton = true }) => {
  return (
    <AppBar position="static" sx={{ width: "100vw" }}>
      <Toolbar
        sx={{
          bgcolor: "#2B3035",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center">
          {showMenuButton && (
            <img
              src={Image4}
              alt="Menu"
              style={{
                width: 16,
                height: 16,
                marginRight: 16,
              }}
            />
          )}
          <img
            src={Image3}
            alt="Logo"
            style={{
              width: 36,
              height: 36,
            }}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <img
            src={Image5}
            alt="Notification"
            style={{
              width: 17,
              height: 17,
            }}
          />
          <Avatar
            sx={{
              bgcolor: "red",
              width: 24,
              height: 24,
              fontSize: 11,
              ml: 2,
            }}
          >
            TB
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
