import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Label, Input } from "reactstrap";
import { required, email, maxLength15, minLength6 } from "../redux/constants";

const renderTextField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning },
    custom,
}) => (
    <div>
        <Label>{label}</Label>
        <div>
            <Input {...input} placeholder={placeholder} type={type} />
            {touched &&
                ((error && <span className="error">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const onSubmit = (formProps) => {
    console.log(formProps)
}

const SignUpPage = (props) => {

    const { handleSubmit } = props;

    return (
        <div className="container">
            <div className="signup-form">

                <h2>Sign Up</h2>
                <p>Have an account?</p>
                <div className="reduxcardcontainer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Field
                                placeholder="username"
                                name="username"
                                type="text"
                                component={renderTextField}
                                validate={required}
                            />
                        </div>
                        <div>
                            <Field
                                placeholder="Email"
                                name="email"
                                type="text"
                                component={renderTextField}
                                validate={[email, required]}
                            />
                        </div>
                        <div>
                            <Field
                                placeholder="Password"
                                name="password"
                                type="password"
                                component={renderTextField}
                                validate={[required, minLength6, maxLength15]}
                            />
                        </div>
                        <div className="button-container">
                            <div>
                                <Button type="submit" className="signup-button">
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "SignUpPage"
})(SignUpPage)