import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Card(props) {
  const { eachPost, editPostData } = props;

  return (
    <div className=" cardcontainer griditem mb-3">
      <div>
        <div>
          <p className="eachItem"> id: {eachPost.id}</p>
          <p className="eachItem">title: {eachPost.title}</p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-end">
        <div>
          <AiOutlineEdit onClick={() => editPostData(eachPost)} />
          <AiOutlineDelete />

          <Link to={`/post-details?${eachPost.id}`}>
            <FcViewDetails aria-label="View" />
          </Link>
        </div>
      </div>
    </div>
  );
}
