import React from "react";
import userIcon from "../images/user.png";

const commentsData = [
  {
    name: "nikhil",
    text: "lorem ipsum ♡",
    replies: [
      {
        name: "dewil",
        text: "lorem ipsum ♡",
        replies: [
          {
            name: "nikhil",
            text: "lorem ipsum ♡",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "yash",
    text: "lorem ipsum lit",
    replies: [
      {
        name: "pk",
        text: "lorem ipsum lit",
        replies: [
          {
            name: "abhi",
            text: "lorem ipsum lit",
            replies: [],
          },
          {
            name: "suraj",
            text: "lorem ipsum lit",
            replies: [],
          },
        ],
      },
      {
        name: "abhi",
        text: "lorem ipsum lit",
        replies: [],
      },
      {
        name: "suraj",
        text: "lorem ipsum lit",
        replies: [],
      },
    ],
  },
  {
    name: "manish",
    text: "lorem ipsum lit",
    replies: [],
  },
  {
    name: "karan ",
    text: "lorem ipsum lit",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md bg-gray-50 p-2 my-1 rounded-lg">
      <img className="w-7 h-7" src={userIcon} />

      <div className="px-3 ">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-3 border border-l-black ml-7">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className=" m-5 p-2">
      <h1 className=" text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
