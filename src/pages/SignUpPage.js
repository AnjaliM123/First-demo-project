import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "reactstrap";
import { required, validateEmail, maxLength15, minLength6 } from "../constants/Validate"
import { renderTextField } from "../common/ReduxFields"
import { Link } from "react-router-dom"


const SignUpPage = (props) => {

    const onSubmit = (formProps) => {
        console.log(formProps)
    }


    const { handleSubmit } = props;

    return (

        <div className="row col-12 col-sm-7 col-md-5 col-lg-4 d-flex flex-row justify-content-center m-auto pt-5">
            <h2>Sign Up</h2>
            <Link to="/login" className="link">Have an account?</Link>

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
                    </Button>
                </div>

            </Form>
        </div>


    )
}

export default reduxForm({
    form: "SignUpPage"
})(SignUpPage)