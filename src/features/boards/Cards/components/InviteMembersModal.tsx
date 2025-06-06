import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

interface InviteMembersModalProps {
  open: boolean;
  onClose: () => void;
}

const InviteMembersModal: React.FC<InviteMembersModalProps> = ({
  open,
  onClose,
}) => {
  const [isLinkEnabled, setIsLinkEnabled] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = async () => {
    setCopySuccess(true);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#272D33",
          color: "#fff",
          borderRadius: "8px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "19px",
          fontWeight: 700,
          padding: "16px 24px",
          color: "#BDC1CA",
        }}
      >
        Invite to Board
      </DialogTitle>
      <DialogContent sx={{ padding: "24px" }}>
        <TextField
          autoFocus
          fullWidth
          placeholder="Email address or name"
          sx={{
            marginBottom: "24px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#16191C",
              color: "#fff",
              "& fieldset": {
                borderColor: "#9095A1",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#0079bf",
              },
            },
            "& .MuiOutlinedInput-input": {
              fontSize: "14px",
              "&::placeholder": {
                color: "#FFFFFF99",
                opacity: 1,
              },
            },
          }}
        />

        <Box sx={{ marginBottom: "16px" }}>
          <Typography
            sx={{
              color: "#BDC1CA",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            Invite someone to this Workspace with a link:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: isLinkEnabled ? "#2D7FF9" : "#FFFFFF99",
                textTransform: "none",
                fontSize: "14px",
                padding: 0,
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
              onClick={() => setIsLinkEnabled(!isLinkEnabled)}
            >
              {isLinkEnabled ? "Disable link" : "Enable link"}
            </Button>
            <Button
              variant="outlined"
              startIcon={<span style={{ fontSize: "16px" }}>$</span>}
              sx={{
                color: copySuccess ? "#4CAF50" : "#BDC1CA",
                borderColor: copySuccess ? "#4CAF50" : "#FFFFFF33",
                textTransform: "none",
                fontSize: "14px",
                transition: "all 0.2s",
                "&:hover": {
                  borderColor: copySuccess ? "#45A049" : "#FFFFFF4D",
                  backgroundColor: "#FFFFFF0D",
                },
              }}
              onClick={handleCopyLink}
              disabled={!isLinkEnabled}
            >
              {copySuccess ? "Copied!" : "Copy link"}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default InviteMembersModal;
