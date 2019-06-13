const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Rates',
  fields: {
    EUR: { type: new GraphQLNonNull(GraphQLFloat) },
    RUB: { type: new GraphQLNonNull(GraphQLFloat) },
    USD: { type: new GraphQLNonNull(GraphQLFloat) }
  },
})