import "../styles/Header.css";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { useResponsive } from "../hooks/useResponsive";

export default function Header() {
  const { isMobile } = useResponsive();

  return (
    <>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
    </>
  );
}
