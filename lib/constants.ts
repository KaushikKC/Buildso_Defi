import type { Address } from "wagmi";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const exchangeProxy = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";

/* type Token = {
  address: Address;
}; */

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const POLYGON_TOKENS: Token[] = [
  {
    chainId: 11155111,
    name: "link",
    symbol: "LINK",
    decimals: 18,
    address: "0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5",
    logoURI: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=03",
  },
  {
    chainId: 11155111,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  {
    chainId: 11155111,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  {
    chainId: 11155111,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  link: {
    chainId: 11155111,
    name: "link",
    symbol: "LINK",
    decimals: 18,
    address: "0xf8fb3713d459d7c1018bd0a49d19b4c44290ebe5",
    logoURI: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=032",
  },
  dai: {
    chainId: 11155111,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0xff34b3d4aee8ddcd6f9afffb6fe49bd371b8a357",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  usdc: {
    chainId: 11155111,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  usdt: {
    chainId: 11155111,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0xf8fb3713d459d7c1018bd0a49d19b4c44290ebe5": {
    chainId: 11155111,
    name: "link",
    symbol: "LINK",
    decimals: 18,
    address: "0xf8fb3713d459d7c1018bd0a49d19b4c44290ebe5",
    logoURI: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=032",
  },
  "0xff34b3d4aee8ddcd6f9afffb6fe49bd371b8a357": {
    chainId: 11155111,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0xff34b3d4aee8ddcd6f9afffb6fe49bd371b8a357",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8": {
    chainId: 11155111,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  "0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0": {
    chainId: 11155111,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
};
