/// <reference types="vite/client" />

declare interface Window {
  ethereum: import('ethers').providers.ExternalProvider;
}
