import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

type InfoCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};
const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        padding: 5,
        backgroundColor: "secondary.dark",
      }}
    >
      <CardContent>
        <Box textAlign="center">
          <Box mb={2} sx={{ fontSize: 40 }}>
            <Icon />
          </Box>
          <Typography variant="h6" component="div" color="text.primary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
