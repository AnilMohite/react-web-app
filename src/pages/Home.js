import Style from '../assets/styles/styles.module.css'
import HomeStyle from '../assets/styles/home.module.css'
import Abt_img from '../assets/images/wallpaper3.jpg'
import React from 'react';


const Home = () =>{

    return (
        <div className={Style.container}>
            <div className=''>
                {/* <ImageSlider /> */}
            </div>
            <div className={HomeStyle.home_abt_section}>
                <div className={HomeStyle.abt_txt}>
                    <h2>Explore the Cutting-Edge World of Technology</h2>
                    <p>Are you a tech enthusiast, always seeking to stay ahead of the curve? Look no further! TechGlimpse is your ultimate destination for the most recent and exciting developments in the world of technology. Our expert team of writers and researchers are constantly on the lookout for the latest trends and innovations, ensuring you never miss a beat in the fast-paced tech world.</p>
                </div>
                
                <div className={HomeStyle.abt_img}>
                    <img src={Abt_img} alt='about-img'/>
                </div>
            </div>
            
            <div className={HomeStyle.title}>Top Tranding</div>

            <div className={HomeStyle.blog_section}>
                <div className={HomeStyle.blogs}>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"TechGlimpse: Unveiling the Frontiers of Technology"</p>
                    </div>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"TechGlimpse: Unveiling the Frontiers of Technology"</p>
                    </div>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"TechGlimpse: Unveiling the Frontiers of Technology"</p>
                    </div>
                </div>
                
                <div className={HomeStyle.moreBtn}>                    
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;