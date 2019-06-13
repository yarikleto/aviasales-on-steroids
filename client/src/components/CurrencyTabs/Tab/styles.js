import css from 'styled-jsx/css'

import { common, primary } from 'theme/colors'

export default css`
  div {
    position: relative;

    width: 68px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${common.neutral};
    margin-left: -1px;

    background-color: ${common.light};
    user-select: none;

    line-height: 1.83;
    letter-spacing: 0.5px;
    color: ${primary.dark};
    font-weight: 600;

    transition: all .3s;
  }

  div:first-child {
    border-radius: 5px 0 0 5px;
    margin-left: 0;
  }

  div:last-child {
    border-radius: 0 5px 5px 0;
  }

  div:not(.active):hover {
    z-index: 1;
    cursor: pointer;
    border-color: ${primary.dark};
    background-color: ${primary.light};
  }

  .active {
    color: ${primary.contrastText};
    background-color: ${primary.dark};
    border-color: ${primary.dark};
  }
`