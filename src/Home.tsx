import * as React from "react";

import './App.css';

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
