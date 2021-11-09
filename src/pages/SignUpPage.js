import React, { useRef, } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "reactstrap";
import { renderTextField } from "../common/ReduxFields";
import { validateEmail, required, minLength6, maxLength15 } from "../constants/Validate";
import { Link } from "react-router-dom"
import { createUser } from "../redux/actions/AuthAction"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

import { useHistory } from "react-router-dom"
import { Spinner } from "reactstrap";

const SignUpPage = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    /*----------on form submit -----------*/
    const onSubmit = (formProps) => {

        dispatch(createUser({ user: formProps }))


    }
    const nextProps = useSelector(
        (state) => ({
            isLoading: state.users.isLoading,
            isUserCreated: state.users?.userCreated,
            isEmailTaken: state.users && state.users.users?.response?.data?.errors?.email,
            isUserNameTaken: state.users && state.users.users?.response?.data?.errors?.username
        }),
    );


    const FirstRef = useRef(true)
    useEffect(() => {

        if (FirstRef.current) {
            FirstRef.current = false
            return
        }
        if (nextProps.isUserCreated) {
            history.push("/login")
        }
    }, [nextProps.isUserCreated, history])

    const { handleSubmit } = props;

    return (

        <div className="row col-12 col-sm-7 col-md-5 col-lg-4 d-flex flex-row justify-content-center m-auto pt-5">
            <h2>Sign Up</h2>
            <Link to="/login" className="link">Have an account?</Link>

            {nextProps.isUserCreated && <p className="description">you have created your account successfully</p>}


            {nextProps.isEmailTaken && nextProps.isEmailTaken.length ? <p className="autherror">Email already taken</p> : ""}

            {nextProps.isUserNameTaken && nextProps.isUserNameTaken.length ? <p className="autherror">username already taken</p> : ""}

            <Form onSubmit={handleSubmit(onSubmit)}>
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
                        {nextProps.isLoading && <Spinner color="success" size="sm" />

                        }
                    </Button>
                </div>

            </Form>
        </div>


    )
}

export default reduxForm({
    form: "SignUpPage"
})(SignUpPage)