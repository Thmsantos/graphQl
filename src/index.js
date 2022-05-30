const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: ( ) => 'Hello Word'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Servidor rodando em ${url}`));

//https://www.youtube.com/watch?v=7RoHxSGVAdU (7:28)