import css from 'styled-jsx/css'

import { primary } from './colors'

export default css.global`
  html {
    font-size: 12px;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  button {
    font: 400 1.33rem 'Open Sans';
    padding: 0;
    cursor: pointer;
    border: none;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
  }

  button:focus {
    outline: none;
  }

  *, :before, *:after {
    box-sizing: border-box;
  }


  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${primary.light}; 
  }

  ::-webkit-scrollbar-thumb {
    background: ${primary.dark}; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
  }
`