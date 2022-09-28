import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { contractAddress } from 'solidity/config';
import Blog from 'solidity/artifacts/contracts/Blog.sol/Blog.json';

const ipfs = create({
  url: 'http://localhost:5001/api/v0', // IPFS Desktop with CORS
});

export const CreatePost: React.FC = () => {
  const createPost = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Blog.abi, signer);
    try {
      const result = await ipfs.add('helloweb3');
      console.log(result);
      const val = await contract.createPost('title', result.path);
      /* optional - wait for transaction to be confirmed before rerouting */
      /* await provider.waitForTransaction(val.hash) */
      console.log('val: ', val);
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return <button onClick={createPost}>CreatePost</button>;
};
