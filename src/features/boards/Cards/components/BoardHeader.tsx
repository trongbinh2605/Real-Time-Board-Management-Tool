import React from "react";
import { Box, Typography, Button } from "@mui/material";
import UserIcon from "@/components/common/Icons/UserIcon";

interface BoardHeaderProps {
  onInviteClick: () => void;
  boardTitle?: string;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({
  onInviteClick,
  boardTitle = "My Trello Board",
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#743254",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: 16, color: "#fff", fontWeight: 500 }}>
        {boardTitle}
      </Typography>
      <Button
        startIcon={<UserIcon />}
        onClick={onInviteClick}
        sx={{
          color: "#BDC1CA",
          backgroundColor: "#1F252A",
          textTransform: "none",
          fontSize: 13,
          px: 2,
          py: 1,
          height: 30,
          borderRadius: 1,
          border: "1px solid #BDC1CA",
          "&:hover": {
            backgroundColor: "#2c3136",
          },
        }}
      >
        Invite members
      </Button>
    </Box>
  );
};

export default BoardHeader;
