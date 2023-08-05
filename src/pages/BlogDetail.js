import React from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../assets/styles/styles.module.css";
import blogsData from "../assets/blogs_data";

const BlogDetail = () => {
  const { slug } = useParams();
  const blogData = blogsData.find((blog) => blog.slug === slug);

  return (
    <div className={Style.container}>
      <div className={Style.blog_pg}>
        <div className={Style.blog_data}>
          <img
            src={blogData.img}
            alt={blogData.title}
            className={Style.bmimg}
          />
          <h2>{blogData.title}</h2>
          <p>
            <b>{blogData.short_desc}</b>
          </p>
          <p>{blogData.long_content}</p>
        </div>
        <div className={Style.latest_blog_section}>
          <h3>
            Latest Blogs <hr />
          </h3>

          <div className={Style.recent_blogs}>
            {blogsData.slice(0, 3).map((blog) => {
              return (
                <div className={Style.recblog_item}>
                  <Link to={`/blogs/${blog.slug}`}>
                    <img src={blog.img} alt={blog.title} />
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
