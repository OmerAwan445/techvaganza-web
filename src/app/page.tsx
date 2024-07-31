import Content from "@/content/homepage";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ height:"100vh", width:"100%", bgcolor: "#ffff",
      color: "secondary.main",
     }}>
      <Typography variant="h1">{Content.title}</Typography>
      <Typography variant="body1">{Content.description}</Typography>
    </Box>
  );
}
