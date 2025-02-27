import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiApple, SiAndroid, SiOpenai } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Card, CardContent, Typography, Button, Grid, useMediaQuery } from "@mui/material";

const services = [
  {
    id: "ios-development",
    title: "iOS Development",
    description:
      "Creating high-performance iOS apps with AI-powered features for seamless user experiences.",
    icon: <SiApple size={40} />,
  },
  {
    id: "android-development",
    title: "Android Development",
    description:
      "Building scalable Android apps with smart AI integrations for enhanced functionality.",
    icon: <SiAndroid size={40} />,
  },
  {
    id: "chat-gpt",
    title: "Chat-GPT",
    description:
      "Integrating ChatGPT to deliver intelligent, conversational app experiences.",
    icon: <SiOpenai size={40} />,
  },
  {
    id: "open-ai",
    title: "OpenAI",
    description:
      "Enhancing apps with OpenAI-driven features for smarter interactions and automation.",
    icon: <SiOpenai size={40} />,
  },
];

const Services = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  // Scroll-triggered animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ backgroundColor: "black", py: 6, textAlign: "center", color: "white" }}>
      {/* Section Header */}
      <Box mb={4}>
        <Typography variant="h3" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
          Services
        </Typography>
        <Typography variant="h6" sx={{ color: "#cccccc" }}>
          Innovative Solutions Tailored to Your Needs
        </Typography>
      </Box>

      {/* Desktop View (Grid) */}
      {/* Desktop View (Grid) */}
{!isMobile ? (
  <Box sx={{ maxWidth: "1500px", width: "100%", margin: "0 auto" }}>
    <Grid container spacing={4} justifyContent="center">
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}>
          <Card
  className="animate-on-scroll"
  sx={{
    height: 420,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#000",
    border: "4px solid #fff",
    borderRadius: 2,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "2rem",
  }}
>
  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <Box sx={{ color: "#007bff", fontSize: 50, mb: 1 }}>{service.icon}</Box>
    <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
      {service.title}
    </Typography>
    <Typography sx={{ color: "#cccccc", mt: 1, flexGrow: 1, minHeight: "60px" }}>
      {service.description}
    </Typography>
  </CardContent>
  <Button
    component={Link}
    to={`/services/${service.id}`}
    variant="outlined"
    sx={{
      mt: "auto",
      color: "white",
      borderColor: "white",
      textTransform: "uppercase",
      "&:hover": { backgroundColor: "white", color: "black" },
    }}
  >
    Learn More →
  </Button>
</Card>

        </Grid>
      ))}
    </Grid>
  </Box>
) : (
  // Mobile View (Swiper)
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={1.2}
    centeredSlides={true}
    pagination={{ clickable: true }}
    breakpoints={{
      480: { slidesPerView: 1.2 },
      768: { slidesPerView: 1, navigation: true },
    }}
  >
    {services.map((service) => (
      <SwiperSlide key={service.id}>
        <Card
          sx={{
            maxWidth: 320,
            height: 450,
            backgroundColor: "#000",
            border: "4px solid #fff",
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <CardContent>
            <Box sx={{ color: "#007bff", fontSize: 50, mb: 1 }}>{service.icon}</Box>
            <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
              {service.title}
            </Typography>
            <Typography sx={{ color: "#cccccc", mt: 1 }}>{service.description}</Typography>
          </CardContent>
          <Button
            component={Link}
            to={`/services/${service.id}`}
            variant="outlined"
            sx={{
              mt: "auto",
              color: "white",
              borderColor: "white",
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "white", color: "black" },
            }}
          >
            Learn More →
          </Button>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>
)}

    </Box>
  );
};

export default Services;
