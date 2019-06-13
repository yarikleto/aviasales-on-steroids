require('dotenv').config()

const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

const schema = require('src/graphql/schema')
const resolver = require('src/graphql/resolver')

const { NODE_ENV, HOST, PORT } = process.env
const app = express()

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: NODE_ENV === 'development'
}))
 
app.listen(PORT, () => console.log(`Server is started on the ${HOST}:${PORT}`))