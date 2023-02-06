import { Global } from '@emotion/react';
import { Fragment } from 'react';
import { css } from '@emotion/react';

import LoginForm from "./LoginForm/LoginForm";

import "./normalize.css"

const globalStyles = css({
  'html, body, #root': {
    height: '100%',
    fontFamily: 'Verdana, serif'
  },
  'h1, h2, h3, h4, h5': {
    margin: 0
  },
  'button': {
    marginTop: 'auto',
    backgroundColor: '#2f80ed',
    borderRadius: '10px',
    borderStyle: 'none',
    boxShadow: 'none',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '15px',
    fontWeight: '500',
    height: '40px',
    letterSpacing: 'normal',
    lineHeight: '1.5',
    outline: 'none',
    padding: '0 25px',
    textAlign: 'center',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',

    '&:hover': {
      backgroundColor: '#1366d6',
      boxShadow: 'rgba(0, 0, 0, 0.05) 0 5px 30px, rgba(0, 0, 0, 0.05) 0 1px 4px',
      opacity: '1',
      transform: 'translateY(0)',
      transitionDuration: '0.35s',
    },

    '&:hover:after': {
      opacity: 0.5,
    },

    '&:active': {
      boxShadow: 'rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0, rgba(0, 0, 0, 0.1) 0 1px 4px -1px',
      transform: 'translateY(2px)',
      transitionDuration: '0.35s',
    },

    "&:active:after": {
      opacity: 1,
    },

  }
})

function App() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <LoginForm></LoginForm>
    </Fragment>
  );
}

export default App;
