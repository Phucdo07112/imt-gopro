import { images } from "../assets/images"

const Blog = () => {
  return (
    <section className="blog" id="blog">
        <div className="container ">
            <div className="blog-center">
                <div className="blog-left">
                    <div className="btn-blog btn-Agency">
                        Top Leading Company 
                    </div>
                    <h4 className="blog-title">Fresh Ideas for your business design, Top digital marketing service company</h4>
                    <p className="blog-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    . Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className="blog-feedback">
                        <div className="blog-user">
                            <div className="blog-user-item">
                                <img src={images.blog3} alt="blog"/>
                                <h4 className="blog-user-name">Guy Hawkins</h4>
                            </div>
                            <p className="blog-user-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                        </div>
                        <div className="blog-user">
                            <div className="blog-user-item">
                                <img src={images.blog4} alt="blog"/>
                                <h4 className="blog-user-name">Guy Hawkins</h4>
                            </div>
                            <p className="blog-user-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                        </div>
                    </div>
                </div>
                <div className="blog-right">
                    <img src={images.blog1} className="blog-right-img1" alt="blog" />
                    <img src={images.blog2} className="blog-right-img2" alt="blog" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog