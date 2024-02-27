"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import styles from "./ModeToggle.module.scss";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  let isLightMode = false;

  useEffect(() => {
    isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
  }, []);

  const [lightMode, setLightMode] = useState(isLightMode);

  if (lightMode) {
    return (
      <div className={styles.icon} onClick={() => setLightMode(false)}>
        <DarkMode />
      </div>
    );
  } else {
    return (
      <div className={styles.icon} onClick={() => setLightMode(true)}>
        <LightMode />
      </div>
    );
  }
}
