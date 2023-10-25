import * as React from "react";

import { Box, Button, Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const item: {
    [key: string]: { imagem: string; nome: string; autor: string };
  } = {
    filme1: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne",
      autor: "Julia Quinn",
    },
    filme2: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne",
      autor: "Julia Quinn",
    },
    filme3: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne",
      autor: "Julia Quinn",
    },
    filme4: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne",
      autor: "Julia Quinn",
    },
    filme5: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne",
      autor: "Julia Quinn",
    },
    filme6: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne",
      autor: "Julia Quinn",
    },
  };

  const artistas: {
    [key: string]: { imagem: string; nome: string; livros: string };
  } = {
    artista1: {
      imagem: "/mulher.svg",
      nome: "Connie Brockway",
      livros: "6 livros",
    },
    artista2: {
      imagem: "/homem.svg",
      nome: "Connie Brockway",
      livros: "6 livros",
    },
    artista3: {
      imagem: "/senhor.svg",
      nome: "Jakob Nielsen",
      livros: "53 livros",
    },
  };

  return (
    <>
      <Grid container>
        <Grid item xs={10} pt={4} sx={{ margin: "auto" }}>
          <Box sx={{ borderColor: "#FFF", margin: "0", p: 0 }}>
            <Tabs
              sx={{ color: "#555555" }}
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ color: "#555555" }}
                label="Meus livros"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ color: "#555555" }}
                label="Emprestados"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid container>
              <Grid item mt={3} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Livros favoritos</Typography>
                  <Button sx={{ color: "#A076F2" }}>ver tudo</Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                mt={3}
                display={"flex"}
                sx={{ justifyContent: "center" }}
              >
                {Object.keys(item).map((key) => (
                  <>
                    <Grid xs={2} sx={{ margin: 0 }}>
                      <Box
                        sx={{
                          margin: "auto",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <img src={item[key].imagem} alt="" />
                        <Typography>{item[key].nome}</Typography>
                        <Typography>{item[key].autor}</Typography>
                      </Box>
                    </Grid>
                  </>
                ))}
              </Grid>
              <Grid item mt={4} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Artistas favoritos</Typography>
                  <Button sx={{ color: "#A076F2" }}>ver todos</Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                mt={3}
                display={"flex"}
                sx={{ justifyContent: "center", gap: 3 }}
              >
                {Object.keys(artistas).map((key) => (
                  <>
                    <Grid xs={3} display={"flex"} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          alignItems: "center",
                          textAlign: "center",
                          gap: 1
                        }}
                      >
                        <img src={artistas[key].imagem} alt="" />
                      </Box>
                      <Box>
                        <Typography>{artistas[key].nome}</Typography>
                        <Typography>{artistas[key].livros}</Typography>
                      </Box>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            Emprestados
          </CustomTabPanel>
        </Grid>
      </Grid>
    </>
  );
}
