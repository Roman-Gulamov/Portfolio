import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form } from "formik";

import { FormMap } from './FormMap/FormMap';
import { submitForm } from './submitForm';
import { LoginSchema } from './LoginSchema';

import { Container } from '../../styles/Container';
import { Button } from '../../styles/Button';
import {
    FeedbackWrapper,
    FeedbackForm
} from '../../styles/Feedback';


export const Feedback = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | Contact</title>
            <meta name="description" content="Contact" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Portfolio/#/contact" />
        </Helmet>
        <Container>
            <FeedbackWrapper>
                <FeedbackForm>
                    <Formik
                        initialValues={{ username: '', email: '', message: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => submitForm(values)} 
                    >
                    {({ isSubmitting, values }) => (
                        <Form action="https://formspree.io/xbjpredk" method="POST">
                            <FormMap values={values} />
                            <Button 
                                feedback 
                                type='submit' 
                                disabled={isSubmitting}
                            >Send
                            </Button>
                        </Form>
                    )}
                    </Formik>
                </FeedbackForm>
            </FeedbackWrapper>
        </Container>
        </>
    )
}
