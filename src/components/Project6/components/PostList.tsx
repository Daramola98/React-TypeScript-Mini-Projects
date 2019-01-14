import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import { IStoreState } from "../reducers";
import UserHeader from "./UserHeader";

interface IPostListProps {
  fetchPostsAndUsers: () => any;
  posts: any[] | null;
}

class PostList extends Component<IPostListProps, {}> {
  public componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  public render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }

  private renderList() {
    if (this.props.posts) {
      const postList = this.props.posts.map(post => {
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        );
      });
      return postList;
    } else {
      return <div> No Posts Loaded</div>;
    }
  }
}

const mapStateToProps = ({ posts }: IStoreState) => ({
  posts: posts.listOfPosts
});

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
