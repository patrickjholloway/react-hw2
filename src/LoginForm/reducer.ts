import { Reducer } from 'react';

export interface FormState {
    email: string;
    password: string;
    confirmPassword: string;
    confirmPasswordError: null | string;
    valid: null | boolean;
}

type Action = { type: 'update'; payload: string; key: string } | { type: 'validatePasswords' } | { type: 'reset' };

export const initialLoginState: FormState = {
    email: '',
    password: '',
    confirmPassword: '',
    confirmPasswordError: null,
    valid: null,
};

export const loginReducer: Reducer<FormState, any> = (state: FormState, action: Action) => {
    switch (action.type) {
        case 'reset': {
            return { ...initialLoginState };
        }
        case 'validatePasswords': {
            const valid = state.confirmPassword !== state.password;
            return {
                ...state,
                valid,
                confirmPasswordError: valid ? '* Passwords do not match' : null,
            };
        }
        case 'update': {
            return { ...state, [action.key]: action.payload };
        }
    }
};
