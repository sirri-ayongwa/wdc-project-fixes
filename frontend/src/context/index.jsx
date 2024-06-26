import { createContext, useContext, useEffect, useState } from "react";
import { showPost } from "../api/post";
import { getAllUsers } from "../api/user";

const WorldContext = createContext();

function WDCProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState(false);
  const [token, setToken] = useState("");

  const FetchBlogs = async () => {
    try {
      setPending(true);
      const res = await showPost();

      if (res?.success) {
        // console.log(res);
        setPending(false);

        setPosts(res?.posts);
      } else {
        setPending(false);
      }
    } catch (err) {
      console.log(err);
      setPending(false);
    }
  };

  const FetchUsers = async () => {
    try {
      setPending(true);
      const res = await getAllUsers();
      setPending(false);

      if (res?.success) {
        // console.log(res);

        setUsers(res?.items);
      }
    } catch (err) {
      console.log(err);
      setPending(false);
    }
  };

  useEffect(() => {
    FetchBlogs();
    FetchUsers();
  }, []);

  return (
    <WorldContext.Provider
      value={{
        users,
        posts,
        setUsers,
        setPosts,
        pending,
        setPending,
        token,
        setToken,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
}

export const useWorld = () => useContext(WorldContext);

export default WDCProvider;
