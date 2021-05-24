import React from 'react';
import { Field, ErrorMessage } from "formik";

import { INPUT_DATA } from './InputData';
import { findValue } from './findValue';

import * as S from '../feedback-styling';


export const FormMap = ({ values }) => {
    return (
        <>
        {INPUT_DATA.map(({ name, component, autoFocus, autoComplete, type, title }) =>
            <S.FormItem key={name}>
                <S.FormLabel htmlFor={name}>
                    {title}
                </S.FormLabel>
                <Field
                    component={component}
                    name={name}
                    type={type}
                    autoFocus={autoFocus}
                    autoComplete={autoComplete}
                    value={findValue(name, values)}
                />
                <ErrorMessage component="span" name={name} />
            </S.FormItem>
        )}
        </>
    )
}
