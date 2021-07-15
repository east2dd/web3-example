import { Web3ReactProvider } from '@rbl/ui-common/dist'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider pollingInterval={12000}>
        <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
