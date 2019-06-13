const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Ticket',
  fields: {
    origin: {
      type: new GraphQLNonNull(GraphQLString)
    },
    origin_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    destination: {
      type: new GraphQLNonNull(GraphQLString)
    },
    destination_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    departure_time: {
      type: new GraphQLNonNull(GraphQLString)
    },
    departure_date: {
      type: new GraphQLNonNull(GraphQLString)
    },
    arrival_date: {
      type: new GraphQLNonNull(GraphQLString)
    },
    arrival_time: {
      type: new GraphQLNonNull(GraphQLString)
    },
    carrier: {
      type: new GraphQLNonNull(GraphQLString)
    },
    stops: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  }
})