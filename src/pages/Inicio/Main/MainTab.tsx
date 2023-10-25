import * as React from "react";

import {
  Box,
  Button,
  Grid,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

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
            <Grid container>
              <Grid item mt={3} xs={12} sx={{ border: "3px solid" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography >Livros favoritos</Typography>
                  <Button sx={{ color: "#A076F2" }}>ver tudo</Button>
                </Box>
              </Grid>
            </Grid>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            Emprestados
          </CustomTabPanel>
        </Grid>
      </Grid>
    </>
  );
}
