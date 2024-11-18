# GraphQL

Understanding GraphQL and Building a Basic Implementation in Node.js

## What is GraphQL?

GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It allows clients to request only the data they need and nothing more, making it possible to get all the data you need in a single request.

## Implementing GraphQL in Node.js

To implement GraphQL in Node.js, we need to install the following packages:

- `express`: A web application framework for Node.js
- `express-graphql`: A library that allows us to use GraphQL with Express
- `graphql`: The JavaScript reference implementation for GraphQL

## Running the GraphQL Server

To run the GraphQL server, use the following command:

```bash
node index.js
```

## Querying the GraphQL Server

To fetch data with GraphQL, you need to send a POST request to the GraphQL endpoint with a query.

### Fetching All Books

To fetch all books, you can send the following query:

```graphql
query {
  books {
    id
    title
    author
  }
}
```

### Fetching a Single Book

You can also pass arguments to the query to filter the results. For example:

```graphql
query {
  book(id: 1) {
    id
    title
    author
  }
}
```

### Adding a New Book

To add a new book, you need to send a mutation request to the GraphQL endpoint with the book details. For example:

```graphql
mutation {
  addBook(title: "1984", author: "George Orwell") {
    id
    title
    author
  }
}
```

### Fetching in JavaScript

You can also fetch data from the GraphQL server using JavaScript. Here's an example:

```javascript
fetch("http://localhost:4000/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "{ books { id title author } }" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```
