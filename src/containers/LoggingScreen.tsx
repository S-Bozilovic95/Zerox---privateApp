import { FC } from "react";
import { PlaylistAddCheckRounded } from "@mui/icons-material";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import logo from "assets/img/hubLogo.svg";

export const LoggingScreen: FC = () => {
  return (
    <Box>
      <Container
        sx={{
          padding: "77px 10px 110px 10px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "#414141",

          "@media (max-width: 1024px)": {
            padding: "50px 10px 50px 10px ",
          },
        }}
      >
        <img src={logo} />

        <Box>
          <Typography
            mt="95px"
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: "43px",

              "@media (max-width: 1024px)": {
                fontSize: "25px",
                textAlign: "center",
                marginTop: "65px",
              },
            }}
          >
            Request for Private App Integration:
          </Typography>
          <Typography
            variant="h3"
            mt="35px"
            ml="27px"
            sx={{
              fontSize: "24px",
              color: "#A8A8A8",

              "@media (max-width: 1024px)": {
                fontSize: "20px",
                marginTop: "25px",
                marginLeft: "0",
                textAlign: "center",
              },
            }}
          >
            <Typography
              component={"span"}
              variant="inherit"
              fontWeight="bold"
              sx={{ color: "#414141" }}
            >
              Application{" "}
            </Typography>
            will have access to:
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            ml="27px"
            mt="35px"
            mb="54px"
            sx={{
              "@media (max-width: 1024px)": {
                marginBottom: "45px",
                marginLeft: "0",
              },
            }}
          >
            <PlaylistAddCheckRounded
              sx={{
                color: "#959595",
                padding: "7px",
                fontSize: "55px",
                backgroundColor: "#D9D9D9",
                borderRadius: "5px",
              }}
            />
            <Box
              ml="12px"
              sx={{
                fontSize: "18px",

                "@media (max-width: 768px)": {
                  fontSize: "15px",
                  textAlign: "center",
                },
              }}
            >
              <Typography fontWeight="bold">
                Private App Defined Scope in Hubspot
              </Typography>
              <Typography sx={{ color: "#A8A8A8" }}>
                Make sure to provide access for integrations you plan to use
              </Typography>
            </Box>
          </Stack>

          <Grid container alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography
                fontWeight="bold"
                mb="9px"
                sx={{
                  fontSize: "17px",

                  "@media (max-width: 768px)": {
                    fontSize: "15px",
                    marginBottom: "0px",
                  },
                }}
              >
                Access Token: *
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                placeholder="***-***-*******-****-****-****-************"
                type="password"
                fullWidth
                inputProps={{
                  style: {
                    fontSize: "17px",
                    color: "#A8A8A8",
                    padding: "15px 21px",
                    outline: "none",
                    border: "2px solid #E1E6EE",
                    borderRadius: "3px",
                  },
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={3} sx={{ verticalAlign: "center" }}>
              <Button
                sx={{
                  backgroundColor: "#EF8162",
                  padding: "15px 28px",
                  display: "inline-block",
                  marginLeft: "21px",
                  marginTop: "10px",
                  color: "#FFF",
                  textTransform: "none",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "700",

                  "&:hover": {
                    backgroundColor: "#ee8d73",
                    cursor: "pointer",
                  },

                  "@media (max-width: 768px)": {
                    fontSize: "15px",
                    marginTop: "10px",
                    marginLeft: "0px",
                    marginBottom: "10px",
                  },
                }}
              >
                Grant access
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
