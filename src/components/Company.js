import { images } from "../assets/images"

const Company = () => {
  return (
    <section className="company" id="company">
        <div className="container ">
            <div className="company-center">
                <div className="company-left">
                    <img src={images.company1} className="company-left-img1" alt="company" />
                    <img src={images.company2} className="company-left-img2" alt="company" />
                </div>
                <div className="company-right">
                    <div className="btn-company btn-Agency">
                        Digital Marketing Agency
                    </div>
                    <h3 className="company-content">Fresh Ideas for your business design.</h3>
                    <p className="company-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    . Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className="company-feedback">
                        <div>
                            <img src={images.company3} alt="company" />
                        </div>
                        <div className="company-cmt">
                            <h4 className="company-cmt-name">Garddy</h4>
                            <p className="company-cmt-des">Dicta maiores architecto rerum opt
                            io fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, 
                            laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?  </p>
                        </div>
                    </div>
                    <div className="company-feedback">
                        <div>
                            <img src={images.company4} alt="company" />
                        </div>
                        <div className="company-cmt">
                            <h4 className="company-cmt-name">Herdric</h4>
                            <p className="company-cmt-des">Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis
                             sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam
                              recusandae dolores minima omnis voluptas?  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company