"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 10 }, bgcolor: "white" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700} color="#07B007">
            About Us
          </Typography>
          <Typography
            variant="body1"
            color="#4B5563"
            sx={{ fontSize: "18px", mt: 2 }}
          >
            Welcome to AutoCart, your ultimate destination for buying and
            selling cars, trucks, vans, and auto parts effortlessly. We’re here
            to redefine how you connect with buyers and sellers in the
            automotive world, offering a seamless, secure, and user-friendly
            platform tailored to meet your needs.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 3,
              borderColor: "#07B007",
              fontWeight: "bold",
              color: "#07B007",
              "&:hover": {
                bgcolor: "white",
                borderRadius: "1px",
                borderColor: "#07B007",
              },
            }}
            endIcon={<span>&rarr;</span>}
          >
            Read More
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", sm: 400 },
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Image
              src="/Images/aboutt.png"
              alt="AutoCart Mobile Preview"
              width={400}
              height={300}
              style={{
                borderRadius: 12,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
