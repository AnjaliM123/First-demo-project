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
import { isUserAuthenticated } from "../redux/helper/authHelper";
import { useState } from "react";
const LoginPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const { handleSubmit, reset } = props;
  /*----------on form submit -----------*/
  const onSubmit = (formProps) => {
    dispatch(login({ user: formProps }));
  reset()

  };

  const nextProps = useSelector((state) => ({
    loading: state.users.loading,
    isAuthenticated: state.users?.isAuthenticated,
    isUserAuthenticated: state.users && state.users.loginData?.response?.data,
  }));


  useEffect(() => {
   
  });
  

  const FirstRef = useRef(true);
  useEffect(() => {
    if (FirstRef.current) {
      FirstRef.current = false;
      return;
    }
    if (nextProps.isAuthenticated) {
      history.push("/");
      window.location.reload(false);
      showSuccessMessage("you have loggedin successfully");
     
    }
  
  }, [nextProps.isAuthenticated, history]);



  return (
    <div className="row col-12 col-sm-7 col-md-5 col-lg-4 d-flex flex-row justify-content-center m-auto pt-5">
      <h2>Login</h2>
      <Link to="/sign-up" className="link">
        Need an account?
      </Link>

      {nextProps.isUserAuthenticated && nextProps.isUserAuthenticated ? (
        <p className="autherrorlogin">invalid email or password</p>
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
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
            {nextProps.loading && <Spinner color="#fff" size="sm" />}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: "LoginPage",
})(LoginPage);
