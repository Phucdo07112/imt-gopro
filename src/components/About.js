import { images } from "../assets/images"

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container ">
            <div className="about-center">
                <img src={images.about1} alt="about" />
                <img src={images.about2} alt="about" />
                <img src={images.about3} alt="about" />
                <img src={images.about4} alt="about" />
                <img src={images.about5} alt="about" />
                <img src={images.about6} className="about-mid" alt="about" />
                <img src={images.about7} alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About