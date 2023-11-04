import React from "react";
import FormError from "../FormError";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const initialValues = { name: '', tel: '', };

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Name required'),
    tel: Yup.number()
        .min(100000000, 'Too Short!')
        .required('Tel number required'),
});

export default class ContactForm extends React.Component {
    onSubmit = (values, { resetForm }) => {
        this.props.onSubmit(values);
        resetForm();
    };

    render() {
        return (
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={this.onSubmit}
                >
                    <Form autoComplete="on">
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" placeholder="Full Name" />
                            <FormError name="name" />
                        </div>
                        <div>
                            <label htmlFor="tel">Tel</label>
                            <Field name="tel" placeholder="Tel number" />
                            <FormError name="tel" />
                        </div>
                        <button type="submit">Add contact</button>
                    </Form>
                </Formik>
            </div>
        );
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};