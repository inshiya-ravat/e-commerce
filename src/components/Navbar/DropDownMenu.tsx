import Menu from "@mui/material/Menu";
import type { ReactNode } from "react";

interface DropDownmenuProp {
  anchorEl: HTMLElement | null;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  children: ReactNode;
}
const DropDownMenu = ({
  children,
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
}: DropDownmenuProp) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {children}
    </Menu>
  );
};

export default DropDownMenu;
