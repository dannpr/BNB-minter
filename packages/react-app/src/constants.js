// API token for nft.storage. Please sign up and replace this with your own key from https://nft.storage/manage/
export const NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIwODZiMDI0NjZEQTQwQjBFNDEyOGM0NTdCMDFDYzZDMzhhYUZhZEIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTgxNDcxMTIwMywibmFtZSI6Ik5GVG1pbnQifQ.ltA3a-yryIpCdjjCwFzKep7dFReBqtJmHMu8s2VIXfg";

// Infura project ID. If you're building a real app based on this, please replace with your own from https://infura.io/dashboard/ethereum
export const INFURA_ID = "565afb7727fd41e5bd6728c915815b73";

// Key for Etherscan.io. If you're building a real app based on this, please replace with your own from https://etherscan.io/myapikey
export const ETHERSCAN_KEY = "43H8AEZP82YJJKIQ7F6ANQEQ6HM2WZZDYH";

// BLOCKNATIVE ID FOR Notify.js:
export const BLOCKNATIVE_DAPPID = "0b58206a-f3c0-4701-a62f-73c7243e8c77";

export const DEFAULT_CONTRACT_NAME = "NFTMinter";

// eslint-disable-next-line consistent-return
export const NETWORK = chainId => {
  for (const n in NETWORKS) {
    if (NETWORKS[n].chainId === chainId) {
      return NETWORKS[n];
    }
  }
};

export const NETWORKS = {
  localhost: {
    name: "localhost",
    color: "#666666",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":8545",
  },
  /*   mainnet: {
      name: "mainnet",
      color: "#ff8b9e",
      chainId: 1,
      rpcUrl: `https://mainnet.infura.io/v3/${MEGA_ID}`,
      blockExplorer: "https://etherscan.io/",
    },
    kovan: {
      name: "kovan",
      color: "#7003DD",
      chainId: 42,
      rpcUrl: `https://kovan.infura.io/v3/${MEGA_ID}`,
      blockExplorer: "https://kovan.etherscan.io/",
      faucet: "https://gitter.im/kovan-testnet/faucet", // https://faucet.kovan.network/
    },
    rinkeby: {
      name: "rinkeby",
      color: "#e0d068",
      chainId: 4,
      rpcUrl: `https://rinkeby.infura.io/v3/${MEGA_ID}`,
      faucet: "https://faucet.rinkeby.io/",
      blockExplorer: "https://rinkeby.etherscan.io/",
    },
    ropsten: {
      name: "ropsten",
      color: "#F60D09",
      chainId: 3,
      faucet: "https://faucet.ropsten.be/",
      blockExplorer: "https://ropsten.etherscan.io/",
      rpcUrl: `https://ropsten.infura.io/v3/${MEGA_ID}`,
    },
    goerli: {
      name: "goerli",
      color: "#0975F6",
      chainId: 5,
      faucet: "https://goerli-faucet.slock.it/",
      blockExplorer: "https://goerli.etherscan.io/",
      rpcUrl: `https://goerli.infura.io/v3/${MEGA_ID}`,
    },
    xdai: {
      name: "xdai",
      color: "#48a9a6",
      chainId: 100,
      price: 1,
      gasPrice: 1000000000,
      rpcUrl: "https://dai.poa.network",
      faucet: "https://xdai-faucet.top/",
      blockExplorer: "https://blockscout.com/poa/xdai/",
    },
    matic: {
      name: "matic",
      color: "#2bbdf7",
      chainId: 137,
      price: 1,
      gasPrice: 1000000000,
      rpcUrl: "https://rpc-mainnet.maticvigil.com",
      faucet: "https://faucet.matic.network/",
      blockExplorer: "https://explorer-mainnet.maticvigil.com//",
    },
    mumbai: {
      name: "mumbai",
      color: "#92D9FA",
      chainId: 80001,
      price: 1,
      gasPrice: 1000000000,
      rpcUrl: "https://rpc-mumbai.maticvigil.com",
      faucet: "https://faucet.matic.network/",
      blockExplorer: "https://mumbai-explorer.matic.today/",
    }, */
  testnet_bnb: {
    name: "Smart Chain - Testnet",
    color: "#92D9FA",
    chainId: 97,
    price: 1,
    gasPrice: 20000000000,
    rpcUrl: `https://bsc-testnet.nodereal.io/v1/{INFURA_ID}`,
    faucet: "https://testnet.binance.org/faucet-smart/",
    blockExplorer: "https://testnet.bscscan.com",
  },
  mainnet_bnb: {
    name: "Smart Chain",
    color: "#92D9FA",
    chainId: 56,
    price: 1,
    gasPrice: 20000000000,
    rpcUrl: `https://bsc-mainnet.nodereal.io/v1/{INFURA_ID}`,
    faucet: "https://testnet.binance.org/faucet-smart/",
    blockExplorer: "https://bscscan.com",
  },
};
