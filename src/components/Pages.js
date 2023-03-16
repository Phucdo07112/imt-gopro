import { images } from "../assets/images"

const Pages = () => {
  return (
    <section className="page" id="page">
        <div className="container ">
            <div className="page-center">
                <h4 className="page-title">Fresh Ideas for your business design.</h4>
                <p className="page-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                . Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className="page-feedback">
                    <div className="company-feedback">
                        <div>
                            <img src={images.page1} alt="company" />
                        </div>
                        <div className="company-cmt">
                            <h4 className="page-name">Eleanor Pena</h4>
                            <p className="company-cmt-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                        </div>
                    </div>
                    <div className="company-feedback">
                        <div>
                            <img src={images.page2} alt="company" />
                        </div>
                        <div className="company-cmt">
                            <h4 className="page-name">Cody Fisher</h4>
                            <p className="company-cmt-des">Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                        </div>
                    </div>
                    <div className="company-feedback">
                        <div>
                            <img src={images.page3} alt="company" />
                        </div>
                        <div className="company-cmt">
                            <h4 className="page-name">Leslie Alexander</h4>
                            <p className="company-cmt-des">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pages