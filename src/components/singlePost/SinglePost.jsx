import axios from "axios";
import { useEffect,useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const pathdata = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/" + pathdata);
      setPost(res.data)
    };
    getPosts();
  }, [pathdata]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.img && (
          <img
          className="singlePostImg"
          src={post.img}
              alt=""
        />
        )}
        
        <h1 className="singlePostTitle">
        {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
        {post.desc}
        </p>
      </div>
    </div>
  );
}
