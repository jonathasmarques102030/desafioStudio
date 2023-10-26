import * as React from "react";

import { Box, Button, Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

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

export default function Body() {
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

  const biblioteca: {
    [key: string]: { imagem: string; nome: string; autor: string };
  } = {
    filme1: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme2: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme3: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme4: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme5: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme6: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme7: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme8: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
    filme9: {
      imagem: "/logoFilme.svg",
      nome: "O duque e eu (Os Bridgertons – Livro 1)",
      autor: "Julia Quinn",
    },
  };

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = "#A076F2";
    return {
      backgroundColor,
      height: theme.spacing(5),
      color: "#FFF",
      fontWeight: "bold",
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }) as typeof Chip;

  return (
    <>
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
                sx={{ justifyContent: "center" }}
              >
                {Object.keys(artistas).map((key) => (
                  <>
                    <Grid
                      xs={3}
                      display={"flex"}
                      sx={{ alignItems: "center", gap: 2, margin: "auto" }}
                    >
                      <Box
                        sx={{
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <img src={artistas[key].imagem} alt="" />
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#555555" }}>
                          {artistas[key].nome}
                        </Typography>
                        <Typography sx={{ color: "#757575" }}>
                          {artistas[key].livros}
                        </Typography>
                      </Box>
                    </Grid>
                  </>
                ))}
              </Grid>
              <Grid item mt={5} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Biblioteca</Typography>
                </Box>
              </Grid>
              <Grid item mt={5} ml={6} >
                <Stack direction="row" spacing={2} color={"#A076F2"}>
                  <Chip label="Todos" variant="outlined" />
                  <Chip label="Romance" variant="outlined" />
                  <Chip label="Aventura" variant="outlined" />
                  <Chip label="Comédia" variant="outlined" />
                </Stack>
              </Grid>
              <Grid container spacing={2} mt={5}>
                {Object.keys(biblioteca).map((key) => (
                  <Grid item xs={4} key={key}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: 'center',
                        gap: 2
                      }}
                    >
                      <img src={biblioteca[key].imagem} alt="" width={75} />
                      <Box>
                        <Typography sx={{ color: "#555555" }}>
                          {biblioteca[key].nome}
                        </Typography>
                        <Typography sx={{ color: "#757575" }}>
                          {biblioteca[key].autor}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
    </>
  );
}

