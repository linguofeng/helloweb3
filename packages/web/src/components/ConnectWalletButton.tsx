import { ethers } from 'ethers';

export const ConnectWalletButton: React.FC = () => {
  const onConnect = async () => {
    try {
      // 连接小狐狸
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // 登录
      await provider.send('eth_requestAccounts', []);
      // 获取帐号列表
      const [account] = await provider.listAccounts();
      console.log(account);
      const balance = await provider.getBalance(account);
      console.log(balance.toString());
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={onConnect}>ConnectWallet</button>;
};
