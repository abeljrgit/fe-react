import { useState } from "react";
import SideMenuAccordion from "./SideMenuAccordion";
import SideMenuLinkSingle from "./SideMenuLinkSingle";

function SideMenu(props: any) {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
    props.onToggleSideMenu();
  };

  window
    .matchMedia("(max-width: 768px)")
    .addEventListener("change", function (e: any) {
      if (e.matches === false) {
        setIsSideMenuVisible(false);
      }
    });

  return (
    <aside className={`sm ${props.className}`}>
      <SideMenuAccordion linksData={props.sideMenuLinksData[0]} />
      <SideMenuAccordion linksData={props.sideMenuLinksData[1]} />
      <SideMenuLinkSingle linkTitle="Careers" linkUrl="#" />
      <SideMenuLinkSingle linkTitle="About" linkUrl="#" />
      <div className="sm__accounts">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </aside>
  );
}

export default SideMenu;
