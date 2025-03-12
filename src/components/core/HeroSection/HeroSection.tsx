import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      offset: 400,
      once: true,
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "120px 20px 40px", md: "160px 80px 60px" },
        backgroundImage: "url('/Images/landingpage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
      data-aos="fade-up"
    >
      {/* Left Content */}
      <Box sx={{ flex: 1, maxWidth: "650px" }} data-aos="fade-up">
        <Typography
          variant="h4"
          fontWeight={700}
          color="#07B007"
          sx={{ marginBottom: "24px", textAlign: { xs: "center", md: "left" } }}
        >
          AutoCart – Buy & Sell Cars, Trucks, Vans, and Parts Easily!
        </Typography>

        <Typography
          variant="body1"
          color="#1F2937"
          fontWeight="bold"
          sx={{ marginBottom: "32px", textAlign: { xs: "center", md: "left" } }}
        >
          Scan. Post. Sell. Effortlessly buy and sell vehicles and parts with
          AutoCart's innovative app. Post ads instantly using our registration
          plate scanning technology.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 1,
          }}
        >
          <Button
            href="#"
            sx={{
              color: "white",
              padding: "8px 16px",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Image
              src="/Images/appStore.png"
              alt="App Store"
              width={220}
              height={51}
            />
          </Button>
          <Button
            href="#"
            sx={{
              color: "white",
              padding: "8px 16px",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Image
              src="/Images/googleButton.png"
              alt="Play Store"
              width={220}
              height={51}
            />
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: { xs: "60px", md: "0" },
          maxWidth: "600px",
        }}
        data-aos="fade-up"
      >
        <Image
          src="/Images/mockupgroup.png"
          alt="iPhone Mockups"
          width={500}
          height={500}
          style={{ position: "relative", zIndex: 1, maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
