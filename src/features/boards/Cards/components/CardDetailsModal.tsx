import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Avatar,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardDetailIcon from "@/components/common/Icons/CardDetailIcon";
import DescriptionIcon from "@/components/common/Icons/DescriptionIcon";
import UserIcon from "@/components/common/Icons/UserIcon";
import ArchiveIcon from "@/components/common/Icons/ArchiveIcon";

interface CardDetails {
  id: string;
  title: string;
  description?: string;
  comments?: Array<{
    id: string;
    text: string;
    user: {
      id: string;
      name: string;
    };
    createdAt: string;
  }>;
  attachments?: Array<{
    id: string;
    name: string;
    url: string;
  }>;
  labels?: Array<{
    id: string;
    color: string;
    text: string;
  }>;
}

interface CardDetailsModalProps {
  card: CardDetails | null;
  onClose: () => void;
}

const CardDetailsModal: React.FC<CardDetailsModalProps> = ({
  card,
  onClose,
}) => {
  return (
    <Dialog
      open={Boolean(card)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#272E34",
          color: "#fff",
          borderRadius: "8px",
          maxWidth: "768px",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "16px 20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <Box sx={{ marginTop: "4px" }}>
            <CardDetailIcon />
          </Box>
          <Box display="flex" flexDirection="column" gap="4px">
            <Typography
              sx={{ fontSize: "20px", color: "#BDC1CA", fontWeight: 700 }}
            >
              Project planning
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#9095A1",
              }}
            >
              in list To do
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconButton
            onClick={onClose}
            sx={{
              color: "#FFFFFF99",
              padding: "4px",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#FFFFFF1A",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ padding: 0 }}>
        <Box sx={{ display: "flex", gap: 2, p: "20px" }}>
          <Box flex={1}>
            <Box mb={3}>
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  ml: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#9095A1",
                    }}
                  >
                    Members
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "#D04437",
                        fontSize: "14px",
                      }}
                    >
                      SD
                    </Avatar>
                    <IconButton
                      sx={{
                        width: 32,
                        height: 32,
                        border: "1px dashed #FFFFFF33",
                        borderRadius: "50%",
                        color: "#FFFFFFCC",
                        "&:hover": {
                          backgroundColor: "#FFFFFF0D",
                        },
                      }}
                    >
                      +
                    </IconButton>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 1,
                    marginLeft: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#9095A1",
                    }}
                  >
                    Notifications
                  </Typography>
                  <Button
                    startIcon={<VisibilityIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      color: "#BDC1CA",
                      backgroundColor: "#2F3840",
                      fontSize: "14px",
                      padding: "4px 12px",
                      textTransform: "none",
                      fontWeight: 400,
                      height: "32px",
                      borderColor: "#9095A1",
                    }}
                    variant="outlined"
                  >
                    Watch
                  </Button>
                </Box>
              </Box>

              <Box
                mb={2}
                mt={4}
                display={"flex"}
                alignItems="flex-start"
                gap={1}
              >
                <DescriptionIcon />
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "15px",
                      color: "#BDC1CA",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    Description
                  </Typography>
                  <TextField
                    multiline
                    rows={2}
                    fullWidth
                    placeholder="Add a more detailed description..."
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#2F3840",
                        color: "#fff",
                        fontSize: "14px",
                        "& fieldset": {
                          borderColor: "#9095A1",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box mt={4}>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "15px",
                      color: "#BDC1CA",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <FormatListBulletedIcon sx={{ fontSize: 20 }} />
                    Activity
                  </Typography>
                  <Button
                    sx={{
                      color: "#BDC1CA",
                      backgroundColor: "#2F3840",
                      fontSize: "14px",
                      padding: "4px 12px",
                      textTransform: "none",
                      fontWeight: 400,
                      height: "32px",
                      borderColor: "#9095A1",
                    }}
                    variant="outlined"
                  >
                    Show details
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 28,
                      height: 28,
                      bgcolor: "#D04437",
                      fontSize: "12px",
                    }}
                  >
                    SD
                  </Avatar>
                  <TextField
                    fullWidth
                    placeholder="Write a comment..."
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#1A1D20",
                        color: "#fff",
                        fontSize: "14px",
                        "& fieldset": {
                          borderColor: "#9095A1",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: 200 }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#9095A1",
                mb: 1,
              }}
            >
              Add to card
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button
                startIcon={<UserIcon />}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color: "#BDC1CA",
                  backgroundColor: "#2F3840",
                  textTransform: "none",
                  borderColor: "#9095A1",
                }}
                variant="outlined"
              >
                Members
              </Button>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9095A1",
                  mb: 1,
                }}
              >
                Power-Ups
              </Typography>
              <Box
                sx={{
                  borderRadius: "3px",
                }}
              >
                <Button
                  startIcon={<GitHubIcon sx={{ color: "#BDC1CA" }} />}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    color: "#BDC1CA",
                    backgroundColor: "#2F3840",
                    textTransform: "none",
                    borderRadius: "3px",
                    padding: "4px 8px",
                    "&:hover": {
                      backgroundColor: "#FFFFFF1A",
                      border: "1px solid #9095A1",
                    },
                  }}
                >
                  GitHub
                </Button>
                {[
                  "Attach Branch",
                  "Attach Commit",
                  "Attach Issue",
                  "Attach Pull Request",
                ].map((text) => (
                  <Button
                    key={text}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      color: "#BDC1CA",
                      backgroundColor: "transparent",
                      textTransform: "none",
                      pl: 3,
                      padding: "4px 8px",
                      borderRadius: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "1px solid #9095A1",
                      },
                    }}
                  >
                    {text}
                  </Button>
                ))}
                <Button
                  startIcon={<ArchiveIcon />}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    color: "#BDC1CA",
                    backgroundColor: "#2F3840",
                    textTransform: "none",
                    borderColor: "#9095A1",
                    marginTop: "8px",
                  }}
                  variant="outlined"
                >
                  Archive
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CardDetailsModal;
