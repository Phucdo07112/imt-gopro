import { AiOutlineRight } from "react-icons/ai"
import { images } from "../assets/images"
const Shop = () => {
  return (
    <section className="shop" id="shop">
        <div className="container ">
            <div className="shop-center">
                <div className="shop-info">
                    <img src={images.logo} alt="shop" />
                    <h4 className="shop-name">Eleanor Pena</h4>
                    <p className="shop-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    . Velit officia consequat duis enim velit mollit. Exercitation.</p>
                </div>
                <div className="shop-link">
                    <h4>About us </h4>
                    <a href="/"><span><AiOutlineRight /></span> Mission & vision</a>
                    <a href="/"><span><AiOutlineRight /></span> our comapny</a>
                    <a href="/"><span><AiOutlineRight /></span> our projects</a>
                    <a href="/"><span><AiOutlineRight /></span> Our Team</a>
                </div>
                <div className="shop-link">
                    <h4>Discover</h4>
                    <a href="/"><span><AiOutlineRight /></span> Projects & Research</a>
                    <a href="/"><span><AiOutlineRight /></span> Clents Review</a>
                    <a href="/"><span><AiOutlineRight /></span> our projects</a>
                    <a href="/"><span><AiOutlineRight /></span> Our Team</a>
                </div>
                <div className="shop-link">
                    <h4>Useful Links</h4>
                    <a href="/"><span><AiOutlineRight /></span> Contact us</a>
                    <a href="/"><span><AiOutlineRight /></span> Terms & Conditions</a>
                    <a href="/"><span><AiOutlineRight /></span> Review</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shop