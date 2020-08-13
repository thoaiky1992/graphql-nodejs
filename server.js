var express          = require('express');
var { graphqlHTTP  } = require('express-graphql');
var { buildSchema }  = require('graphql');
var Resolver_User    = require('./model_User');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        users: [User!]
        user(id:Int) : User
    },
    type User{
        id : Int
        name : String
        email : String
    },
`);
// Root resolver
var root = {
    users: Resolver_User.getAllUser,
    user : Resolver_User.getUserById
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));