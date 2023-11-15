import React, { Component } from "react";
import Section from "../Section";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const initialValues = { name: '' };

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Name required'),
});

export default class PokemonForm extends Component {
    onSubmit = (values, { resetForm }) => {
        this.props.onSubmit(values);
        resetForm();
    };

    render() {
        return (
            <Section title="PokemonFormik">
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={this.onSubmit}
                    >
                        <Form autoComplete="off">
                            <Field name="name" placeholder="Pokemon Name" />
                            <button type="submit">Search</button>
                        </Form>
                    </Formik>
                </div>
            </Section>
        );
    };
};