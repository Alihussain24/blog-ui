import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.img && <img className="postImg" src={post.img} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            {post.categories.map(() => (
              <Link className="link" to="/posts?cat=Music">
                {post.categories}
              </Link>
            ))}
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id} `} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
