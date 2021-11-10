import React, { useEffect, useRef } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "reactstrap";
import { renderTextField } from "../common/ReduxFields";
import { validateEmail, required } from "../constants/Validate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import showSuccessMessage from "../redux/helper/alerts";
import { Row, Col, Container } from "react-bootstrap";
const LoginPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  /*----------on form submit -----------*/
  const onSubmit = (formProps) => {
    dispatch(login({ user: formProps }));
  };

  const nextProps = useSelector((state) => ({
    loginData: state.users,
  }));

  const FirstRef = useRef(true);
  useEffect(() => {
    if (FirstRef.current) {
      FirstRef.current = false;
      return;
    }
    if (nextProps.loginData.isAuthenticated) {
      history.push("/");
      showSuccessMessage("you have loggedin successfully");
    }
  }, [nextProps.loginData.isAuthenticated, history]);

  const { handleSubmit } = props;

  return (
    <Container>
      <div className="d-flex flex-column justify-content-center m-auto pt-5">
        <h2>Login</h2>
        <Link to="/sign-up" className="link">
          Need an account?
        </Link>
        {nextProps.loginData.loginErrors &&
        nextProps.loginData.loginErrors.errors ? (
          <p className="autherrorlogin">invalid email or password</p>
        ) : (
          ""
        )}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={6} lg={5}>
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
                validate={[required]}
              />

              <div className="d-flex flex-row justify-content-end mt-3">
                <Button type="submit" className="button">
                  Login
                  {nextProps.loginData.loading && (
                    <Spinner color="#fff" size="sm" />
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default reduxForm({
  form: "LoginPage",
})(LoginPage);
