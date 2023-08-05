import Style from "../assets/styles/styles.module.css";
import HomeStyle from "../assets/styles/home.module.css";
import blogsData from "../assets/blogs_data";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className={Style.container}>
      <h2>Blogs</h2>
      <div className={HomeStyle.blogs}>
        {blogsData.map((blog) => {
          return (
            <div className={HomeStyle.blog_item}>
              <Link to={`/blogs/${blog.slug}`}>
                <img src={blog.img} alt={blog.title} />
                <p>{blog.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
