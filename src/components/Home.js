import {images} from "../assets/images"
import { AiOutlineArrowRight } from "react-icons/ai"

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="container home-center">
            <div className="home-left">
                <div className="btn-Agency">
                    Digital Marketing Agency
                </div>
                <h2 className="home-content">Advanced analytics to grow your business</h2>
                <p className="home-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className="home-btn">
                    <button className="home-btn-left">Get Started <AiOutlineArrowRight className="btn-right" /></button>
                    <button className="home-btn-right">How it works <AiOutlineArrowRight className="btn-right" /></button>
                </div>
            </div>
            <div className="home-right">
                <img src={images.homeRight1} className="home-right-main" alt=""/>
                <span className="home-right-border"></span>
                <div className="home-right-extra">
                    <img src={images.homeRight2} alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home