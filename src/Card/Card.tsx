import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

import Rating from "../Rating/Rating";
import styles from "./styles";

function RestaurantIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none">
        <g clipPath="url(#clip0_7316_1132)">
          <path
            d="M13.3333 10.9977H11V2.83105H8.66667V10.9977H6.33333V2.83105H4V10.9977C4 13.4711 5.93667 15.4777 8.375 15.6294V26.1644H11.2917V15.6294C13.73 15.4777 15.6667 13.4711 15.6667 10.9977V2.83105H13.3333V10.9977ZM19.1667 7.49772V16.8311H22.0833V26.1644H25V2.83105C21.78 2.83105 19.1667 5.44439 19.1667 7.49772Z"
            fill="#051D33"
          />
        </g>
        <defs>
          <clipPath id="clip0_7316_1132">
            <rect
              width="28"
              height="28"
              fill="white"
              transform="translate(0.5 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const useIsDesktop = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("desktop"));
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
})); // Roma, ya neznayu kak tochno eto sdelat no transition needed only when the expand button is clicked, and now transition is happening every time we change desktop to mobile and back

export default function CardComponent() {
  const isDesktop = useIsDesktop();
  const [expanded, setExpanded] = useState(isDesktop);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setExpanded(isDesktop);
  }, [isDesktop]);

  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardHeader
        avatar={<RestaurantIcon sx={{ verticalAlign: "middle" }} />}
        action={
          !isDesktop && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          )
        }
        title={<Typography variant="h3">Gregs Deli and Cafe</Typography>}
        subheader={<Typography>Restaurant</Typography>}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={styles.pillarWrapper}>
          <Grid container spacing={4} columns={4}>
            <Grid item>
              <Typography variant="h3">Eating places</Typography>
              <Typography variant="body1">Business sub-type</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">Sandwich shop</Typography>
              <Typography variant="body1">Specialization</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">Moderate</Typography>
              <Typography variant="body1">Price level</Typography>
            </Grid>
            <Grid item>
              <Rating rating={4}></Rating>
              <Typography variant="body1">Average rating</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
