import React, { useState } from 'react';
import Axios from "axios";
import { Helmet } from 'react-helmet';
import { Formik, Form } from "formik";
import { createBrowserHistory } from "history";

import { FormMap } from './FormMap/FormMap';
import { LoginSchema } from './LoginSchema';

import { Container } from '../../styles/Container';
import { Button } from '../../styles/Button';
import {
    FeedbackWrapper,
    FeedbackForm,
    FormPending,
    PendingSuccess,
    SuccessCircle,
    SuccessCheck, 
    ErrorCircle,
    ErrorLine
} from '../../styles/Feedback';


export const Feedback = () => {
    const [loading, setLoading] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const clearAfter = () => {
        setLoading('');
        setSuccess('');
        setError('');
    }

    const submitForm = (values) => {
        const history = createBrowserHistory();
        const axios = Axios.create();

        axios.interceptors.request.use
        ((config) => {
            setLoading('loading');
            return config; 
        }); //! Before send
    
        axios.interceptors.response.use
        ((response) => {
            if (response.status === 200) {
                setLoading();
                setSuccess('success');

                history.push('/Portfolio/#/profile');
                history.go(0);

                window.location.reload(); // for mobile phone
            }
            clearAfter();
        }, 
        (error) => {
            setLoading();
            setError('error');
            clearAfter();

            return Promise.reject(error);
        }) //! Submission result
    
        axios.post("https://formspree.io/xbjpredk", {...values}) //! Submitting
    }


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
                    <FormPending loading={loading}></FormPending>
                    <FormPending success={success}>
                        <PendingSuccess viewBox="0 0 52 52">
                            <SuccessCircle 
                                cx="26" 
                                cy="26" 
                                r="25" 
                                fill="none" 
                            />
                            <SuccessCheck 
                                fill="none" 
                                d="M14.1 27.2l7.1 7.2 16.7-16.8" 
                            />
                        </PendingSuccess>
                    </FormPending>
                    <FormPending error={error}>
                        <svg viewBox="0 0 87 87" version="1.1">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(2.000000, 2.000000)">
                                    <circle stroke="rgba(252, 191, 191, .5)" strokeWidth="4" cx="41.5" cy="41.5" r="41.5"></circle>
                                    <ErrorCircle stroke="#F74444" strokeWidth="4" cx="41.5" cy="41.5" r="41.5"></ErrorCircle>
                                    <ErrorLine d="M22.244224,22 L60.4279902,60.1837662" id="Line" stroke="#F74444" strokeWidth="3" strokeLinecap="square"></ErrorLine>
                                    <ErrorLine two d="M60.755776,21 L23.244224,59.8443492" id="Line" stroke="#F74444" strokeWidth="3" strokeLinecap="square"></ErrorLine>
                                </g>
                            </g>
                        </svg>
                    </FormPending>
                </FeedbackForm>
            </FeedbackWrapper>
        </Container>
        </>
    )
}