import React from 'react'
import css from 'styled-jsx/css'

import { primary } from 'theme/colors'

export default css`
  .stop-item {
    display: flex;
    padding: 0 15px;
    align-items: center;
    justify-content: space-between;
  }

  .stop-item:hover {
    background-color: ${primary.light};
  }
  .stop-item:hover a {
    opacity: 1;
  }

  a {
    cursor: pointer;
    opacity: 0;
    color: ${primary.dark};
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 3.18;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    user-select: none;
    transition: all .2s;
  }

  a:hover {
    transform: scale(1.05);
  }

  a:active {
    transform: scale(1.1);
  }
`