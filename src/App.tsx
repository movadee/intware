import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";

import Card from "./Card/Card";

export default function App() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Card />
      </Box>
    </Container>
  );
}
