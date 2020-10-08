import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userService } from '../services/userService'

export class Login extends Component {
    render() {
        return (
            <div className="sighin-page">
                <h1>Sigh In</h1>

                <div>
                    <Formik
                        initialValues={{ name: '', password: '' }}
                        // validate={values => {
                        //     const errors = {};
                        //     if (!values.password) {
                        //         errors.password = 'Required';
                        //     } else if (
                        //         !/^[A-Z0-9._%+-]{4,}/i.test(values.password)
                        //     ) {
                        //         errors.password = 'Invalid password {longer then 4 char}';
                        //     }
                        //     if (!values.name) {
                        //         errors.name = 'Required';
                        //     } else if (
                        //         !/^[A-Z0-9._%+-]{1,}/i.test(values.name)
                        //     ) {
                        //         errors.name = 'Invalid name';
                        //     }
                        //     return errors;
                        // }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(async () => {
                                setSubmitting(false);
                                const isUserValid = await userService.login(values)

                                // const user = { ...values, isAdmin: false };

                                console.log("Login -> render -> values", values)
                                // await userService.saveUser(user)

                                // this.props.history.push('/toy')
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <div className="edit-page">
                                <Form className="formik">
                                    <p>User Name</p>
                                    <Field type="name" name="name" />
                                    <ErrorMessage name="name" component="div" />
                                    <p>Password</p>
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" />
                                    <button type="submit" disabled={isSubmitting}>Submit</button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}
