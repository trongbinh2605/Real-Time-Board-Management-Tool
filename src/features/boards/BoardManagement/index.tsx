import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BoardSidebar from "./components/BoardSidebar";

const BoardManagement: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 144px)",
        backgroundColor: "#2F3840",
        padding: "40px",
      }}
    >
      <BoardSidebar />
      <Box paddingLeft={"64px"}>
        <Typography
          sx={{
            color: "#9095A1",
            fontSize: "13px",
            fontWeight: 400,
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          YOUR WORKSPACES
        </Typography>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <Box
            onClick={() => navigate("/boards/1")}
            sx={{
              width: "183px",
              height: "97px",
              backgroundColor: "#fff",
              borderRadius: "1px",
              padding: "16px",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#171A1F",
              }}
            >
              My Trello board
            </Typography>
          </Box>

          <Box
            sx={{
              width: "183px",
              height: "97px",
              backgroundColor: "transparent",
              borderRadius: "1px",
              padding: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed #9095A1",
            }}
          >
            <Typography
              sx={{
                color: "#9095A1",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
              }}
            >
              + Create a new board
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoardManagement;
