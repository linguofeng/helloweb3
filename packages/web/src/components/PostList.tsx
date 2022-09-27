import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { contractAddress } from "../../../solidity/config";
import Blog from "../../../solidity/artifacts/contracts/Blog.sol/Blog.json";

export const PostList: React.FC = () => {
  const [posts, setPosts] = useState<
    Array<{ id: string; title: string; content: string }>
  >([]);

  const fetchBlogList = useCallback(async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(contractAddress, Blog.abi, provider);
    const data = await contract.fetchPosts();
    console.log(data);
    setPosts(
      data.map((it: any) => ({
        id: it.id.toString(),
        title: it.title,
        content: it.content,
      }))
    );
  }, []);

  useEffect(() => {
    fetchBlogList();
  }, []);

  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {posts.map((it) => (
          <li key={it.id}>
            {it.id} - {it.title} - {it.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
