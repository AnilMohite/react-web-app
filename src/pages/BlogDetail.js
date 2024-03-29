import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../assets/styles/styles.module.css";
import axios from "axios";
import img from "../assets/images/index.js";

const BlogDetail = () => {
  const { blogId } = useParams();
  console.log('blogId',blogId)
  const [blog, setBlog] = useState({})
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    .then(resp=>{
      console.log(resp.data)
      setBlog(resp.data)
    })
    .catch(error=>{
      console.log(error)
    });


    // Fetch latest blogs
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => {
      setLatestBlogs(response.data);
    })
    .catch(error => {
      console.error('Error fetching latest blogs:', error);
    });
  }, [blogId]);
  return (
    <div className={Style.container}>
      <div className={Style.blog_pg}>
        <div className={Style.blog_data}>
          <img
            src={img.img1}
            alt={blog.title}
            className={Style.bmimg}
          />
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
        <div className={Style.latest_blog_section}>
          <h3>
            Latest Blogs <hr />
          </h3>

          <div className={Style.recent_blogs}>
            {latestBlogs.map((blog) => {
              return (
                <div key={blog.id} className={Style.recblog_item}>
                  <Link to={`/blogs/${blog.id}`}>
                    <img src={img.img2} alt={blog.title} />
                    <p>{blog.title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
