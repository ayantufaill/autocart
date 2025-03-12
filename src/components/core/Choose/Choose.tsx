import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";

const features = [
  {
    icon: "/Images/scan.png",
    text: "Scan & Post Instantly: Quickly create ads with plate scanning technology.",
    bgColor: "#D0D8FF",
  },
  {
    icon: "/Images/car.png",
    text: "Cars: Explore new and used cars from trusted sellers.",
    bgColor: "#C6B5FF",
  },
  {
    icon: "/Images/truck.png",
    text: "Trucks & Vans: Buy and sell commercial and heavy-duty vehicles.",
    bgColor: "#FFB5B5",
  },
  {
    icon: "/Images/part.png",
    text: "Parts: Find and list parts for all types of vehicles.",
    bgColor: "#FFF5B5",
  },
  {
    icon: "/Images/social.png",
    text: "Social Integration: Swipe, like, and engage with vehicle listings in a fun, social format.",
    bgColor: "#B5FFD5",
  },
];

export default function AutoCartUI() {
  return (
    <Box sx={{ backgroundColor: "#F0F0F0", minHeight: "100vh", p: 4 }}>
      {/* <Typography
        variant="h4"
        align="center"
        color="#07B007"
        fontWeight="bold"
        mb={3}
      >
        Why Choose AutoCart?
      </Typography> */}

      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#4CAF50", mb: 4, mt: 2 }}
      >
        Why Choose AutoCart?
      </Typography>

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Phone Mockup - Image on Left for Larger Screens */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Image
            src="/Images/choose.png" // Ensure this image exists
            alt="Phone Mockup"
            width={650}
            height={800}
            unoptimized
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>

        {/* Features Section */}
        <Grid item xs={12} md={6}>
          {features.map((feature, index) => (
            <Box key={index} display="flex" alignItems="center" mb={4}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <Image
                  src={feature.icon}
                  alt="Feature Icon"
                  width={45}
                  height={45}
                  unoptimized
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "21px", fontWeight: 500, color: "#1F2937" }}
              >
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
