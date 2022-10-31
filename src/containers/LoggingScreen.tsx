import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import logo from "assets/img/hubLogo.svg";
import icon from "assets/img/Rectangle.svg";

export const LoggingScreen: React.FC = () => {
  return (
    <Box>
      <Container
        sx={{
          padding: "77px 30px 110px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "#414141",
          fontFamily: "Inter",
        }}
      >
        <img src={logo} />
        <Box>
          <Typography
            mt="95px"
            variant="h1"
            sx={{
              fontSize: "43px",
              lineHeight: "52.04px",
              fontWeight: "700",
            }}
          >
            Request for Private App Integration:
          </Typography>
          <Typography
            variant="h3"
            mt="35px"
            sx={{
              fontSize: "24px",
              lineHeight: "29px",
              fontWeight: "400",
              color: "#A8A8A8",
            }}
          >
            <Typography
              component={"span"}
              variant="inherit"
              ml="27px"
              sx={{ fontWeight: "700", color: "#414141" }}
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
          >
            <img src={icon} />
            <Box ml="12px" sx={{ fontSize: "18px", lineHeight: "22px" }}>
              <Typography sx={{ fontWeight: "700" }}>
                Private App Defined Scope in Hubspot
              </Typography>
              <Typography sx={{ fontWeight: "400", color: "#A8A8A8" }}>
                Make sure to provide access for integrations you plan to use
              </Typography>
            </Box>
          </Stack>

          <Grid container alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography
                sx={{ fontWeight: "700", fontSize: "17px", lineHeight: "21px" }}
                mb="9px"
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
                  color: "#FFF",
                  textTransform: "none",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "700",

                  "&:hover": {
                    backgroundColor: "#ee8d73",
                    cursor: "pointer",
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
