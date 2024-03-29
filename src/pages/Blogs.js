import Style from "../assets/styles/styles.module.css";
import HomeStyle from "../assets/styles/home.module.css";
import blogsData from "../assets/blogs_data";
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import img from "../assets/images/index.js";

const Blogs = () => {

  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>{
      console.log(res.data);
      setBlogs(res.data)
    })
    .catch(error => {
      console.log(error)
    });
  },[]);
  

  return (
    <div className={Style.container}>
      <h2>Blogs</h2>
      <div className={HomeStyle.blogs}>
        {blogs.map((blog) => {
          return (
            <div className={HomeStyle.blog_item}>
              <Link to={`/blogs/${blog.id}`}>
                <img src={img.img1} alt={blog.title} />
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
