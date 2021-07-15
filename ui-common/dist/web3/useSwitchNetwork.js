"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwitchNetwork = void 0;
const react_1 = require("react");
const util_1 = require("./util");
const useSwitchNetwork = () => {
    const ref = react_1.useRef(false);
    const [loading, setLoading] = react_1.useState(false);
    const [error, setError] = react_1.useState();
    const switchNetwork = react_1.useCallback(({ chainId, chainName, nativeCurrency, rpcUrl, blockExplorerUrl, }) => {
        setLoading(true);
        util_1.getInjectedConnector([chainId]).getProvider().then((provider) => {
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
                .catch((err) => {
                console.log(err);
                if (ref.current) {
                    setError(err);
                }
            })
                .then(() => {
                if (ref.current) {
                    setLoading(false);
                }
            });
        });
    }, []);
    react_1.useEffect(() => {
        ref.current = true;
        return () => {
            ref.current = false;
        };
    }, []);
    return { loading, error, switchNetwork };
};
exports.useSwitchNetwork = useSwitchNetwork;
