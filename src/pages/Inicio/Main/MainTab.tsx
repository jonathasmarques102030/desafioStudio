import * as React from "react";

import { Box, Button, Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Body from "./components/Body";

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
            <Body />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Emprestados
          </CustomTabPanel>
        </Grid>
      </Grid>
    </>
  );
}
