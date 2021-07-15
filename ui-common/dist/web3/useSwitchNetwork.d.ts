import { ChainID } from "./types";
export declare type SwitchNetworkParams = {
    chainId: ChainID;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrl: string;
    blockExplorerUrl: string;
};
export declare const useSwitchNetwork: () => {
    loading: boolean;
    error: any;
    switchNetwork: ({ chainId, chainName, nativeCurrency, rpcUrl, blockExplorerUrl, }: SwitchNetworkParams) => void;
};
