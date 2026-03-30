const { gql, ApolloServer } = require('apollo-server-express');
const express = require('express');


const app = express();


//schema
const typeDefs = gql`
    type User{
        id:ID
        name:String
        email:String
    }
        type Query{
            users:[User]
        }
`
const users = [
  { id: 1, name: "Megha", email: "megha@gmail.com" },
  { id: 2, name: "Bhumi", email: "Bhumi@gmail.com" }
];

const resolvers = {
  Query: {
    users: () => users
  }
}


async function serverStart(){
    const server = new ApolloServer({typeDefs,resolvers})
    await server.start();
     server.applyMiddleware({ app });

      app.listen(4000, () => {
    console.log('Server running at http://localhost:4000/graphql');
  });

}

 

serverStart();


