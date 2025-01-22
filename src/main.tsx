import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/Login/LoginPage.tsx";
import { SignUpPage } from "./pages/SignUp/SignUpPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/entrar" element={<LoginPage />} />
        <Route path="/cadastrar" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
