import { useWeb3React } from '@web3-react/core'
import { useEffect, useRef, useState } from 'react'
import { ChainID } from './types'
import { getInjectedConnector } from './util'

export const useEagerConnect = (chainIds: ChainID[]) => {
  const ref = useRef(false)
  const { activate, active } = useWeb3React()
  const [tried, setTried] = useState(false)

  const connector =  getInjectedConnector(chainIds)

  useEffect(() => {
    
    connector.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized && ref.current) {
        activate(connector, undefined, true).catch(() => {
          if (ref.current) {
            setTried(true)
          }
        })
      } else {
        if (ref.current) {
          setTried(true)
        }
      }
    })
  }, [activate, connector]) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  useEffect(() => {
    ref.current = true
    return () => {
      ref.current = false
    }
  }, [])

  return tried
}
