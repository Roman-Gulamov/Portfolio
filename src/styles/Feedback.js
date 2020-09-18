import styled from 'styled-components';


export const FeedbackWrapper = styled.div`
    margin: 1.2em 0em 15vh;
` 

export const FeedbackForm = styled.div`
    width: 40%;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
` 

export const FormItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.3em;

    & textarea {
        resize: none;
        height: 5.3em;
    }

    & input, & textarea {
        padding: 0.9em;
        font-size: 0.7em;
        border-radius: 2em;
        border: none;
        background-color: #E9EFF6;
        color: #000000c9;

        &:focus {
            box-shadow: 0 0 2pt 2pt #fc6c18;
        }
    }

    & span {
        position: absolute;
        top: 106%;
        left: 4%;
        color: #fc6c18;
        font-size: 0.7em;
    }
` 

export const FormLabel = styled.label`
    text-align: center;
    line-height: 1.6;
` 