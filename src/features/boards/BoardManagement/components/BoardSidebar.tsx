import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import BarChartIcon from "../../../../components/common/Icons/BarChartIcon";
import MemberIcon from "../../../../components/common/Icons/MemberIcon";

const BoardSidebar: React.FC = () => (
  <Box sx={{ width: "241px", display: "flex", flexDirection: "column" }}>
    <List sx={{ padding: "8px" }}>
      <ListItemButton
        sx={{
          borderRadius: "1px",
          marginBottom: "8px",
          backgroundColor: "#162032",
          border: "#9095A1 1px solid",
          height: "32px",
        }}
      >
        <ListItemIcon sx={{ minWidth: "35px" }}>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText
          primary="Boards"
          sx={{
            "& .MuiTypography-root": {
              color: "#fff",
              fontSize: "12px",
              fontWeight: 400,
            },
          }}
        />
      </ListItemButton>

      <ListItemButton
        sx={{ borderRadius: "1px", paddingLeft: "48px", height: "32px" }}
      >
        <ListItemIcon sx={{ minWidth: "35px" }}>
          <MemberIcon />
        </ListItemIcon>
        <ListItemText
          primary="All Members"
          sx={{
            "& .MuiTypography-root": {
              color: "#fff",
              fontSize: "13px",
              fontWeight: 400,
            },
          }}
        />
      </ListItemButton>
    </List>
  </Box>
);

export default BoardSidebar;
