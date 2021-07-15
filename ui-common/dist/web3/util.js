"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInjectedConnector = void 0;
const injected_connector_1 = require("@web3-react/injected-connector");
const getInjectedConnector = (chainIds) => (new injected_connector_1.InjectedConnector({
    supportedChainIds: chainIds.map((chainId) => typeof chainId === 'string' ? parseInt(chainId) : chainId),
}));
exports.getInjectedConnector = getInjectedConnector;
