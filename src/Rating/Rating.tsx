import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";

const RatingComponent: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <Box>
      <Typography variant="h3">{rating}</Typography>
      <Rating name="read-only" value={rating} readOnly></Rating>
    </Box>
  );
};
export default RatingComponent;
