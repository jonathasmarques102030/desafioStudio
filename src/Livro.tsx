import * as React from "react";

import "./App.css";

import Header from "./pages/livros/Header/Header";
import Body from "./pages/livros/MainBody/Body";
import Footer from "./pages/livros/Footer/Footer";

export default function Livro() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}