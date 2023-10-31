import * as React from "react";

import './App.css';

import Header from "./pages/Inicio/Header/Header";
import MainTab from "./pages/Inicio/Main/MainTab";
import Footer from "./pages/Inicio/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <MainTab />
      <Footer />
    </>
  );
}
