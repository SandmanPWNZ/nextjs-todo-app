import App from './App'
import { ApolloProvider } from 'react-apollo'
import withApollo from './apollo'

import { injectGlobal } from './styled/global.style'

const Index = ({url, apollo}) => {
  return (
    <ApolloProvider client={apollo}>
      <App />
    </ApolloProvider>
  )
}

export default withApollo(Index)
