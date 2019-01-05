import React, { Component } from "react";

interface ISearchState {
  term: string;
}

interface ISearchProps {
  onSearchSubmit: (term: string) => void;
}

export default class SearchBar extends Component<ISearchProps, ISearchState> {
  public state = {
    term: ""
  };

  public render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form onSubmit={this.onInputSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }

  private onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.target.value });
  };

  private onInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
}
