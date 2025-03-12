import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

export default function FAQSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ textAlign: "center", p: 4, backgroundColor: "#FFFFFF" }}>
      {/* <Typography variant="h5" fontWeight={600} color="#07B007" mb={2}>
        Our Frequently asked questions
      </Typography> */}

      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#4CAF50", mb: 4, mt: 2 }}
      >
        Our Frequently asked questions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 6,
          mb: 4,
          px: 4,
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            ml: isMobile ? 0 : -6,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/Images/group.png"
            alt="Phone Mockup"
            width={isMobile ? 350 : 550}
            height={isMobile ? 450 : 700}
          />
        </Box>

        <Box
          maxWidth={isMobile ? 400 : 550}
          sx={{ flexGrow: 1, ml: isMobile ? 0 : 8, mt: isMobile ? 4 : 0 }}
        >
          <Accordion
            sx={{
              backgroundColor: "#F2F2F2",
              borderRadius: "12px",
              mb: 4,
              maxWidth: isMobile ? 300 : "100%",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                fontWeight={500}
                fontSize={isMobile ? "18px" : "21px"}
              >
                How does plate scanning work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={isMobile ? "18px" : "21px"}>
                Plate scanning uses OCR technology to read vehicle license
                plates and retrieve relevant details.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#F2F2F2",
              borderRadius: "12px",
              mb: 4,
              maxWidth: isMobile ? 300 : "100%",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                fontWeight={500}
                fontSize={isMobile ? "18px" : "21px"}
              >
                Is the app free?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={isMobile ? "18px" : "21px"}>
                Yes, the app is free to use with optional premium features.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#F2F2F2",
              borderRadius: "12px",
              maxWidth: isMobile ? 300 : "100%",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                fontWeight={500}
                fontSize={isMobile ? "18px" : "21px"}
              >
                What types of vehicles can I list?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={isMobile ? "18px" : "21px"}>
                You can list cars, motorcycles, and commercial vehicles on our
                platform.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
