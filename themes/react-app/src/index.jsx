import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import './index.css';
import App from './App';


let NetworkURI = '';

/**
 * global env constants set in webpack.conf.js
 */
if(PRODUCTION) {
  NetworkURI = GRAPHQLURIPROD
} else if(BUILD_FROM_DOT_ENV)  {
  NetworkURI = ENV_GRAPH_QL_BASE_URL
} else {
  NetworkURI = GRAPHQLURIDEV
}

// ToDo: Look into this
// If for some reason they do not use one of the build scripts in package.json, we can perhaps give them a chance
// How much of a performance hit is this? because it would be nice if the url being viewed could determine,
// the graphql endpoint instead of running npm run build:env
if(NetworkURI.length === 0)
{
  let getUrl = window.location;
  let baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  NetworkURI = baseUrl + 'graphql';
  console.log('Not set by environment =(');
  console.log(NetworkURI);
}

/**
 * ToDo: When we build our project we need to hit and query our graphQL endpoint.
 * We need this for fragment and union matching as it needs to know our schema.
 * So this little function will need to somehow hit our endpoint and create A JSON File for our bundle to use
 */

/**
 * configure network interface for apollo client
 * ToDo: get fragment and union matching to work
 */
const networkInterface = createNetworkInterface({
  //uri: 'http://my-app.local/graphql'
  uri: NetworkURI
});

/**
 * configure apollo client to use for ApolloProvider component
 * @type {ApolloClient | ApolloClient<any>}
 */
const client = new ApolloClient({
  networkInterface: networkInterface
});

/**
 * Render our app at given element
 * currently found in ReactPage.ss
 */
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('react-root')
);
