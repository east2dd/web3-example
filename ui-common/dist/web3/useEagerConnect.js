"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEagerConnect = void 0;
const core_1 = require("@web3-react/core");
const react_1 = require("react");
const util_1 = require("./util");
const useEagerConnect = (chainIds) => {
    const ref = react_1.useRef(false);
    const { activate, active } = core_1.useWeb3React();
    const [tried, setTried] = react_1.useState(false);
    const connector = util_1.getInjectedConnector(chainIds);
    react_1.useEffect(() => {
        connector.isAuthorized().then((isAuthorized) => {
            if (isAuthorized && ref.current) {
                activate(connector, undefined, true).catch(() => {
                    if (ref.current) {
                        setTried(true);
                    }
                });
            }
            else {
                if (ref.current) {
                    setTried(true);
                }
            }
        });
    }, [activate, connector]); // intentionally only running on mount (make sure it's only mounted once :))
    // if the connection worked, wait until we get confirmation of that to flip the flag
    react_1.useEffect(() => {
        if (!tried && active) {
            setTried(true);
        }
    }, [tried, active]);
    react_1.useEffect(() => {
        ref.current = true;
        return () => {
            ref.current = false;
        };
    }, []);
    return tried;
};
exports.useEagerConnect = useEagerConnect;
