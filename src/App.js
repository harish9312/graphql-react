import ApolloClient from 'apollo-boost';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { Users } from './Users';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
})

class App extends Component {
  render() {
    console.log('>> client', client);
    return (
      <ApolloProvider client={client} >
        <div className="App">
        <Users/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
