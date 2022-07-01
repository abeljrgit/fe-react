import "./App.scss";
import CategoryCard from "./CategoryCard";
import profileImage from "../img/image-jeremy.png";
import workIcon from "../img/icon-work.svg";
import playIcon from "../img/icon-play.svg";
import studyIcon from "../img/icon-study.svg";
import exerciseIcon from "../img/icon-exercise.svg";
import socialIcon from "../img/icon-social.svg";
import selfCareIcon from "../img/icon-self-care.svg";
import taskData from "../dev-data/data.json";
import { useState } from "react";

function App() {
  const [range, setRange] = useState("daily");

  const cardArray = taskData.map((data, i: number) => {
    let rangeType = "";

    if (range === "daily") {
      rangeType = "day";
    } else if (range === "weekly") {
      rangeType = "week";
    } else if (range === "monthly") {
      rangeType = "month";
    }

    let modifierClass = "";
    let tempIcon;
    switch (data.title) {
      case "Work":
        modifierClass = "cCard__color--work";
        tempIcon = workIcon;
        break;
      case "Play":
        modifierClass = "cCard__color--play";
        tempIcon = playIcon;
        break;
      case "Study":
        modifierClass = "cCard__color--study";
        tempIcon = studyIcon;
        break;
      case "Exercise":
        modifierClass = "cCard__color--exercise";
        tempIcon = exerciseIcon;
        break;
      case "Social":
        modifierClass = "cCard__color--social";
        tempIcon = socialIcon;
        break;
      case "Self Care":
        modifierClass = "cCard__color--self-care";
        tempIcon = selfCareIcon;
        break;
    }

    return (
      <CategoryCard
        category={data.title}
        current={data.timeframes[range as keyof typeof data.timeframes].current}
        previous={
          data.timeframes[range as keyof typeof data.timeframes].previous
        }
        className={modifierClass}
        thumb={tempIcon}
        rangeType={rangeType}
        key={i}
      />
    );
  });

  const switchTimeRange = (e: any) => {
    document
      .querySelectorAll(".t-tracker__left-range-item")
      .forEach((element) =>
        element.classList.remove("t-tracker__left-range-item--active")
      );
    e.currentTarget.classList.add("t-tracker__left-range-item--active");
    const rangeValue = e.currentTarget.innerText.toLowerCase();
    setRange(rangeValue);
  };

  return (
    <section className="App">
      <div className="App__container">
        <div className="App__wrapper">
          <div className="t-tracker">
            <div className="t-tracker__left">
              <div className="t-tracker__left-profile">
                <div className="t-tracker__left-profile-img">
                  <img src={profileImage} alt="Profile Image" />
                </div>
                <div className="t-tracker__left-profile-text">
                  <span>Report for</span>
                  <h1>
                    Jeremy
                    <br /> Robson
                  </h1>
                </div>
              </div>
              <div className="t-tracker__left-range">
                <span
                  className="t-tracker__left-range-item t-tracker__left-range-item--active"
                  onClick={switchTimeRange}
                >
                  Daily
                </span>
                <span
                  className="t-tracker__left-range-item "
                  onClick={switchTimeRange}
                >
                  Weekly
                </span>
                <span
                  className="t-tracker__left-range-item"
                  onClick={switchTimeRange}
                >
                  Monthly
                </span>
              </div>
            </div>
            <div className="t-tracker__right">{cardArray}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
