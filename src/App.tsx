import { FC } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { useEagerConnect } from '@rbl/ui-common/dist'
import { useEthereumInactiveListener } from '@rbl/ui-common/dist'
import { ChainID } from '@rbl/ui-common/dist/web3/types'

import ConnectPage from './pages/ConnectPage'


const CHAIN_IDS: ChainID[] = []

const App: FC = () => {
  useEthereumInactiveListener([])
  useEagerConnect(CHAIN_IDS)

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          component={ConnectPage}
        />
      </Switch>
    </Router>
  )
}

export default App
