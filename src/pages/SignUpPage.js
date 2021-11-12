import React, { useRef, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Container, Form, Row, Col, Spinner } from "reactstrap";
import { renderTextField } from "../common/ReduxFields";
import {
  validateEmail,
  required,
  minLength6,
  maxLength15,
} from "../constants/Validate";
import { Link, useHistory } from "react-router-dom";
import { createUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import showSuccessMessage from "../redux/helper/alerts";
import { isUserAuthenticated } from "../redux/helper/authHelper";
import { Redirect } from "react-router";

const SignUpPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  /*----------on form submit -----------*/
  const onSubmit = (formProps) => {
    dispatch(createUser({ user: formProps }));
  };
  /*-----------to handle response from api's-----------------*/
  const nextProps = useSelector((state) => ({
    usersData: state.users,
  }));

  const FirstRef = useRef(true);
  useEffect(() => {
    if (FirstRef.current) {
      FirstRef.current = false;
      return;
    }
    if (nextProps.usersData.userCreated) {
      history.push("/login");
      showSuccessMessage("you have created your account successfully");
    }
  }, [nextProps.usersData.userCreated, history]);

  const { handleSubmit } = props;

  return (
    <Container>
      {isUserAuthenticated() ? (
        <Redirect to="/" />
      ) : (
        <div className=" d-flex flex-column justify-content-center m-auto pt-5">
          <h2>Sign Up</h2>
          <Link to="/login" className="link">
            Have an account?
          </Link>

          {nextProps.isUserCreated && (
            <p className="description">
              you have created your account successfully
            </p>
          )}

          {nextProps.usersData.errors &&
            nextProps.usersData.errors.errors.email?.length && (
              <p className="autherror">Email already taken</p>
            )}

          {nextProps.usersData.errors &&
            nextProps.usersData.errors.errors.username?.length && (
              <p className="autherror">username already taken</p>
            )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="d-flex flex-row justify-content-center">
              <Col xs={12} md={6} lg={5}>
                <Field
                  placeholder="username"
                  name="username"
                  type="text"
                  component={renderTextField}
                  validate={[required]}
                />
                <Field
                  placeholder="Email"
                  name="email"
                  type="text"
                  component={renderTextField}
                  validate={[validateEmail, required]}
                />
                <Field
                  placeholder="Password"
                  name="password"
                  type="password"
                  component={renderTextField}
                  validate={[required, minLength6, maxLength15]}
                />

                <div className="d-flex flex-row justify-content-end mt-3">
                  <Button type="submit" className="button">
                    Sign Up
                    {nextProps.usersData.isLoading && (
                      <Spinner color="#fff" size="sm" />
                    )}
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default reduxForm({
  form: "SignUpPage",
})(SignUpPage);
