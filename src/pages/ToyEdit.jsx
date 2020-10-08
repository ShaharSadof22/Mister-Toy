import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux'

import { toyService } from '../services/toyService'
import { cloudinaryService } from '../services/cloudinaryService'
import { loadToy } from '../store/actions/toyAction'

export class _ToyEdit extends React.Component {

  state = {
    urlImg:''
  }
  onAddImg = async (ev) => {
    const urlImg = await cloudinaryService.uploadImg(ev)
    this.setState({urlImg})
  }

  render() {
    return (
      <div>
        <div className="add-img-container animate__animated animate__bounceInLeft">
          <label> Add image to your toy </label>
          <input onChange={this.onAddImg} type="file" />
        </div>
        
        <Formik
          initialValues={{ CreatedAt: '', name: '', price: '' }}
          validate={values => {
            const errors = {};
            if (!values.CreatedAt) {
              errors.CreatedAt = 'Required';
            } else if (
              !/^[0-9]{4}$/i.test(values.CreatedAt)
            ) {
              errors.CreatedAt = 'Invalid Time {Ex: 1992}';
            }
            if (!values.price) {
              errors.price = 'Required';
            } else if (
              !/^[0-9]{1,4}$/i.test(values.price)
            ) {
              errors.price = 'Invalid Price {Ex: 1-9,999}';
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

              const toy = {...values, imgURL: this.state.urlImg}

              console.log("render -> toy", toy)
              await toyService.save(toy)

              this.props.loadToy()

              this.props.history.push('/toy')
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <div className="edit-page">

              <Form className="formik animate__animated animate__bounceInRight">
                <p>Name</p>
                <Field type="name" name="name" />
                <ErrorMessage name="name" component="div" />
                <p>Price</p>
                <Field type="name" name="price" />
                <ErrorMessage name="price" component="div" />
                <p>CreatedAt</p>
                <Field type="name" name="CreatedAt" />
                <ErrorMessage name="CreatedAt" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
          </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    editToyId: state.toyReducer.editToyId
  }
}
const mapDispatchToProps = {
  loadToy,
}

export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit)
