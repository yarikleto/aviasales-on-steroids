
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql')

const Ticket = require('./Ticket')
const Currency = require('./Currency')

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    tickets: { type: new GraphQLList(Ticket) },
    currency: {
      type: new GraphQLNonNull(Currency),
      args: {
        base: {
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    }
  }
})