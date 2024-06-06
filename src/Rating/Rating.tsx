import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";

// https://mui.com/material-ui/react-rating/
const RatingComponent: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <>
      <Typography variant="h3">{rating}</Typography>
      <Rating name="read-only" value={rating} precision={0.5} readOnly></Rating>
    </>
  );
};
export default RatingComponent;
