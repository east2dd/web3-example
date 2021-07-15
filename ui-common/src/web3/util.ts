import { InjectedConnector } from "@web3-react/injected-connector"
import { ChainID } from "./types"

export const getInjectedConnector = (chainIds: ChainID[]) => (
  new InjectedConnector({
    supportedChainIds: chainIds.map((chainId) =>
      typeof chainId === 'string' ? parseInt(chainId) : chainId
    ),
  })
)
