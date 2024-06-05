import { SxProps } from "@mui/system";

const mainContainer: SxProps = {
  minWidth: { desktop: "380px" },
  "& .MuiTypography-body1": {
    color: "secondary.light",
    marginTop: "3px",
  },
};

const pillarWrapper: SxProps = {
  display: "flex",
  flexDirection: "row",
  gap: "10%",
  marginLeft: "36px", // Roma, can we use REM instead of px?
};

const pillar: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export default {
  mainContainer,
  pillarWrapper,
  pillar,
};
