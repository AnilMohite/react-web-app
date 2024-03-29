import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../assets/styles/styles.module.css";
import axios from "axios";

const BlogDetail = () => {
  const { slug } = useParams();
  console.log('slug',slug)
  const [photo, setPhoto] = useState({})
  const [relatedPhotos, setRelatedPhotos] = useState([])

  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos/${slug}?client_id=_---IBvnPAC78lHyq6Vc9-MPXprqKSPVulYjWCdqJ94&id=ijxWA9RHabI`)
    .then(resp=>{
      console.log('rrr',resp.data)
      setPhoto(resp.data)
      if (resp.data.related_collections.results){
      setRelatedPhotos(resp.data.related_collections.results)
      }
    })
    .catch(error=>{
      console.log(error)
    });

  }, [slug]);
  return (
    <div className={Style.container}>
      <div className={Style.blog_pg}>
        <div className={Style.blog_data}>
          <img
            key={photo.id}
            // src={photo.urls.raw}
            alt={photo.alt_description}
            className={Style.bmimg}
          />
          <h2>{photo.alt_description}</h2>
          <p>{photo.description}</p>
        </div>
        <div className={Style.latest_blog_section}>
          <h3>
            Latest Blogs <hr />
          </h3>

          <div className={Style.recent_blogs}>
            {relatedPhotos.map((rc) => {
              return (
                <div key={rc.id} className={Style.recblog_item}>
                  <Link to={`/gallary/${rc.title}`}>
                    {/* <img src={rc.urls.thumb} alt={rc.alt_description} /> */}
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