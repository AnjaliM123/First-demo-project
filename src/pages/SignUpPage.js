import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "reactstrap";
import { required, emailValidate, maxLength15, minLength6 } from "../constants/Validate"
import { renderTextField } from "../common/ReduxFileds"
import { Col } from "reactstrap"
import { Link } from "react-router-dom"


const SignUpPage = (props) => {

    const onSubmit = (formProps) => {
        console.log(formProps)
    }


    const { handleSubmit } = props;

    return (
        <div className="container">
            <div className="signup-form">

                <h2>Sign Up</h2>
                <Link to="/login" className="link">Have an account?</Link>
                <div classNameo="reduxcardcntainer">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="signup-container">
                            <Col xs={12} sm={5}>
                                <Field
                                    placeholder="username"
                                    name="username"
                                    type="text"
                                    component={renderTextField}
                                    validate={required}
                                />
                            </Col>
                            <Col xs={12} sm={5}>
                                <Field
                                    placeholder="Email"
                                    name="email"
                                    type="text"
                                    component={renderTextField}
                                    validate={[emailValidate, required]}
                                />
                            </Col>
                            <Col xs={12} sm={5}>
                                <Field
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    component={renderTextField}
                                    validate={[required, minLength6, maxLength15]}
                                />
                            </Col>
                        </div>
                        <div className="button-container">
                            <div>
                                <Button type="submit" className="signup-button">
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "SignUpPage"
})(SignUpPage)