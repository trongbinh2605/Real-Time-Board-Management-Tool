import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/features/auth/Login";
import EmailVerification from "@/features/auth/EmailVerification";
import BoardManagement from "@/features/boards/BoardManagement";
import Cards from "@/features/boards/Cards";
import AuthLayout from "@/components/layouts/AuthLayout";
import ProtectedRoute from "@/components/common/ProtectedRoute";

export default function AppRoutes() {
  const isAuth = localStorage.getItem("accessToken") !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to="/boards" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/login"
          element={
            !isAuth ? (
              <AuthLayout>
                <Login />
              </AuthLayout>
            ) : (
              <Navigate to="/boards" replace />
            )
          }
        />

        <Route
          path="/verification"
          element={
            !isAuth ? (
              <AuthLayout>
                <EmailVerification />
              </AuthLayout>
            ) : (
              <Navigate to="/boards" replace />
            )
          }
        />

        <Route
          path="/boards"
          element={
            <ProtectedRoute>
              <BoardManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/boards/:boardId"
          element={
            <ProtectedRoute>
              <Cards />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
