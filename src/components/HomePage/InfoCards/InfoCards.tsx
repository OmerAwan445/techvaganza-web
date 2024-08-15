import React from "react";
import { Box, Container, Typography } from "@mui/material";
import InfoCard from "./Card";
import homepageContent from "@/content/homepage";

const InfoCards = () => {
  const cardData = homepageContent;
  return (
    <Container
      maxWidth="xl"
      sx={{ my: 10 }}
      >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
      <Typography variant="h2">{cardData.infoCardsTitle} </Typography>
      <Typography variant="h5">{cardData.infoCardsDescription} </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {cardData.infoCards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </Box>
        </Box>
    </Container>
  );
};

export default InfoCards;
