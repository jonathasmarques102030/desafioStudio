import react from "react";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { gql, useQuery } from "@apollo/client";

const OBTER_IMAGEM = gql`
  query ObterImagem {
    userPicture
  }
`;

const OBTER_INFORMACOES = gql`
  query obterInformacoes {
    favoriteBooks {
      name
      author {
        id
        name
      }
    }
  }
`;

export default function Header() {
  const { data } = useQuery<{ userPicture: string }>(OBTER_IMAGEM);

  console.log(data?.userPicture);

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={10}
          gap={3}
          display={"flex"}
          sx={{
            margin: "auto",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img src="/logo.svg" alt="" />
          </Box>
          <Box>
            <FormControl
              sx={{ m: 0, width: "50ch", border: "none" }}
              color="info"
            >
              <InputLabel color="info" htmlFor="outlined-adornment-password">
                buscar por localidade
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon color="disabled" />
                  </InputAdornment>
                }
                label="Buscar por localidade"
              />
            </FormControl>
          </Box>
          <Box>
            <Button sx={{ gap: 1, color: "#555555" }}>
              <InputAdornment position="end">
                <AddCircleIcon sx={{ color: "#555555" }} />
              </InputAdornment>
              Adicionar
            </Button>
          </Box>
          <Box>
            <Button sx={{ gap: 1, color: "#555555" }}>
              <InputAdornment position="end">
                <FavoriteIcon sx={{ color: "#555555" }} />
              </InputAdornment>
              Favoritos
            </Button>
          </Box>
          <Box>
            <Button sx={{ gap: 1, color: "#555555" }}>
              <InputAdornment position="end">
                <img src={data?.userPicture} alt="" width={"32px"} />
              </InputAdornment>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
