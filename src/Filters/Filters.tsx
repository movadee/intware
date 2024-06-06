import {
  Slider,
  SvgIcon,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import List from "../List/List";
import MapComponent from "../Map/Map";

const useIsDesktop = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("desktop"));
};

const OverlayDrawer: React.FC = () => {
  const isDesktop = useIsDesktop();
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const marks = [
    {
      value: 10,
      label: "-",
    },
    {
      value: 20,
      label: "",
    },
    {
      value: 30,
      label: "",
    },
    {
      value: 40,
      label: "",
    },
    {
      value: 50,
      label: "",
    },
    {
      value: 60,
      label: "+",
    },
  ];

  function FilterIcon() {
    return (
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M14.5002 17V12L21.4824 5.01833C21.7296 4.77103 21.8979 4.45602 21.9661 4.1131C22.0342 3.77018 21.9992 3.41475 21.8654 3.09173C21.7316 2.76871 21.5051 2.49259 21.2144 2.29827C20.9237 2.10396 20.582 2.00016 20.2323 2H3.76767C3.41802 2.00016 3.07626 2.10396 2.78558 2.29827C2.4949 2.49259 2.26836 2.76871 2.13457 3.09173C2.00079 3.41475 1.96577 3.77018 2.03394 4.1131C2.10211 4.45602 2.27041 4.77103 2.51757 5.01833L9.4998 12V22L14.5002 17Z"
            stroke="#007191"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </SvgIcon>
    );
  }

  function ZoomIcon() {
    return (
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            d="M13.642 2.011C13.7333 1.97313 13.8339 1.96321 13.9309 1.9825C14.0279 2.00179 14.117 2.04941 14.1869 2.11935C14.2569 2.18929 14.3045 2.27839 14.3238 2.3754C14.3431 2.47241 14.3332 2.57296 14.2953 2.66433L9.37729 14.525C9.3362 14.624 9.2644 14.7071 9.17248 14.7622C9.08056 14.8173 8.97337 14.8413 8.86673 14.8309C8.76008 14.8204 8.65962 14.776 8.58014 14.7041C8.50066 14.6322 8.44638 14.5367 8.42529 14.4317L7.33329 8.973L1.87462 7.881C1.76956 7.85991 1.67406 7.80563 1.60218 7.72615C1.5303 7.64667 1.48586 7.54621 1.47541 7.43956C1.46495 7.33292 1.48904 7.22573 1.54411 7.13381C1.59918 7.04189 1.68233 6.97009 1.78129 6.929L13.642 2.011Z"
            stroke="#051D33"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </SvgIcon>
    );
  }

  function InfoIcon() {
    return (
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1.50024C6.20101 1.50024 1.5 6.20125 1.5 12.0002C1.5 17.7992 6.20101 22.5002 12 22.5002C17.799 22.5002 22.5 17.7992 22.5 12.0002C22.5 6.20125 17.799 1.50024 12 1.50024ZM0 12.0002C0 5.37282 5.37258 0.000244141 12 0.000244141C18.6274 0.000244141 24 5.37282 24 12.0002C24 18.6276 18.6274 24.0002 12 24.0002C5.37258 24.0002 0 18.6276 0 12.0002ZM11 10.0002C11 9.44796 11.4477 9.00024 12 9.00024C12.5523 9.00024 13 9.44796 13 10.0002V17.0002C13 17.5525 12.5523 18.0002 12 18.0002C11.4477 18.0002 11 17.5525 11 17.0002V10.0002ZM12 7.00024C12.5523 7.00024 13 6.55253 13 6.00024C13 5.44796 12.5523 5.00024 12 5.00024C11.4477 5.00024 11 5.44796 11 6.00024C11 6.55253 11.4477 7.00024 12 7.00024Z"
            fill="#007191"
          />
        </svg>
      </SvgIcon>
    );
  }

  return (
    <>
      <Slider
        sx={{ maxWidth: "250px" }}
        aria-label="Temperature"
        defaultValue={60}
        step={10}
        marks={marks}
        min={10}
        max={60}
      />
      <br />
      <button onClick={handleToggleDrawer}>Filters</button>
      <div
        id="drawer-container"
        style={{
          height: "550px",
          position: "relative",
          top: 0,
          right: 0,
          bottom: 0,
          border: "1px solid #ccc",
        }}>
        <MapComponent />
        <SwipeableDrawer
          anchor={isDesktop ? "right" : "bottom"}
          open={open}
          onClose={handleToggleDrawer}
          onOpen={handleToggleDrawer}
          variant={isDesktop ? "persistent" : "temporary"}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
            container: document.getElementById("drawer-container"),
          }}
          PaperProps={{
            // This makes the drawer overlay
            style: { position: isDesktop ? "absolute" : undefined },
          }}>
          <List />
        </SwipeableDrawer>
      </div>
    </>
  );
};

export default OverlayDrawer;
