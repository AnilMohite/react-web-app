import Style from "../assets/styles/styles.module.css";
import HomeStyle from "../assets/styles/home.module.css";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/index.js";
import blogsData from "../assets/blogs_data";

const Home = () => {
  return (
    <div className={Style.container}>
      <div className="">{/* <ImageSlider /> */}</div>
      <div className={HomeStyle.home_abt_section}>
        <div className={HomeStyle.abt_txt}>
          <h2>Explore the Cutting-Edge World of Technology</h2>
          <p>
            Are you a tech enthusiast, always seeking to stay ahead of the
            curve? Look no further! TechGlimpse is your ultimate destination for
            the most recent and exciting developments in the world of
            technology. Our expert team of writers and researchers are
            constantly on the lookout for the latest trends and innovations,
            ensuring you never miss a beat in the fast-paced tech world.
          </p>
        </div>

        <div className={HomeStyle.abt_img}>
          <img src={img.img4} alt="about-img" />
        </div>
      </div>

      <div className={HomeStyle.title}>Top Tranding</div>

      <div className={HomeStyle.blog_section}>
        <div className={HomeStyle.blogs}>
          {blogsData.slice(0, 3).map((blog) => {
            return (
              <div key={blog.slug} className={HomeStyle.blog_item}>
                <Link to={`blogs/${blog.slug}`}>
                  <img src={blog.img} alt={blog.title} />
                  <p>{blog.title}</p>
                </Link>
              </div>
            );
          })}
        </div>

        <div className={HomeStyle.moreBtn}>
          <Link to="about" className={HomeStyle.btn}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
