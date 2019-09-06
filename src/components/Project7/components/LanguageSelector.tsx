import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class LanguageSelector extends Component {
  public static contextType = LanguageContext;
  public render() {
    const { onLanguageChange } = this.context;
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => onLanguageChange("english")}
        />
        <i
          className="flag nl"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => onLanguageChange("dutch")}
        />
      </div>
    );
  }
}
