import css from 'styled-jsx/css'

export default css`
  .ticket-list {
    margin: 0;
    padding-left: 0;
    width: calc(100% - 230px - 20px);
  }
  .ticket-list :global(li) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 610px) {
    .ticket-list {
      width: 100%;
    }
  }
`