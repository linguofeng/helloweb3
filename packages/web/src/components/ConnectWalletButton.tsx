import Web3Modal from "web3modal";
import { ethers } from "ethers";

export const ConnectWalletButton: React.FC = () => {
  const onConnect = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
      });
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const accounts = await provider.listAccounts();
      console.log(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={onConnect}>ConnectWallet</button>;
};
