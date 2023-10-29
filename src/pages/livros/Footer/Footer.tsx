import * as React from "react";

import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Grid
        container
        
        sx={{
          bottom: 0,
          background: "#A076F2",
          border: "none",
          height: "80px",
          marginTop: 5,
        }}
      >
        <Grid
          item
          xs={10}
          display={"flex"}
          sx={{
            bottom: 0,
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
    </>
  );
}
