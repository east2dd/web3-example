import { Web3Provider } from '@ethersproject/providers';
import { ChainID } from './types';
export declare const useWeb3Provider: (chainIds: ChainID[]) => {
    activate: () => void;
    isUnsupportedChainId: boolean;
    loading: boolean;
    connector?: import("@web3-react/abstract-connector").AbstractConnector | undefined;
    library?: Web3Provider | undefined;
    chainId?: number | undefined;
    account?: string | null | undefined;
    active: boolean;
    error?: Error | undefined;
    setError: (error: Error) => void;
    deactivate: () => void;
};
