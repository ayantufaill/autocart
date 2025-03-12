import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

const categories = [
  { name: "Motorbike Extras", icon: "/Images/bike.png" },
  { name: "Vintage Cars", icon: "/Images/vintage.png" },
  { name: "Motorbikes", icon: "/Images/bikes.png" },
  { name: "Breaking & Repairables", icon: "/Images/repairing.png" },
  { name: "Cars", icon: "/Images/cars.png" },
  { name: "Cars Extras", icon: "/Images/carsExtra.png" },
  { name: "Dealerships", icon: "/Images/dealership.png" },
  { name: "Car Parts", icon: "/Images/discBrake.png" },
  { name: "Rally Cars", icon: "/Images/sportCar.png" },
  { name: "Scooters", icon: "/Images/scooty.png" },
  { name: "Trucks", icon: "/Images/truckx.png" },
  { name: "Vintage Bikes", icon: "/Images/vintageBikes.png" },
  { name: "New Cars", icon: "/Images/carx.png" },
  { name: "Coaches and Buses", icon: "/Images/coaches.png" },
  { name: "Plant Machinery", icon: "/Images/plantMachinery.png" },
  { name: "Modified Cars", icon: "/Images/transportation.png" },
];

export default function CategoryUI() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#4CAF50", mb: 4, mt: 2 }}
      >
        Why Choose from Any Category
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Categories Grid */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }}>
          <Grid container spacing={4} justifyContent="center">
            {categories.slice(0, 16).map((cat, index) => (
              <Grid item key={index} xs={4} sm={4} md={3}>
                <Box
                  textAlign="center"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Image src={cat.icon} alt={cat.name} width={40} height={40} />
                  <Typography variant="body2" color="#1F2937" sx={{ mt: 1 }}>
                    {cat.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Image
            src="/Images/carmockup.png"
            alt="Phone Mockup"
            width={350}
            height={700}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
