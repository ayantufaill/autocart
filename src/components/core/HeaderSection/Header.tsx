"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {
  const [selected, setSelected] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSelect = (page: string) => {
    setSelected(page);
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          color: "#4caf50",
          borderRadius: "20px",
          width: "80%",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          padding: "5px 20px",
          top: "24px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <img src="/Images/logo.png" alt="Logo" style={{ height: 32 }} />
            {/* {!isMobile && (
              <Button
                onClick={() => handleSelect("Home")}
                sx={{
                  color: selected === "Home" ? "#4caf50" : "#6c757d",
                  borderBottom:
                    selected === "Home" ? "2px solid #4caf50" : "none",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#4caf50",
                    borderBottom: "2px solid #4caf50",
                  },
                }}
              >
                Home
              </Button>
            )} */}
          </Box>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: 3,
                  width: "100%",
                }}
              >
                {["Home", "About", "Service", "Categories", "FAQ"].map(
                  (page) => (
                    <Button
                      key={page}
                      onClick={() => handleSelect(page)}
                      sx={{
                        color: selected === page ? "#4caf50" : "#6c757d",
                        fontWeight: "bold",
                        "&:hover": { color: "#4caf50" },
                      }}
                    >
                      {page}
                    </Button>
                  )
                )}
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#07B007",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  flexShrink: 0,
                }}
              >
                Contact Us
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <img
                src="/Images/align-right.png"
                alt="menu"
                style={{ width: 30, height: 30 }}
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 2,
            gap: 3,
          }}
        >
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {["Home", "About", "Service", "Categories", "FAQ"].map((page) => (
            <Button
              key={page}
              onClick={() => handleSelect(page)}
              sx={{
                color: selected === page ? "#4caf50" : "#6c757d",
                fontWeight: "bold",
                width: "100%",
                textAlign: "left", // Align text to the left
                "&:hover": { color: "#4caf50" },
              }}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              borderRadius: "10px",
              fontWeight: "bold",
              padding: "8px 16px",
              width: "100%",
              textAlign: "left", // Align text to the left
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
