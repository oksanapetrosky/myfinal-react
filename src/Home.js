import AfterBanner from "./AfterBanner";
import Slideshow from "./ImageSlider";
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./Carousel";
// import Newsletter from "./NewsLetter";
// import Footer from "./Footer";


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
     navigate('/newcollection');
  }
  
    return(
    <div className="home" >

      <div className="banner" >
        <h3 >Labor Day Sale</h3>
        <h3 >Extra 40% Off All Sale Items</h3>
        <h3 >Use Code: Summer-Sale2024</h3>
      </div>
     <Slideshow />
      <div className="router">
         <h1>New FabulousFits Collection</h1>
         <button className="btnHome" onClick={handleClick}>Shop Now</button>
      </div>
      <div className="sectiontwo">
         <h2>Where Are You Going?</h2>
         <h2>You have places to be, and we wanna come with</h2>
         <AfterBanner />
      </div>
         <p className="sale">FabulousFits Sale 2024</p>
      <ImageSlider />
     {/* < Newsletter />
    <Footer /> */}
    </div>
    )
}

export default Home;