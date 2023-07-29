import Style from '../assets/styles/styles.module.css'
import HomeStyle from '../assets/styles/home.module.css'
import Abt_img from '../assets/images/wallpaper3.jpg'


const Blogs = () => {
    return (
        <div className={Style.container}>
            <h2>Blogs</h2>
            <p></p>
            <div className={HomeStyle.blog_section}>
                <div className={HomeStyle.blogs}>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"The Future of AI: Advancements and Ethical Considerations"</p>
                    </div>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"Exploring Virtual Reality: A New Frontier in Gaming and Beyond"</p>
                    </div>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"The Rise of Cybersecurity: Protecting Our Digital World"</p>
                    </div>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"Beyond Earth: The Journey to Space Exploration"</p>
                    </div>
                    <div className={HomeStyle.blog_item}>
                        <img src={Abt_img} alt='about-img'/>
                        <p>"The Internet of Things (IoT): Connecting Our World"</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};
  
export default Blogs;