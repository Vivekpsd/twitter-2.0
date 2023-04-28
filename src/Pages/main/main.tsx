import "../styles/main.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Post from "../main/post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const imageSource = require("../img/1.png");
  const postRef = collection(db, "posts");

  const [postsList, setPostsList] = useState<Post[] | null>(null);

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  const checker = postsList ? "true" : "false";
  return (
    <>
      <div className={postsList ? "container-login" : "container-logout"}>
        {checker === "false" ? (
          <div className="container-logout">
            <div>
              <img src={imageSource} alt="banner" className="main-banner" />
            </div>
            <div>
              <h1>Join the Decentralized Conversation with Web3 Twitter</h1>
              <br></br>
              <br></br>
              <p>
                Welcome to the future of social media with Web3 Twitter. Connect
                with like-minded individuals and engage in meaningful
                conversations without the interference of centralized
                authorities. With our decentralized platform, you can have
                complete control over your data and experience the true power of
                blockchain technology. Join our community today and be a part of
                the decentralized revolution.
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <p>
        {postsList?.map((post) => (
          <Post post={post} />
        ))}
      </p>
    </>
  );
};
