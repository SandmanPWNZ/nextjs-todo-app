// import App from './App/Home'
import App from './App';
// import { ApolloProvider } from 'react-apollo'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './apollo'

import { injectGlobal } from './styled/global.style'

const Index = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default Index
