import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  public static contextType = LanguageContext;
  public render() {
    const text = this.context === "english" ? "Submit" : "Voorlagem";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
