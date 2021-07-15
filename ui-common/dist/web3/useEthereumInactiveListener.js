"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEthereumInactiveListener = void 0;
const core_1 = require("@web3-react/core");
const react_1 = require("react");
const util_1 = require("./util");
const useEthereumInactiveListener = (chainIds, suppress = false) => {
    const { active, error, activate } = core_1.useWeb3React();
    const connector = util_1.getInjectedConnector(chainIds);
    react_1.useEffect(() => {
        const { ethereum } = window;
        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleChainChanged = (chainId) => {
                console.log("Handling 'chainChanged' event with payload", chainId);
                activate(connector);
            };
            const handleAccountsChanged = (accounts) => {
                console.log("Handling 'accountsChanged' event with payload", accounts);
                if (accounts.length > 0) {
                    activate(connector);
                }
            };
            const handleNetworkChanged = (networkId) => {
                console.log("Handling 'networkChanged' event with payload", networkId);
                activate(connector);
            };
            ethereum.on('chainChanged', handleChainChanged);
            ethereum.on('accountsChanged', handleAccountsChanged);
            ethereum.on('networkChanged', handleNetworkChanged);
            return () => {
                if (ethereum.removeListener) {
                    ethereum.removeListener('chainChanged', handleChainChanged);
                    ethereum.removeListener('accountsChanged', handleAccountsChanged);
                    ethereum.removeListener('networkChanged', handleNetworkChanged);
                }
            };
        }
    }, [active, error, suppress, activate, connector]);
};
exports.useEthereumInactiveListener = useEthereumInactiveListener;
