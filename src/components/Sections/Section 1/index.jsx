import Section1Images_3 from '../../../assets/Section 1 Images.jpeg'
import Section1Images_2 from '../../../assets/Section 1 Image 2.png'

function Section1() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade my-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src={Section1Images_2}
            className="d-block w-100 "
            height={307}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src={Section1Images_3}
            height={307}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Section1
