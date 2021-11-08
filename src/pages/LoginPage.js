import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "reactstrap";
import { renderTextField } from "../common/ReduxFields";
import { validateEmail, required } from "../constants/Validate";
import { Link } from "react-router-dom"


const LoginPage = (props) => {
    /*----------on form submit -----------*/
    const onSubmit = (formProps) => {
        console.log(formProps)
    }


    const { handleSubmit } = props;

    return (

        <div className="row col-12 col-sm-7 col-md-5 col-lg-4 d-flex flex-row justify-content-center m-auto pt-5">
            <h2>Login</h2>
            <Link to="/sign-up" className="link">Need an account?</Link>
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
                    </Button>
                </div>

            </Form>
        </div>


    )
}

export default reduxForm({
    form: "LoginPage"
})(LoginPage)