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
            marginTop: 1
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
                Busque um livro
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: '#9E9E9E' }} />
                  </InputAdornment>
                }
                label="Busque um livro"
                sx={{ borderRadius: '10px' }}
              />
            </FormControl>
          </Box>
          <Box>
            <Button sx={{ gap: 1, color: "#555555", textTransform: 'none', fontWeight: '700', size: '18px' }}>
              <InputAdornment position="end">
                <AddCircleIcon sx={{ color: "#555555" }} />
              </InputAdornment>
              Adicionar
            </Button>
          </Box>
          <Box>
            <Button sx={{ gap: 1, color: "#555555", textTransform: 'none', fontWeight: '700', size: '18px' }}>
              <InputAdornment position="end">
                <FavoriteIcon sx={{ color: "#555555" }} />
              </InputAdornment>
              Favoritos
            </Button>
          </Box>
          <Box>
            <Button sx={{ gap: 1, color: "#555555" }} disableRipple>
              <InputAdornment position="end">
                <img src={data?.userPicture} alt="" style={{ borderRadius: '100%' }} width={"32px"} height={'32px'} />
              </InputAdornment>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
