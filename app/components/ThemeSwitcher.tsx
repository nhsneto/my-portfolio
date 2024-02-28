"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

export default function ThemeSwitcher() {
  let isLightMode = false;

  useEffect(() => {
    isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
  }, []);

  const [lightMode, setLightMode] = useState(isLightMode);

  if (lightMode) {
    return (
      <div
        className={styles.icon}
        onClick={() => setLightMode(false)}
        title="Dark Mode"
      >
        <DarkMode />
      </div>
    );
  } else {
    return (
      <div
        className={styles.icon}
        onClick={() => setLightMode(true)}
        title="Light Mode"
      >
        <LightMode />
      </div>
    );
  }
}
