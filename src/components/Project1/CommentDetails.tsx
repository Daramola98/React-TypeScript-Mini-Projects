import React from "react";
import { ICommentDetailsProps } from "./interface";

const CommentDetails = ({
  authorsName,
  date,
  content,
  avatar
}: ICommentDetailsProps) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={avatar} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {authorsName}
      </a>
      <div className="metadata">
        <span className="date">{date}</span>
      </div>
      <div className="text">{content}</div>
    </div>
  </div>
);

export default CommentDetails;
