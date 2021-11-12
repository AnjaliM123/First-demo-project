import React, { useState, Fragment, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import { Button } from "reactstrap";
import ReactTable from ".././ReactTable/ReactTable";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/posts/actions";

import useModal from "../common/useModal";
import AddPostModal from "../pages/AddPostModal";
import { Redirect } from "react-router";
import { isUserAuthenticated } from "../redux/helper/authHelper";

function PostsList(props) {
  const {
    isShowing,
    isUpdate,

    toggle,
    updateToggle,
  } = useModal();
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({ title: "", body: "" });

  const nextProps = useSelector((state) => ({
    postsData: state.posts,
  }));

  const editAgentData = (rowData) => {
    setInitialValues({ title: rowData.title, body: rowData.body });
    updateToggle();
  };
  useEffect(() => {
    setData(
      nextProps.postsData.posts && nextProps.postsData.posts.length
        ? nextProps.postsData.posts.map((item) => {
            return {
              id: item ? item.id : null,

              title: item ? item.title : null,
              body: item ? item.body : null,
            };
          })
        : []
    );
  }, [nextProps.postsData]);

  console.log("data", data);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const [listView, setListView] = useState(true);
  const handleListView = () => {
    setListView(!listView);
  };
  console.log(listView);

  const onClickDelete = (id) => {
    console.log(id);
  };

  return (
    <Fragment>
      {isUserAuthenticated() ? (
        <div xs={12}>
          <>
            <div className="pt-3">
              <Button className="button-left" onClick={() => handleListView()}>
                List view
              </Button>
              <Button className="gridbutton-left">Grid view</Button>
              <Button className="float button" onClick={toggle}>
                Add post
              </Button>
            </div>
            <CardHeader color="primary" icon className="pt-5"></CardHeader>

            {isShowing && <AddPostModal open={isShowing} hide={toggle} />}

            {isUpdate && (
              <AddPostModal
                open={isUpdate}
                hide={updateToggle}
                initialValues={initialValues}
              />
            )}

            {listView && (
              <>
                <div className="d-flex flex-row justify-content-center">
                  <ReactTable
                    loading={nextProps.postsData.isLoading}
                    columns={[
                      {
                        Header: "Id",
                        accessor: "id",
                      },
                      {
                        Header: "Title",
                        accessor: "title",
                      },
                      {
                        Header: "body",
                        accessor: "body",
                      },

                      {
                        Header: "Action",
                        accessor: "actions",
                        Cell: (row) => {
                          return (
                            <div className="actions-center">
                              <AiOutlineEdit
                                aria-label="Edit"
                                onClick={(e) => {
                                  editAgentData(row.row.original);
                                }}
                              />
                              <AiOutlineDelete
                                aria-label="Delete"
                                onClick={() => {
                                  onClickDelete(row.row.original.id);
                                }}
                              />
                            </div>
                          );
                        },
                      },
                    ]}
                    data={data}
                  />
                </div>
              </>
            )}
          </>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
}

export default PostsList;
