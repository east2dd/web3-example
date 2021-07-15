import { FC } from 'react'
import { useWeb3Provider } from '@rbl/ui-common/dist'
import { CHAIN_IDS } from '../constants'

const ConnectPage: FC = () => {
  const { activate, isUnsupportedChainId } = useWeb3Provider(CHAIN_IDS)

  return (
    <div>
      <p>
        Please connect your Metamask to start
      </p>
      <button onClick={activate}>Connect</button>
    </div>
  )
}

export default ConnectPage
