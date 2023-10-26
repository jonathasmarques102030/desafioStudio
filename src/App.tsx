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
      <Grid container mt={5} sx={{ background: "#A076F2" }}>
        <Grid
          item
          xs={10}
          display={"flex"}
          sx={{
            margin: "auto",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box ml={8}>
            <img src="/logoFooter.svg" alt="" />
          </Box>
          <Box>
            <Typography color={'#FFF'}>
              Todos os direitos reservados. Studio Sol Books © 2023
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
