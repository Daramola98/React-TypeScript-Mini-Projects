import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext, {
  IAppContextInterface
} from "../contexts/LanguageContext";

class Button extends Component {
  // public static contextType = LanguageContext;

  public renderSubmit(language: string) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  public renderButton(color: string) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value: IAppContextInterface) => this.renderSubmit(value.language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  public render() {
    // const text = this.context === "english" ? "Submit" : "Voorlagem";
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
