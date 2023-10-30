import * as React from "react";
import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const OBTER_INFORMACOES = gql`
query obterInformacoes($bookId: ID!) {
  book(id: $bookId) {
    name
    author {
      name
    }
    description
    cover
  }
}
`;

export default function Body() {
  const { bookId } = useParams();

  const { data } = useQuery<{
    book: {
      name: string;
      author: {
        name: string;
      };
      description: string;
      cover: string;
    };
  }>(OBTER_INFORMACOES, {
    variables: { bookId: bookId },
  });

  let favoriteBooks: Array<{
    name: string;
    author: { name: string };
    description: string;
    cover: string;
  }> = [];

  if (data && data.book) {
    console.log("Nome do livro:", data.book.name);
    console.log("Nome do autor:", data.book.author.name);
    console.log("Descrição:", data.book.description);
    console.log("Capa:", data.book.cover);

    favoriteBooks.push({
      name: data.book.name,
      author: { name: data.book.author.name },
      description: data.book.description,
      cover: data.book.cover,
    });
  } else {
    console.log("Dados não encontrados");
  }

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={10}
          sm={5}
          display={"flex"}
          sx={{
            margin: "auto",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <Grid item xs={3} sm={1}>
            <Box>
              <img
                src={data?.book.cover}
                alt=""
                width={"100%"}
                style={{ borderRadius: "20px" }}
              />
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
              {data?.book.name}
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
              {data?.book.author.name}
            </Typography>
            <Typography
              mt={4}
              sx={{ size: "18px", color: "#555555", fontWeight: "400" }}
            >
              {data?.book.description}
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
