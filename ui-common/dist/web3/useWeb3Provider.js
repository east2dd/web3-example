"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWeb3Provider = void 0;
const core_1 = require("@web3-react/core");
const react_1 = require("react");
const util_1 = require("./util");
const useWeb3Provider = (chainIds) => {
    const ref = react_1.useRef(false);
    const _a = core_1.useWeb3React(), { activate } = _a, restParams = __rest(_a, ["activate"]);
    const [loading, setLoading] = react_1.useState(false);
    const connector = util_1.getInjectedConnector(chainIds);
    const connect = react_1.useCallback(() => {
        setLoading(true);
        activate(connector)
            .then(() => { })
            .catch(() => { })
            .then(() => {
            if (ref.current) {
                setLoading(false);
            }
        });
    }, [activate, connector]);
    const isUnsupportedChainId = react_1.useMemo(() => restParams.error instanceof core_1.UnsupportedChainIdError, [restParams.error]);
    react_1.useEffect(() => {
        ref.current = true;
        return () => {
            ref.current = false;
        };
    }, []);
    return Object.assign(Object.assign({}, restParams), { activate: connect, isUnsupportedChainId,
        loading });
};
exports.useWeb3Provider = useWeb3Provider;
