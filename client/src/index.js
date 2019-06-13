import React from 'react'
import { render } from 'react-dom'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

import MainPage from 'pages/Main'
import rootStyles from 'theme/rootStyles'

const client = new GraphQLClient({
  url: GRAPHQL_API
})

if (!PRODUCTION) module?.hot?.accept()

render(
  <ClientContext.Provider value={client}>
    <MainPage />

    <style jsx global>{rootStyles}</style>
  </ClientContext.Provider>,
  document.getElementById('root')
)