import React from 'react';
import { Field, ErrorMessage } from "formik";

import { INPUT_DATA } from './InputData';
import { findValue } from './findValue';

import {
    FormItem,
    FormLabel
} from '../../../styles/Feedback';


export const FormMap = ({ values }) => {
    return (
        <>
        {INPUT_DATA.map(({ name, component, autoFocus, autoComplete, type, title }) =>
            <FormItem key={name}>
                <FormLabel htmlFor={name}>
                    {title}
                </FormLabel>
                <Field
                    component={component}
                    name={name}
                    type={type}
                    autoFocus={autoFocus}
                    autoComplete={autoComplete}
                    value={findValue(name, values)}
                />
                <ErrorMessage component="span" name={name} />
            </FormItem>
        )}
        </>
    )
}
