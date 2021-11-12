import React from "react";
import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function Card(props) {
  const { data, editAgentData } = props;

  return (
    <Container>
      <Row sm={6} md={3} lg={3}>
        {data &&
          data.map((eachPost) => {
            return (
              <>
                <div className="d-flex flex-row cardcontainer griditem">
                  <div>
                    <Col>id: {eachPost.id}</Col>
                    <Col>title: {eachPost.title}</Col>
                  </div>
                  <div className="d-flex flex-column justify-content-end">
                    <div className="d-flex flex-row justify-content-end">
                      <AiOutlineEdit onClick={editAgentData} />
                      <AiOutlineDelete />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Row>
    </Container>
  );
}
