import * as React from "react";
import { Box, Grid, useMediaQuery  } from "@mui/material";
import Typography from "@mui/material/Typography";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  const [value, setValue] = React.useState('Home');
  const isSmallScreen = useMediaQuery('(max-width:1068px)');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {isSmallScreen ? (
        <BottomNavigation className="bottomNavigation" sx={{ width: '100%', bottom: '0px' }} value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<HomeIcon />}
            style={value === 'Home' ? { backgroundColor: '#FFF', color: '#A076F2' } : {}}
            
          />
          <BottomNavigationAction
            label="Adicionar"
            value="Adicionar"
            icon={<AddCircleIcon />}
            style={value === 'Adicionar' ? { backgroundColor: '#FFF', color: '#A076F2' } : {}}
          />
          <BottomNavigationAction
            label="Buscar"
            value="Buscar"
            icon={<SearchIcon />}
            style={value === 'Buscar' ? { backgroundColor: '#FFF', color: '#A076F2' } : {}}
            
          />
          <BottomNavigationAction label="Favoritos" value="Favoritos" icon={<FavoriteIcon />} style={value === 'Favoritos' ? { backgroundColor: '#FFF', color: '#A076F2' } : {}} />
        </BottomNavigation>
      ) : (
        <Grid
          container
          className="containerFooter"
          sx={{
            marginBottom: 0,
            background: "#A076F2",
            border: "none",
            height: "100px",
            marginTop: 5
          }}
        >
          <Grid
            className="itensFooter"
            item
            xs={10}
            display={"flex"}
            sx={{
              margin: "auto",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
            }}
          >
            <Box ml={8}>
              <img src="/logoFooter.svg" alt="" />
            </Box>
            <Box>
              <Typography color={"#FFF"}>
                Todos os direitos reservados. Studio Sol Books © 2023
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}