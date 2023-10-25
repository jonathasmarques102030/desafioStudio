import * as React from "react";

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

export default function App() {
  return (
    <>
      <Header></Header>
      <MainTab></MainTab>
    </>
  );
}
