import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import fetch from 'node-fetch'
import withApollo from 'next-with-apollo'

export const graphqlURI = 'https://eu1.prisma.sh/roman-42dfa5/demo/dev'

// export default withApollo(
//   ({ initialState }) =>
//     new ApolloClient({
//       link: ApolloLink.from([
//         onError(({ graphQLErrors, networkError }) => {
//           if (graphQLErrors)
//             graphQLErrors.forEach(({ message, locations, path }) =>
//               console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
//             )
//           if (networkError) console.log(`[Network error]: ${networkError}`)
//         }),
//         new HttpLink({
//           uri: graphqlURI,
//           credentials: 'same-origin',
//           fetch
//         })
//       ]),
//       cache: new InMemoryCache().restore(initialState || {})
//     })
// )

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: graphqlURI,
      credentials: 'same-origin',
      fetch
    })
  ]),
  cache: new InMemoryCache()
})
