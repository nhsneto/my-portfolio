"use client";

import { League_Spartan } from "next/font/google";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/system";
import styles from "./LanguageDropDownMenu.module.scss";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

function LanguageDropDownMenu() {
  return (
    <Dropdown>
      <MenuButton className={styles.menuButton}>
        <span className={leagueSpartan.className}>Language</span>
        <ArrowDropDownIcon />
      </MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem className={leagueSpartan.className}>English</MenuItem>
        <MenuItem className={leagueSpartan.className}>Português - Brasil</MenuItem>
      </Menu>
    </Dropdown>
  );
}

const Listbox = styled("ul")(
  () => `
  padding: 8px 0;
  background-color: white;
  color: #303030;
  box-shadow: 0px 0px 6px rgba(0,0,0, 0.32);
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  () => `
  padding: 6px;
  color: #303030;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0, 0.05);
  }
  `
);

export default LanguageDropDownMenu;
