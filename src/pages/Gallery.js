import Style from "../assets/styles/styles.module.css";
import HomeStyle from "../assets/styles/home.module.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

const Gallery = () => {

  const [photos,setPhotos] = useState([])

  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos?client_id=_---IBvnPAC78lHyq6Vc9-MPXprqKSPVulYjWCdqJ94`)
    .then(res=>{
      console.log(res.data);
      setPhotos(res.data)
    })
    .catch(error => {
      console.log(error)
    });
  },[]);
  

  return (
    <div className={Style.container}>
      <h2>Gallery</h2>
      <div className={HomeStyle.blogs}>
        {photos.map((photo) => {
          return (
            <div  key={photo.id} className={HomeStyle.blog_item}>
              <Link to={`/gallery/${photo.slug}`}>
                <img src={photo.urls.thumb} alt={photo.alt_description} />
                <p>{photo.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
