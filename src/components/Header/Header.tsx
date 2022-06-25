import { useState } from "react";
import snapLogo from "../../img/logo.svg";
import LinkDropdown from "./LinkDropdown";
import todoIcon from "../../img/icon-todo.svg";
import calenderIcon from "../../img/icon-calendar.svg";
import remindersIcon from "../../img/icon-reminders.svg";
import planningIcon from "../../img/icon-planning.svg";
import LinkSingle from "./LinkSingle";
import Burger from "./Burger";
import SideMenu from "./SideMenu";
import DarkCover from "./DarkCover";

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const linksData1 = [
    { title: "Features" },
    [
      {
        icon: todoIcon,
        linkText: "Todo List",
        linkUrl: "#",
      },
      {
        icon: calenderIcon,
        linkText: "Calendar",
        linkUrl: "#",
      },
      {
        icon: remindersIcon,
        linkText: "Reminders",
        linkUrl: "#",
      },
      {
        icon: planningIcon,
        linkText: "Planning",
        linkUrl: "#",
      },
    ],
  ];

  const linksData2 = [
    { title: "Company" },
    [
      {
        linkText: "History",
        linkUrl: "#",
      },
      {
        linkText: "Out Team",
        linkUrl: "#",
      },
      {
        linkText: "Blog",
        linkUrl: "#",
      },
    ],
  ];

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={snapLogo} alt="Snap Logo" />
      </div>
      <div className="header__links">
        <LinkDropdown linksData={linksData1} />
        <LinkDropdown linksData={linksData2} linkType={"left"} />
        <LinkSingle linkTitle="Careers" />
        <LinkSingle linkTitle="About" />
      </div>
      <div className="header__account">
        <LinkSingle linkTitle="Login" />
        <LinkSingle linkTitle="Register" className="linkSingle--bordered" />
      </div>
      <div className="header__burger-container">
        <Burger onToggleBurger={toggleSideMenu} />
      </div>
      <SideMenu
        className={`${isSideMenuOpen ? "sm--visible" : ""}`}
        sideMenuLinksData={[linksData1, linksData2]}
      />
      <DarkCover className={`${isSideMenuOpen ? "darkcover--visible" : ""}`} />
    </header>
  );
}

export default Header;
