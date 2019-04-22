import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { Users } from './Users';

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3000/graphql`,
  options: {
    reconnect: true
  }
})

// const link = split(({ query }) => {
//   const { kind, operation } = getMainDefinition(query);
//   return kind === 'OperationDefinition' && operation === 'subscription';
// },
//   wsLink,
//   httpLink
// )

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  wsLink
})

class App extends Component {
  render() {
    console.log('>> client', client);
    return (
      <ApolloProvider client={client} >
        <div className="App">
          <Users />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
