import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";

// https://mui.com/material-ui/react-rating/
const RatingComponent: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h3" sx={{ marginRight: 1 }}>{rating.toFixed(1)}</Typography>
      <Rating name="read-only" size="small" value={rating} precision={0.5} readOnly />
    </Box>
  );
};
export default RatingComponent;
