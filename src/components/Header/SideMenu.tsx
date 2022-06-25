import { useState } from "react";
import SideMenuAccordion from "./SideMenuAccordion";
import SideMenuLinkSingle from "./SideMenuLinkSingle";

function SideMenu(props: any) {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
    props.onToggleSideMenu();
  };

  return (
    <aside className={`sm ${props.className}`}>
      <SideMenuAccordion linksData={props.sideMenuLinksData[0]} />
      <SideMenuAccordion linksData={props.sideMenuLinksData[1]} />
      <SideMenuLinkSingle linkTitle="Careers" linkUrl="#" />
      <SideMenuLinkSingle linkTitle="About" linkUrl="#" />
    </aside>
  );
}

export default SideMenu;
