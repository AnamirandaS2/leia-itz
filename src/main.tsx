import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/Login/LoginPage.tsx";
import { SignUpPage } from "./pages/SignUp/SignUpPage.tsx";
import LandingPage from "./pages/Landing/LandingPage.tsx";
import { ProtectedPage } from "./pages/ProtectedPage.tsx";
import HomePage from "./pages/Home/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/entrar" element={<LoginPage />} />
        <Route path="/cadastrar" element={<SignUpPage />} />
        <Route element={<ProtectedPage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/biblioteca" element={<HomePage />} />
          <Route path="/colecoes" element={<HomePage />} />
          <Route path="/emprestimos" element={<HomePage />} />
          <Route path="/atividade" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
