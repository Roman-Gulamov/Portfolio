import React from 'react';

import {
    FeedbackWrapper,
    FeedbackForm,
    FeedbackClose
} from '../../styles/Feedback';



export const Feedback = ({ onClick }) => {
    return (
        <FeedbackWrapper>
            <FeedbackForm>
                <FeedbackClose onClick={onClick}>Close me</FeedbackClose>
            </FeedbackForm>
        </FeedbackWrapper>
    )
}
