"use client";

import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useState } from "react";

const ServiceCard = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 350,
        maxHeight: 500,
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "#1c1c1e",
        transition: "transform 0.4s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{
            filter: hover ? "blur(8px) brightness(70%)" : "brightness(90%)",
            transition: "filter 0.3s ease-in-out, transform 0.3s ease-in-out",
            transform: hover ? "scale(1.1)" : "scale(1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: hover
              ? "transparent"
              : "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))",
            transition: "background 0.3s ease-in-out",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            color: "#ffffff",
            p: 3,
            zIndex: 2,
            transition: "opacity 0.3s ease-in-out",
            opacity: hover ? 0.9 : 1,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "#ffffff",
              mb: 1,
              fontWeight: "bold",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              mt: 2,
              opacity: hover ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              textAlign: "center",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ServiceCard;
