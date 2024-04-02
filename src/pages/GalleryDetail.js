import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../assets/styles/styles.module.css";
import axios from "axios";

const BlogDetail = () => {
  const { slug } = useParams();
  console.log('slug',slug)
  const [photo, setPhoto] = useState({})
  const [relatedPhotos, setRelatedPhotos] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/${slug}?client_id=_---IBvnPAC78lHyq6Vc9-MPXprqKSPVulYjWCdqJ94&id=ijxWA9RHabI`);
      console.log('response', response.data);
      setPhoto(response?.data);
      if (response?.data.related_collections.results) {
        setRelatedPhotos(response.data.related_collections.results);
      }
    } catch (error) {
      console.error('error',error);
    }
  };
  fetchData();
}, [slug]);

  return (
    <div className={Style.container}>
      <div className={Style.blog_pg}>
        {photo && (
          <div className={Style.blog_data}>
            <img
              key={photo?.id}
              src={photo?.urls?.regular}
              alt={photo?.alt_description}
              className={Style.bmimg}
            />
            <h2>{photo?.alt_description}</h2>
            <p>{photo?.description}</p>
          </div>
        )}
        <div className={Style.latest_blog_section}>
          <h3>
            Latest Blogs <hr />
          </h3>
          <div className={Style.recent_blogs}>
            {relatedPhotos?.map((rc) => {
              return (
                <div key={rc.id} className={Style.recblog_item}>
                  <Link to={`/gallery/${rc.cover_photo.slug}`}>
                    <img src={rc.preview_photos[0].urls?.small_s3} alt={rc?.alt_description} />
                    <p>{rc.title}</p>
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
