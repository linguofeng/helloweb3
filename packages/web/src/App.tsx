import { PostList } from "./components/PostList";
import { ConnectWalletButton } from "./components/ConnectWalletButton";
import { CreatePost } from "./components/CreatePost";

const App: React.FC = () => {
  return (
    <div className="App">
      <ConnectWalletButton />
      <PostList />
      <CreatePost />
    </div>
  );
};

export default App;
