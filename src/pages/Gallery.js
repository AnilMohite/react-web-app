import Style from "../assets/styles/styles.module.css";
import HomeStyle from "../assets/styles/home.module.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

const Gallery = () => {

  const [photos,setPhotos] = useState([])

  useEffect(()=>{
    const gallery_data = async () => {
      try{
        const response = await axios.get(`https://api.unsplash.com/photos?client_id=_---IBvnPAC78lHyq6Vc9-MPXprqKSPVulYjWCdqJ94`);
        setPhotos(response.data)
      }catch(error){
        console.error(error)
      }
    };
    gallery_data();
  },[]);
  

  return (
    <div className={Style.container}>
      <h2>Gallery</h2>
      <div className={HomeStyle.blogs}>
        {photos.map((photo) => {
          return (
            <div  key={photo?.id} className={HomeStyle.blog_item}>
              <Link to={`/gallery/${photo.slug}`}>
                <img src={photo.urls?.thumb} alt={photo?.alt_description} />
                <p>{photo?.description?.length>100 ? photo?.description.slice(0,100)+'...': photo?.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
