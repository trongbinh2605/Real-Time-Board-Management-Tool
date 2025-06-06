import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../../common/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const isOnBoardsPage =
    location.pathname === "/boards/" || location.pathname === "/boards";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header showMenuButton={isOnBoardsPage} />
      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
