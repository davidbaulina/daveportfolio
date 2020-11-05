import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
require('@/css/style.scss');

createApp(App).use(router).mount('#app')

const httpLink = createHttpLink({
    uri: 'http://localhost:3020/graphql',
  })
  const cache = new InMemoryCache()
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })