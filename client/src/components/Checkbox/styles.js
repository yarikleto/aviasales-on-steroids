import css from 'styled-jsx/css'

import checkIcon from 'static/icons/check.svg'
import { common, primary } from 'theme/colors'

export default css`
  label {
    width: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;

    font-size: 1.1rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.69;
    letter-spacing: normal;
    color: ${common.dark};
    transition: all .2s;
  }

  input[type='checkbox'] {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .checkbox {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: solid 1px ${common.neutral};
    background-color: ${common.light};
    margin-right: 10px;
  }

  input[type='checkbox']:hover ~ .checkbox {
    border-color: ${primary.dark};
  }

  input[type='checkbox']:checked ~ .checkbox {
    border-color: ${primary.dark};
    background: ${primary.light} url(${checkIcon}) center no-repeat;
  }
`