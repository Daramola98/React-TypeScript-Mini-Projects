import React from "react";
import { ISeasonDisplayProps } from "./interface";
import "./SeasonDisplay.css";

interface ISeasonType {
  [iconName: string]: string;
  text: string;
}

interface ISeasonConfig {
  [summer: string]: ISeasonType;
  winter: ISeasonType;
}

const seasonConfig: ISeasonConfig = {
  summer: {
    iconName: "sun",
    text: "Let's hit the beach"
  },
  winter: {
    iconName: "snowflake",
    text: "Burr it is chilly"
  }
};

const getSeason = (lat: number, month: number): string => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ latitude }: ISeasonDisplayProps) => {
  const season: string = getSeason(latitude as number, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon icon-left`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
