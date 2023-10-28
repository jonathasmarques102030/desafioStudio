import * as React from "react";

import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { gql, useQuery } from "@apollo/client";

const OBTER_INFORMACOES = gql`
  query obterInformacoes {
    favoriteBooks {
      name
      cover
      author {
        id
        name
        picture
        booksCount
        books {
          description
        }
      }
    }
  }
`;

type QueryResponse = {
  favoriteBooks: Array<{
    author: {
      name: string;
      booksCount: string;
      picture: string;
      books: Array<{ description: string }>;
    };
    cover: string;
    name: string;
  }>;
};

export default function Body() {
  const { data } = useQuery<QueryResponse>(OBTER_INFORMACOES);

  const informacoes =
    data?.favoriteBooks.map((book) => ({
      name: book.name,
      nameAuthor: book.author.name,
      cover: book.cover,
      description: book.author.books[0].description, 
    })) || [];

  console.log(informacoes[0]);

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={10}
          display={"flex"}
          sx={{
            margin: "auto",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <Grid item xs={3}>
            <Box>
              <img src='./logoFilme.svg' alt="" width={"100%"} />
            </Box>

            <Box mt={3}>
              <Box>
                <Button
                  sx={{
                    gap: 1,
                    color: "#555555",
                    textTransform: "none",
                    fontWeight: "700",
                    size: "18px",
                  }}
                >
                  <InputAdornment position="end">
                    <FavoriteIcon sx={{ color: "#555555" }} />
                  </InputAdornment>
                  Favoritar
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    gap: 1,
                    color: "#555555",
                    textTransform: "none",
                    fontWeight: "700",
                    size: "18px",
                  }}
                >
                  <InputAdornment position="end">
                    <ShareIcon sx={{ color: "#555555" }} />
                  </InputAdornment>
                  Compartilhar
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    gap: 1,
                    color: "#555555",
                    textTransform: "none",
                    fontWeight: "700",
                    size: "18px",
                  }}
                >
                  <InputAdornment position="end">
                    <FileDownloadOutlinedIcon sx={{ color: "#555555" }} />
                  </InputAdornment>
                  Salvar em uma lista
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Typography
              variant="h3"
              sx={{ color: "#555555", size: "34px", fontWeight: "700" }}
            >
              io
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#757575",
                size: "24px",
                fontWeight: "400",
                marginTop: 2,
              }}
            >
              oi
            </Typography>
            <Typography
              mt={4}
              sx={{ size: "18px", color: "#555555", fontWeight: "400" }}
            >
              Simon Basset, o irresistível duque de Hastings, acaba de retornar
              a Londres depois de seis anos viajando pelo mundo. Rico, bonito e
              solteiro, ele é um prato cheio para as mães da alta sociedade, que
              só pensam em arrumar um bom partido para suas filhas.
            </Typography>
            <Typography
              mt={4}
              sx={{ size: "18px", color: "#555555", fontWeight: "400" }}
            >
              Simon, porém, tem o firme propósito de nunca se casar. Assim, para
              se livrar das garras dessas mulheres, precisa de um plano
              infalível.
            </Typography>
            <Typography
              mt={4}
              sx={{ size: "18px", color: "#555555", fontWeight: "400" }}
            >
              É quando entra em cena Daphne Bridgerton, a irmã mais nova de seu
              melhor amigo. Apesar de espirituosa e dona de uma personalidade
              marcante, todos os homens que se interessam por ela são velhos
              demais, pouco inteligentes ou destituídos de qualquer tipo de
              charme. E os que têm potencial para ser bons maridos só a veem
              como uma boa amiga. A ideia de Simon é fingir que a corteja. Dessa
              forma, de uma tacada só, ele conseguirá afastar as jovens
              obcecadas por um marido e atrairá vários pretendentes para Daphne.
              Afinal, se um duque está interessado nela, a jovem deve ter mais
              atrativos do que aparenta.
            </Typography>
            <Typography
              mt={4}
              sx={{ size: "18px", color: "#555555", fontWeight: "400" }}
            >
              A ideia de Simon é fingir que a corteja. Dessa forma, de uma
              tacada só, ele conseguirá afastar as jovens obcecadas por um
              marido e atrairá vários pretendentes para Daphne. Afinal, se um
              duque está interessado nela, a jovem deve ter mais atrativos do
              que aparenta.
            </Typography>
            <Grid item mt={3} xs={12}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ size: "28px", color: "#555555", fontWeight: "700" }}
                >
                  Sobre o Autor
                </Typography>
                <Typography
                  mt={3}
                  sx={{ size: "18px", color: "#555555", fontWeight: "400" }}
                >
                  JULIA QUINN começou a trabalhar em seu primeiro romance um mês
                  de - pois de terminar a faculdade e nunca mais parou de
                  escrever. Seus livros foram traduzidos para 37 idiomas e, no
                  Brasil, venderam mais de 2,5 milhões de exemplares. A série Os
                  Bridgertons foi adaptada pela Netflix e se tornou um sucesso
                  instantâneo, quebrando os recordes de audiência da plataforma.
                  Julia foi a autora mais jovem a ser incluída na Galeria da
                  Fama dos Escritores Românticos dos Estados Unidos.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
