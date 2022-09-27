import { ethers } from "ethers";
import { contractAddress } from "../../../solidity/config";
import Blog from "../../../solidity/artifacts/contracts/Blog.sol/Blog.json";

export const CreatePost: React.FC = () => {
  const createPost = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Blog.abi, signer);
    console.log("contract: ", contract);
    try {
      const val = await contract.createPost('标题', 'hash');
      /* optional - wait for transaction to be confirmed before rerouting */
      /* await provider.waitForTransaction(val.hash) */
      console.log("val: ", val);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return <button onClick={createPost}>CreatePost</button>;
};
