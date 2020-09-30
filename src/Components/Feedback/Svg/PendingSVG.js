import React from 'react';

import {
    PendingSuccess,
    SuccessCircle,
    SuccessCheck,
    PendingError,
    ErrorCircle,
    ErrorLine
} from '../../../styles/Feedback';


export const Success = () => {
    return (
        <PendingSuccess viewBox="0 0 52 52">
            <SuccessCircle
                procent="100%"
                cx="26" 
                cy="26" 
                r="25" 
                fill="none" 
            />
            <SuccessCheck
                procent="100%"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                fill="none"  
            />
        </PendingSuccess>
    )
}


export const Error = () => {
    return (
        <PendingError viewBox="0 0 87 87" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(2.000000, 2.000000)">
                    <circle 
                        stroke="rgba(252, 191, 191, .5)" 
                        strokeWidth="4" 
                        cx="41.5" 
                        cy="41.5" 
                        r="41.5">
                    </circle>
                    <ErrorCircle 
                        stroke="#F74444" 
                        strokeWidth="4" 
                        cx="41.5" 
                        cy="41.5" 
                        r="41.5">
                    </ErrorCircle>
                    <ErrorLine 
                        d="M22.244224,22 L60.4279902,60.1837662" 
                        stroke="#F74444" 
                        strokeWidth="3" 
                        strokeLinecap="square">
                    </ErrorLine>
                    <ErrorLine 
                        two 
                        d="M60.755776,21 L23.244224,59.8443492" 
                        stroke="#F74444" 
                        strokeWidth="3" 
                        strokeLinecap="square">
                    </ErrorLine>
                </g>
            </g>
        </PendingError>
    )
}
