import React from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export default class ContactForm extends React.Component {
    onSubmit = (values, { resetForm }) => {
        this.props.onSubmit(values);
        resetForm();
    };

    render() {
        return (
            <Formik
                initialValues={{ name: '', tel: '' }}
                onSubmit={this.onSubmit}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        name="name"
                        required
                    />

                    <label htmlFor="tel">Number</label>
                    <Field
                        type="tel"
                        name="tel"
                        required
                    />

                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        );
    };

};

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};