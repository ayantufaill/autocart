import {
  Box,
  Typography,
  Grid,
  Link,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  YouTube,
  LinkedIn,
  Twitter,
  Instagram,
} from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#F0F0F0", p: { xs: 2, sm: 4 } }}>
      <Grid
        container
        spacing={4}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Grid item xs={12} sm={3} textAlign={isSmallScreen ? "center" : "left"}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isSmallScreen ? "center" : "flex-start"}
            gap={1}
            width="100%" // Ensures it takes full width
          >
            <img
              src="/Images/logo.png"
              alt="AutoCart Logo"
              width={40}
              style={{ alignSelf: isSmallScreen ? "center" : "flex-start" }}
            />
            <Typography
              variant="body2"
              color="#1F2937"
              style={{ alignSelf: isSmallScreen ? "center" : "flex-start" }}
            >
              © 2025 AutoCart, All Rights Reserved.
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent={isSmallScreen ? "center" : "flex-start"}
            gap={2}
            mt={2}
            color={"#1F2937"}
          >
            <Facebook />
            <YouTube />
            <LinkedIn />
            <Twitter />
            <Instagram />
          </Box>
          <Box mt={2} textAlign={isSmallScreen ? "center" : "left"}>
            <Button sx={{ mb: 1 }}>
              <img src="/Images/appStore.png" alt="App Store" width={180} />
            </Button>
            <Button sx={{ mb: 1 }}>
              <img
                src="/Images/googleButton.png"
                alt="Google Play"
                width={180}
              />
            </Button>
          </Box>
        </Grid>

        {["Company", "Socials", "Legals", "Resources"].map((section, index) => (
          <Grid
            item
            xs={12}
            sm={2}
            key={index}
            textAlign={isSmallScreen ? "left" : "left"}
          >
            <Typography fontWeight="bold" color="#1F2937">
              {section}
            </Typography>
            {section === "Company" &&
              ["About", "Blog", "FAQs", "Support"].map((item) => (
                <Typography key={item} display="block" color="#4B5563" mt={2}>
                  {item}
                </Typography>
              ))}
            {section === "Socials" &&
              [
                "Facebook",
                "Twitter",
                "Instagram",
                "Tiktok",
                "LinkedIn",
                "YouTube",
              ].map((item) => (
                <Typography key={item} display="block" color="#4B5563" mt={2}>
                  {item}
                </Typography>
              ))}
            {section === "Legals" &&
              [
                "Terms of Service",
                "Order Cancellation Policy",
                "Privacy Policy",
                "KYC/AML Policy",
              ].map((item) => (
                <Typography key={item} display="block" color="#4B5563" mt={2}>
                  {item}
                </Typography>
              ))}
            {section === "Resources" &&
              ["Android Reviews", "iOS Reviews", "Jobs", "Testimonials"].map(
                (item) => (
                  <Typography key={item} display="block" color="#4B5563" mt={2}>
                    {item}
                  </Typography>
                )
              )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
