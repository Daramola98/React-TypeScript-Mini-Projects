import React, { Component } from "react";
import { connect } from "react-redux";
import { IStoreState } from "../reducers";

interface IUserHeaderProps {
  user: any;
  userId: number;
}

class UserHeader extends Component<IUserHeaderProps, {}> {
  public render() {
    return <div>{this.renderUser()}</div>;
  }

  private renderUser() {
    if (this.props.user) {
      return <div className="header">{this.props.user.name}</div>;
    }
    return <div>Loading Author...</div>;
  }
}

const mapStateToProps = ({ user }: IStoreState, ownProps: any) => ({
  user: user.data.find(data => {
    return data.id === ownProps.userId;
  })
});

export default connect(mapStateToProps)(UserHeader);
