import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
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

function LightBulbIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
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
        avatar={<LightBulbIcon sx={{ mr: 1, verticalAlign: "middle" }} />}
        action={
          !isDesktop && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          )
        }
        title="Gregs Deli and Cafe"
        subheader="Restaurant"
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={styles.pillarWrapper}>
          <Box sx={styles.pillar}>
            <Typography variant="h3">Eating places</Typography>
            <Typography variant="body1">Business sub-type</Typography>
          </Box>
          <Box sx={styles.pillar}>
            <Typography variant="h3">Sandwich shop</Typography>
            <Typography variant="body1">Specialization</Typography>
          </Box>
          <Box sx={styles.pillar}>
            <Typography variant="h3">Moderate</Typography>
            <Typography variant="body1">Price level</Typography>
          </Box>
          <Box sx={styles.pillar}>
            <Rating rating={4}></Rating>
            <Typography variant="body1">Average rating</Typography>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
