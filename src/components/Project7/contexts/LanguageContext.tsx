import React from "react";

export interface IAppContextInterface {
  language: string;
  onlanguagechange?: (language: string) => void;
}

const Context = React.createContext<IAppContextInterface>({
  language: "english"
});

export class LanguageStore extends React.Component<{}, { language: string }> {
  public state = {
    language: "english"
  };

  public onLanguageChange = (language: string) => {
    this.setState({ language });
  };

  public render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
