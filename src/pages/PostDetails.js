import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPostDetailsById } from "../redux/actions";

const PostDetails = (props) => {
  const dispatch = useDispatch();

  const { location } = props;

  const { search } = location;

  const id = search.substring(1);

  useEffect(() => {
    dispatch(getPostDetailsById(id));
  }, []);

  const post = useSelector((state) => state.posts && state.posts.posts);
  console.log("post", post);

  return (
    <>
      <p>post</p>
    </>
  );
};

export default PostDetails;
