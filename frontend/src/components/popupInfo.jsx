import { Typography } from "@mui/material";
import * as React from "react";

export default function BasicPopover({ text, coords }) {
  return (
    <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
      <div
        className="popupInfo"
        style={{
          top: `${coords.y1}px`,
          left: `${coords.x1}px`,
        }}
      >
        <Typography>{text}</Typography>
      </div>
    </div>
  );
}
