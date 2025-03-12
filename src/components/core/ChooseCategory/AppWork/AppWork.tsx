import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function AutoCartScreen() {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4 },
        textAlign: "center",
      }}
    >
      {/* <Typography
        variant="h4"
        fontWeight={600}
        color="green"
        mb={{ xs: 2, md: 3 }}
        fontSize={{ xs: "1.8rem", md: "2.2rem" }}
      >
        How AutoCart Mobile App Works
      </Typography> */}

      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#4CAF50", mb: 4, mt: 2 }}
      >
        How AutoCart Mobile App Works
      </Typography>

      {/* Image Section */}
      <Box
        display="flex"
        justifyContent="center"
        mb={{ xs: 2, md: 4 }}
        sx={{ width: "100%" }}
      >
        <Image
          src="/Images/threemobiles.png"
          alt="AutoCart Mobile App"
          width={700}
          height={690}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        color="#1F2937"
        mt={2}
        maxWidth={750}
        fontSize={{ xs: "16px", md: "18px" }}
        mx="auto"
        fontWeight="bold"
        px={{ xs: 2, sm: 0 }}
      >
        Scan. Post. Sell. Effortlessly buy and sell vehicles and parts with
        AutoCart's innovative app. Post ads instantly using our registration
        plate scanning technology.
      </Typography>

      {/* Buttons Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        mt={3}
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} sm="auto">
          <Button
            href="#"
            sx={{
              padding: 0,
              display: "block",
              width: "100%",
              maxWidth: 220,
              mx: "auto",
            }}
          >
            <Image
              src="/Images/appStore.png"
              alt="App Store"
              width={220}
              height={51}
              style={{ width: "100%", height: "auto" }}
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Button
            href="#"
            sx={{
              padding: 0,
              display: "block",
              width: "100%",
              maxWidth: 220,
              mx: "auto",
            }}
          >
            <Image
              src="/Images/googleButton.png"
              alt="Play Store"
              width={220}
              height={51}
              style={{ width: "100%", height: "auto" }}
            />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
