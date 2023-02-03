import React, { FC } from 'react';
import { Button, Title, Stack, TextInput, Paper, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => ({
    page: { height: '100%', display: 'flex', backgroundColor: theme.colors.indigo[0] },
    formBox: { margin: 'auto', padding: '30px', width: '500px', height: '430px', display: 'flex', flexWrap: 'wrap' },
    formBoxInner: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    inputs: { flex: 1 },
    submitButton: { marginTop: 'auto' },
}));

const LoginForm: FC = () => {
    const { classes } = useStyles();
    const form = useForm({
        validateInputOnBlur: true,
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: {
            confirmPassword: (value, values) => {
                return value !== values.password ? '* Passwords do not match' : null;
            },
        },
    });

    return (
        <div className={classes.page}>
            <Paper withBorder className={classes.formBox} data-testid="login-form">
                <form className={classes.formBoxInner}>
                    <Stack className={classes.inputs}>
                        <Title>Sign Up</Title>
                        <TextInput
                            label="Email"
                            autoFocus
                            autoComplete="username"
                            required
                            data-testid="email-input"
                        />
                        <TextInput
                            label="Password"
                            required
                            type="password"
                            autoComplete="current-password"
                            data-testid="password-input"
                            {...form.getInputProps('password')}
                        />
                        <TextInput
                            label="Confirm Password"
                            required
                            type="password"
                            autoComplete="current-password"
                            data-testid="confirm-pw-input"
                            {...form.getInputProps('confirmPassword')}
                        />
                    </Stack>
                    <Button
                        className={classes.submitButton}
                        size="lg"
                        fullWidth
                        type="button"
                        disabled={!form.isValid}
                        data-testid="submit-btn">
                        Submit
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default LoginForm;
