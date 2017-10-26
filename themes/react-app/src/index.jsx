import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import './index.css';
import App from './App';

const networkInterface = createNetworkInterface({
  // uri: 'http://192.168.50.74:3001/graphql'
  // uri: 'http://192.168.50.74/graphql'
  uri: 'http://ss4-react.d/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

// ReactDOM.render(<App />, document.getElementById('react-root'));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('react-root')
);


// SS React theme Entry Point
console.log('This is the entry point for react application');
console.log('Still need to define server & Hot Module reload')