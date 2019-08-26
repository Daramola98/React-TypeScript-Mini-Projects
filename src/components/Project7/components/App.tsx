import React, { Component } from "react";
import LanguageContext, {
  AppContextInterface
} from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

class App extends Component<{}, { language: string }> {
  public state = { language: "english" };
  public render() {
    const { language } = this.state;
    const contextValue: AppContextInterface = language;
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={contextValue}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }

  public onLanguageChange(language: string): void {
    this.setState({ language });
  }
}

export default App;
