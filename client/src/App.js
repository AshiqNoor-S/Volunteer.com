import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Location from "./pages/Location";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          {<Header />}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <Home /> : <Navigate to="/" />}
            />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
