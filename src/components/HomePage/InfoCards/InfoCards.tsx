import React from "react";
import { Box, Typography } from "@mui/material";
import InfoCard from "./Card";
import homepageContent from "@/content/homepage";

const InfoCards = () => {
  const cardData = homepageContent;
  return (
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
  );
};

export default InfoCards;
