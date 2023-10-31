import * as React from "react";
import {
  Box,
  Button,
  Typography,
  InputAdornment,
  Grid,
  useMediaQuery,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

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

function CustomFavoriteIcon({
  isClicked,
  onClick,
}: {
  isClicked: boolean;
  onClick: () => void;
}) {
  return (
    <FavoriteIcon
      style={{ color: isClicked ? "#A076F2" : undefined, cursor: "pointer" }}
      onClick={onClick}
    />
  );
}

export default function Body() {
  const { bookId } = useParams();
  const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);

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

  const isSmallScreen = useMediaQuery("(max-width:1068px)");

  const handleFavoriteClick = () => {
    setIsFavoriteClicked(!isFavoriteClicked);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <Grid
            container
            sx={{
              backgroundColor: "green",
              backgroundSize: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${data?.book.cover}")`,
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                margin: "auto",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Grid
                item
                display={"flex"}
                sx={{ justifyContent: "space-between" }}
              >
                <Box ml={3}>
                  <Button href="/">
                    <ArrowBackIcon sx={{ color: "#FFF", width: 24 }} />
                  </Button>
                </Box>
                <Box mr={3}>
                  <Button href="">
                    <MoreVertIcon sx={{ color: "#FFF", width: 24 }} />
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                mt={30}
                display={"block"}
                sx={{
                  backgroundColor: "#FFF",
                  borderRadius: "15px 15px 0px 0px",
                }}
              >
                <Box>
                  <Box display={"flex"} sx={{ alignItems: "baseline" }}>
                    <Box>
                      <Typography
                        margin={3}
                        variant="h4"
                        sx={{
                          color: "#555555",
                          size: "34px",
                          fontWeight: "700",
                        }}
                      >
                        {data?.book.name}
                      </Typography>
                      <Typography
                        margin={3}
                        variant="h6"
                        sx={{
                          color: "#757575",
                          size: "24px",
                          fontWeight: "400",
                          marginTop: 2,
                        }}
                      >
                        {data?.book.author.name}
                      </Typography>
                    </Box>
                    <Box>
                      <InputAdornment position="start">
                        <CustomFavoriteIcon
                          isClicked={isFavoriteClicked}
                          onClick={handleFavoriteClick}
                        />
                      </InputAdornment>
                    </Box>
                  </Box>

                  <Typography
                    margin={3}
                    mt={4}
                    sx={{ size: "18px", color: "#555555", fontWeight: "400" }}
                  >
                    {data?.book.description}
                  </Typography>
                  <Grid item mt={3} xs={12}>
                    <Box>
                      <Typography
                        margin={3}
                        variant="h4"
                        sx={{
                          size: "28px",
                          color: "#555555",
                          fontWeight: "700",
                        }}
                      >
                        Sobre o Autor
                      </Typography>
                      <Typography
                        ml={3}
                        mt={3}
                        sx={{
                          size: "18px",
                          color: "#555555",
                          fontWeight: "400",
                        }}
                      >
                        {data?.book.author.name} começou a trabalhar em seu
                        primeiro romance um mês de - pois de terminar a
                        faculdade e nunca mais parou de escrever. Seus livros
                        foram traduzidos para 37 idiomas e, no Brasil, venderam
                        mais de 2,5 milhões de exemplares. A série Os
                        Bridgertons foi adaptada pela Netflix e se tornou um
                        sucesso instantâneo, quebrando os recordes de audiência
                        da plataforma. Julia foi a autora mais jovem a ser
                        incluída na Galeria da Fama dos Escritores Românticos
                        dos Estados Unidos.
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container>
          <Grid
            item
            xs={5}
            sm={10}
            display={"flex"}
            sx={{
              margin: "auto",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <Grid item xs={2} sm={4}>
              <Box>
                <img
                  src={data?.book.cover}
                  alt=""
                  width={"296px"}
                  height={"433px"}
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
            <Grid item xs={8} sm={8}>
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
                {data?.book.description.split("<p>").map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  ></p>
                ))}
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
                    JULIA QUINN começou a trabalhar em seu primeiro romance um
                    mês de - pois de terminar a faculdade e nunca mais parou de
                    escrever. Seus livros foram traduzidos para 37 idiomas e, no
                    Brasil, venderam mais de 2,5 milhões de exemplares. A série
                    Os Bridgertons foi adaptada pela Netflix e se tornou um
                    sucesso instantâneo, quebrando os recordes de audiência da
                    plataforma. Julia foi a autora mais jovem a ser incluída na
                    Galeria da Fama dos Escritores Românticos dos Estados
                    Unidos.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
