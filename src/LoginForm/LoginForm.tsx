/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useReducer } from 'react';
import { jsx } from '@emotion/react';
import { initialLoginState, loginReducer } from './reducer';
import { loginFormStyles as styles } from './styles';

const LoginForm: FC = () => {
    const [state, dispatch] = useReducer(loginReducer, initialLoginState);

    const handleUpdate = (key: string, value: string) => {
        dispatch({ type: 'update', payload: value, key });
    };

    const validatePasswords = () => {
        dispatch({ type: 'validatePasswords' });
    };

    return (
        <div css={styles.page}>
            <div css={styles.formBox} data-testid="login-form">
                <form
                    css={styles.formBoxInner}
                    onSubmit={(e) => {
                        e.preventDefault();
                        validatePasswords();
                        if (state.valid) {
                            // submit form
                        }
                    }}>
                    <div css={styles.inputs}>
                        <h1>Sign Up</h1>
                        <label htmlFor="email-input" css={styles.inputLabel}>
                            Email
                            <input
                                css={styles.textInput}
                                autoFocus
                                type="email"
                                autoComplete="username"
                                id="email-input"
                                data-testid="email-input"
                                value={state.email}
                                onChange={(e) => {
                                    handleUpdate('email', e.target.value);
                                }}
                            />
                        </label>
                        <label htmlFor="password-input" css={styles.inputLabel}>
                            Password
                            <input
                                css={styles.textInput}
                                type="password"
                                autoComplete="current-password"
                                id="password-input"
                                data-testid="password-input"
                                onChange={(e) => {
                                    handleUpdate('password', e.target.value);
                                }}
                            />
                        </label>
                        <label htmlFor='confirm-pw-input' css={styles.inputLabel}>
                            Confirm Password
                            <input
                                css={styles.textInput}
                                type="password"
                                autoComplete="current-password"
                                id="confirm-pw-input"
                                data-testid="confirm-pw-input"
                                onChange={(e) => {
                                    handleUpdate('confirmPassword', e.target.value);
                                }}
                                onBlur={() => {
                                    validatePasswords();
                                }}
                            />
                            {!!state.confirmPasswordError && <div css={styles.error}>{state.confirmPasswordError}</div>}
                        </label>
                    </div>
                    <button css={styles.submitButton} type="submit" data-testid="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
