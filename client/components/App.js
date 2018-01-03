import React from 'react';
import { Workspace } from './Workspace';
import { Navigation } from './Navigation';
import '../styles/main.scss';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Navigation />
      <Workspace />
    </div>
  </ApolloProvider>
);

App.displayName = 'App';
