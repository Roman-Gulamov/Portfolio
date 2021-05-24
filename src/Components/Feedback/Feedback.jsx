import React, { useState } from 'react';
import Axios from "axios";
import { Helmet } from 'react-helmet';
import { Formik, Form } from "formik";

import { FormMap } from './FormMap/FormMap';
import { LoginSchema } from './LoginSchema';
import { goHome } from './goHome';
import { Success, Error } from './Svg/PendingSVG';

import { Container } from '../../styles/Container';
import { Button } from '../../styles/Button';
import * as S from './feedback-styling';


export const Feedback = () => {
    const [loading, setLoading] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const clearAfter = (resetForm) => {
        resetForm({ 
            values: '' 
        })

        setTimeout(() => {
            setLoading('');
            setSuccess('');
            setError('');
        }, 2000);
    }

    const submitForm = (values, resetForm) => {
        const axios = Axios.create();

        axios.interceptors.request.use(
        (config) => {
            setLoading('loading');
            return config; 
        }); // Before send
    

        axios.interceptors.response.use(
        (response) => {
            if (response.status === 200) {
                setLoading();
                setSuccess('success');
                clearAfter(resetForm);
                goHome();
            }
        }, 
        (error) => {
            if (error) {
                setLoading();
                setError('error');
                clearAfter(resetForm)
                return Promise.reject(error);
            }
        }) // Submission result

        axios.post("https://formspree.io/xbjpredk", {...values}) // Submitting
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
            <S.FeedbackWrapper>
                <S.FeedbackForm>
                    <Formik
                        initialValues={{ username: '', email: '', message: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, {resetForm}) => submitForm(values, resetForm)}
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
                    <S.FormPending loading={loading}></S.FormPending>
                    <S.FormPending success={success}>
                        <Success />
                    </S.FormPending>
                    <S.FormPending error={error}>
                        <Error />
                    </S.FormPending>
                </S.FeedbackForm>
            </S.FeedbackWrapper>
        </Container>
        </>
    )
}