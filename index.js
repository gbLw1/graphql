const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors"); // Importa o pacote cors

// Define the GraphQL schema
const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`);

// Simple in-memory database
const books = [];

// Define the resolvers to handle the queries and mutations
const root = {
  books: () => books,
  book: ({ id }) => books.find((book) => book.id === id.toString()),
  addBook: ({ title, author }) => {
    const newBook = { id: (books.length + 1).toString(), title, author };
    books.push(newBook);
    return newBook;
  },
};

// Set up the Express server with the graphqlHTTP middleware
const app = express();

app.use(cors()); // Middleware para habilitar CORS

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enables the GraphiQL interface for testing
  })
);

app.listen(4000, () => {
  console.log("GraphQL server running at http://localhost:4000/graphql");
});
