import { useCallback, useEffect, useRef, useState } from "react"
import { ChainID } from "./types"
import { getInjectedConnector } from "./util"

export type SwitchNetworkParams = {
  chainId: ChainID; // A 0x-prefixed hexadecimal chainId 
  chainName: string; // Network name. e.g. Avalanche FUJI C-Chain
  nativeCurrency: {
    name: string; // 'Avalanche`
    symbol: string; // 'AVAX'
    decimals: number; // 18
  }
  rpcUrl: string; // 'https://api.avax-test.network/ext/bc/C/rpc'
  blockExplorerUrl: string; // 'https://api.avax-test.network/ext/bc/C/rpc'
}

export const useSwitchNetwork = () => {
  const ref = useRef(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>()

  const switchNetwork = useCallback(({
    chainId,
    chainName,
    nativeCurrency,
    rpcUrl,
    blockExplorerUrl,
  }: SwitchNetworkParams) => {
    setLoading(true)
    getInjectedConnector([chainId]).getProvider().then((provider) => {
      provider
        .request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId,
              chainName,
              nativeCurrency,
              rpcUrls: [rpcUrl],
              blockExplorerUrls: [blockExplorerUrl],
            },
          ],
        })
        .catch((err: any) => {
          console.log(err)
          if (ref.current) {
            setError(err)
          }
        })
        .then(() => {
          if (ref.current) {
            setLoading(false)
          }
        })
    })
  }, [])


  useEffect(() => {
    ref.current = true
    return () => {
      ref.current = false
    }
  }, [])

  return { loading, error, switchNetwork }
}
