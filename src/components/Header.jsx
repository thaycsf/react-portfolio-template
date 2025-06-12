import { useState } from "react";
import "../styles/Header.css";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";


export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 913)

  function reportWindowSize() {
    setIsMobile(window.innerWidth <= 913)
  }

  window.onresize = reportWindowSize;

  return (
    <>
   {
    isMobile ? 
    <MenuMobile />
    : <MenuDesktop /> 
   }
   </>
  );
}
