import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userService } from '../services/userService'
import { updateCurrUser } from '../store/actions/userAction'


export class _Sighin extends Component {
    render() {
        return (
            <div className="sighin-page">
                <h1>Sigh In</h1>

                <div>
                    <Formik
                        initialValues={{ name: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]{4,}/i.test(values.password)
                            ) {
                                errors.password = 'Invalid password {longer then 4 char}';
                            }
                            if (!values.name) {
                                errors.name = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]{1,}/i.test(values.name)
                            ) {
                                errors.name = 'Invalid name';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(async () => {
                                setSubmitting(false);

                                const user = { ...values, isAdmin: false };

                                await userService.saveUser(user)
                                await this.props.updateCurrUser(user)
                                
                                this.props.history.push('/toy')
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
                                    <Field type="name" name="password" />
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

const mapDispatchToProps = {
    updateCurrUser
}
export const Sighin = connect(null, mapDispatchToProps)(_Sighin)
