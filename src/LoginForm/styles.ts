import { css } from '@emotion/react';

export const loginFormStyles = {
    page: css`
        height: 100%;
        display: flex;
        background-color: #e5e0ff;
    `,
    formBox: css`
        margin: auto;
        padding: 30px;
        width: 500px;
        height: 430px;
        display: flex;
        flex-wrap: wrap;
    `,
    formBoxInner: css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
    `,
    inputs: css`
        display: flex;
        flex-wrap: wrap;
        flex: 1 0 100%;
        gap: 10px;
        align-content: flex-start;
    `,
    inputLabel: css`
        display: flex;
        flex-wrap: wrap;
        flex: 1 0 100%;

        input[type='email'],
        input[type='password'] {
            margin-top: 10px;
            flex: 1 0 calc(100% - 20px);
            font-size: 18px;
            padding: 10px;
            outline: none;
        }
    `,
    submitButton: css`
        margin-top: auto;
        width: 100%;
    `,
    error: css`
        color: #f00;
    `,
    textInput: css`
        border: 1px solid #333;
        border-radius: 3px;
    `,
};
