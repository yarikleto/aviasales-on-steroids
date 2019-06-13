const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const Rates = require('./Rates')

module.exports = new GraphQLObjectType({
  name: 'Currency',
  fields: {
    base: { type: new GraphQLNonNull(GraphQLString) },
    rates: { type: Rates },
  }
})