"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3ReactProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ethers_1 = __importDefault(require("ethers"));
const core_1 = require("@web3-react/core");
const getLibrary = (provider, pollingInterval) => {
    const library = new ethers_1.default.providers.Web3Provider(provider);
    library.pollingInterval = pollingInterval !== null && pollingInterval !== void 0 ? pollingInterval : 12000;
    return library;
};
const Web3ReactProvider = ({ pollingInterval, children }) => {
    return (jsx_runtime_1.jsx(core_1.Web3ReactProvider, Object.assign({ getLibrary: (provider) => getLibrary(provider, pollingInterval) }, { children: children }), void 0));
};
exports.Web3ReactProvider = Web3ReactProvider;
