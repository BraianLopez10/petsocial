import React from 'react'
import ReactDom from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { App } from './App'
const client = new ApolloClient({
  uri: 'https://petgram-server-tan.vercel.app/graphql'
})
ReactDom.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
  , document.getElementById('app'))
