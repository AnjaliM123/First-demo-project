import React, { useState, Fragment, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FcViewDetails } from "react-icons/fc";
import Card from "../common/Card";

import { Button, Row, CardHeader, Col } from "reactstrap";
import ReactTable from ".././ReactTable/ReactTable";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/posts/actions";

import useModal from "../common/useModal";
import AddPostModal from "../pages/AddPostModal";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
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
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);
  const [initialValues, setInitialValues] = useState({ title: "", body: "" });

  const nextProps = useSelector((state) => ({
    postsData: state.posts,
  }));

  const editPostData = (rowData) => {
    setInitialValues({ title: rowData.title, body: rowData.body });
    updateToggle();
  };
  useEffect(() => {
    setData(
      nextProps.postsData.posts && nextProps.postsData.posts.length
        ? nextProps.postsData.posts.map((item) => {
            return {
              id: item && item.id,

              title: item && item.title,
              body: item && item.body,
            };
          })
        : []
    );
  }, [nextProps.postsData]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleListView = () => {
    setListView(!listView);
    setGridView(!gridView);
  };
  console.log(listView);

  const handleGridView = () => {
    setGridView(!gridView);
    setListView(!listView);
  };

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
              <Button
                className="gridbutton-left"
                onClick={() => handleGridView()}
              >
                Grid view
              </Button>
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
                                className="icon"
                                onClick={(e) => {
                                  editPostData(row.row.original);
                                }}
                              />
                              <AiOutlineDelete
                                aria-label="Delete"
                                className="icon"
                                onClick={() => {
                                  onClickDelete(row.row.original.id);
                                }}
                              />
                              <Link to={`/post-details?${row.row.original.id}`}>
                                <FcViewDetails aria-label="View" />
                              </Link>
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
            {gridView && (
              <>
                <>
                  <Row>
                    {data &&
                      data.map((eachPost) => {
                        return (
                          <Col md={6}>
                            <Card
                              eachPost={eachPost}
                              editPostData={editPostData}
                            />
                          </Col>
                        );
                      })}
                  </Row>
                </>
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
