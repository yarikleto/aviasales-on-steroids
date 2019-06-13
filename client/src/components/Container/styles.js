import css from 'styled-jsx/css'

export default css`
  .container {
    width: 818px;
    margin: 0 auto;
  }

  @media screen and (max-width: 820px) {
    .container {
      width: 600px;
    }
  }

  @media screen and (max-width: 610px) {
    .container {
      width: 320px;
    }
  }
`