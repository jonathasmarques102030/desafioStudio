import * as React from "react";

import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { gql, useQuery } from "@apollo/client";

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

const OBTER_INFORMACOES = gql`
  query obterInformacoes {
    favoriteBooks {
      name
      cover
      author {
        id
        name
        booksCount
        picture
      }
    }
  }
`;

export default function Body() {
  const [value, setValue] = React.useState(0);

  const { data } = useQuery<{
    favoriteBooks: Array<{
      author: { name: string; booksCount: string; picture: string };
      cover: string;
      name: string;
    }>;
  }>(OBTER_INFORMACOES);

  const informacoes =
    data?.favoriteBooks.map((book) => ({
      name: book.name,
      nameAuthor: book.author.name,
      cover: book.cover,
    })) || [];

  const artistas =
    data?.favoriteBooks.map((book) => ({
      nameAuthor: book.author.name,
      booksAuthor: book.author.booksCount,
      pictureAuthor: book.author.picture,
    })) || [];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = "#A076F2";
    return {
      backgroundColor,
      height: theme.spacing(5),
      color: "#A076F2",
      fontWeight: "bold",
      "&:hover, &:focus": {
        backgroundColor: "#A076F2",
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: "#A076F2",
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
            <Typography
              variant="h4"
              sx={{
                gap: 1,
                color: "#555555",
                textTransform: "none",
                fontWeight: "700",
                size: "28px",
              }}
            >
              Livros favoritos
            </Typography>
            <Button
              sx={{
                gap: 1,
                color: "#A076F2",
                textTransform: "none",
                fontWeight: "700",
                size: "18px",
              }}
            >
              ver tudo
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} mt={3} display={"flex"}>
          {informacoes.slice(0, 6).map((book, index) => (
            <Grid
              xs={2}
              key={index}
              sx={{
                margin: 0,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  textAlign: "initial",
                  maxHeight: "262px",
                  maxWidth: "150px",
                  overflow: "auto",
                }}
              >
                <img
                  src={book.cover}
                  alt=""
                  width={"136px"}
                  height={"198px"}
                  style={{ borderRadius: "10px" }}
                />
                <Typography
                  sx={{
                    color: "#555555",
                    textTransform: "none",
                    fontWeight: "700",
                    fontSize: "16px",
                    maxHeight: "2em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {book.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#757575",
                    textTransform: "none",
                    fontWeight: "700",
                    size: "14px",
                  }}
                >
                  {book.nameAuthor}
                </Typography>
              </Box>
            </Grid>
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
            <Typography
              variant="h4"
              sx={{
                gap: 1,
                color: "#555555",
                textTransform: "none",
                fontWeight: "700",
                size: "28px",
              }}
            >
              Artistas favoritos
            </Typography>
            <Button
              sx={{
                gap: 1,
                color: "#A076F2",
                textTransform: "none",
                fontWeight: "700",
                size: "18px",
              }}
            >
              ver todos
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          mt={4}
          display={"flex"}
          sx={{ margin: 0, justifyContent: "space-between" }}
        >
          {artistas.slice(0, 3).map((books, index) => (
            <>
              <Grid
                key={index}
                xs={3}
                display={"flex"}
                sx={{ alignItems: "center", gap: 2, margin: 0, mt: 4 }}
              >
                <Box
                  sx={{
                    alignItems: "center",
                    textAlign: "initial",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    src={books.pictureAuthor}
                    alt=""
                    width={"68px"}
                    height={"68px"}
                    style={{ borderRadius: "15px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      gap: 1,
                      color: "#555555",
                      textTransform: "none",
                      fontWeight: "700",
                      size: "16px",
                    }}
                  >
                    {books.nameAuthor}
                  </Typography>
                  <Typography
                    sx={{
                      gap: 1,
                      color: "#757575",
                      textTransform: "none",
                      fontWeight: "700",
                      size: "14px",
                    }}
                  >
                    {books.booksAuthor}
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
            <Typography
              variant="h4"
              sx={{
                gap: 1,
                color: "#555555",
                textTransform: "none",
                fontWeight: "700",
                size: "28px",
              }}
            >
              Biblioteca
            </Typography>
          </Box>
        </Grid>
        <Grid item mt={5} ml={0}>
          <Stack direction="row" spacing={2} color={"#A076F2"}>
            <Chip
              label="Todos"
              sx={{ backgroundColor: "#A076F2", color: "#FFF" }}
            />
            <Chip
              label="Romance"
              sx={{ backgroundColor: "#A076F2", color: "#FFF" }}
            />
            <Chip
              label="Aventura"
              sx={{ backgroundColor: "#A076F2", color: "#FFF" }}
            />
            <Chip
              label="Comédia"
              sx={{ backgroundColor: "#A076F2", color: "#FFF" }}
            />
          </Stack>
        </Grid>
        <Grid container spacing={2} mt={5}>
          {informacoes.map((book, index) => (
            <Grid item xs={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "initial",
                  justifyContent: "flex-start",
                  gap: 2,
                  height: "100px",
                }}
              >
                <img
                  src={book.cover}
                  alt=""
                  width={"68px"}
                  height={"100px"}
                  style={{ borderRadius: "10px" }}
                />
                <Box>
                  <Typography
                    sx={{
                      gap: 1,
                      color: "#555555",
                      textTransform: "none",
                      fontWeight: "700",
                      size: "28px",
                    }}
                  >
                    {book.name}
                  </Typography>
                  <Typography
                    sx={{
                      gap: 1,
                      color: "#757575",
                      textTransform: "none",
                      fontWeight: "700",
                      size: "28px",
                    }}
                  >
                    {book.nameAuthor}
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
