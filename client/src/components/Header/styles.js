import css from 'styled-jsx/css'

import companyLogo from 'static/icons/company-logo.svg'

export default css`
  .header {
    position: relative;
    height: 160px;
  }

  .header::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: #2196F3 url(${companyLogo});
    border-radius: 50%;
    box-shadow:
      0 1px 11px 0 rgba(55, 104, 142, .3),
      0 8px 11px 0 rgba(55, 104, 142, .25);
  }
`