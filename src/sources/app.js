import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import fetch from 'isomorphic-fetch'

const link = ApolloLink.from([
  // CDN's cache get requests, since apollo client usually sends post requests we can change this
  createPersistedQueryLink({ useGETForHashedQueries: true }),
  // use proxy url. This allows very little difference between dev and production config
  createHttpLink({
    uri: '/.netlify/functions/graphql/',
    fetch,
  }),
])

// set cache restore if running on a browser
let cache
try {
  // in browser, window is defined
  cache = new InMemoryCache().restore(window.__APOLLO_STATE__ || {})
} catch (e) {
  // in server, window not defined
  cache = new InMemoryCache()
}

const AppClient = new ApolloClient({
  link: link,
  cache,
})

export default AppClient
