import React from "react";
import { Box, Typography, List, ListItem, Avatar, Button } from "@mui/material";
import FolderIcon from "@/components/common/Icons/FolderIcon";
import MemberIcon from "@/components/common/Icons/MemberIcon";

interface User {
  id: string;
  name: string;
}

interface BoardSidebarProps {
  users: User[];
}

const BoardSidebar: React.FC<BoardSidebarProps> = ({ users }) => {
  return (
    <Box
      sx={{
        width: 228,
        backgroundColor: "#242A30",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ px: 2, pt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography sx={{ color: "#9095A1", fontSize: 13 }}>
            Your boards
          </Typography>
          <Typography sx={{ color: "#9095A1", fontSize: 13 }}>....</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 1.5,
            py: 1,
            borderRadius: 2,
            cursor: "pointer",
          }}
        >
          <FolderIcon />
          <Typography sx={{ fontSize: 13, color: "#9095A1" }}>
            My Trello board
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: 2, pt: 2 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, px: 1.5, mb: 1 }}
        >
          <MemberIcon />
          <Typography sx={{ color: "#BDC1CA", fontSize: 13 }}>
            Members
          </Typography>
        </Box>
        <List sx={{ p: 0, pl: 2 }}>
          {users.map((user) => (
            <ListItem key={user.id} sx={{ p: "6px 12px", cursor: "pointer" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: "#d32f2f",
                    fontSize: 10,
                  }}
                >
                  {user.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .toUpperCase()}
                </Avatar>
                <Typography sx={{ fontSize: 13, color: "#BDC1CA" }}>
                  {user.name}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          mt: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: 15, px: 1 }}>
          You won't be able to reopen a board after closing it.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#EF5855",
            color: "#171A1F",
            textTransform: "none",
            fontSize: 14,
            py: "6px",
            "&:hover": {
              backgroundColor: "#e74c3c",
            },
          }}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default BoardSidebar;
