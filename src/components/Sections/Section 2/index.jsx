import { Link } from 'react-router-dom'
import styled from 'styled-components'
function Section2() {
  const H2Style = styled.h1`
    font-family: 'White Monkey', Cambria, Cochin, Georgia, Times,
      'Times New Roman', serif;
  `
  return (
    <div className=" bg-light my-2">
      <H2Style className="text-center my-4 fw-light">Nos Formations</H2Style>
      <div className="container py-2">
        <Link
          to="/Nos%20formations/agrobusiness"
          className="d-flex flex-md-row flex-column align-items-center border gy-1 btn mb-5"
        >
          <div className="col-12 col-md  p-md-5 mb-3 mb-md-0">
            <img
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cropscientist.jpg/1200px-Cropscientist.jpg'
              }
              alt="Agrobusiness"
              className="w-100  rounded-1"
            />
          </div>
          <div className="col-md-8 col-12 ">
            <h5 className="text-uppercase text-decoration-underline">
              Agrobusiness
            </h5>
            <p>
              Se nourrir est le premier besoin de l’homme. C’est un besoin qui
              ne disparaîtra jamais. Tant la population, ne cesse de croitre.
              Dans ce contexte, se former dans le secteur de l’agrobusiness avec
              l’Institut des Formations pour l’Emploi et l’Entrepreneuriat,
              c’est s’assurer un avenir à succès et bâtir sereinement sa
              richesse financière dans un secteur très rentable. C’est aussi
              contribuer à l’autosuffisance alimentaire
            </p>
          </div>
        </Link>

        <Link
          to="/Nos%20formations/creche"
          className="d-flex flex-md-row flex-column-reverse align-items-center border gy-1 btn mb-5"
        >
          <div className="col-12 col-md-8 ">
            <h5 className="text-uppercase text-decoration-underline">Crêche</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              beatae porro voluptas voluptatibus excepturi cupiditate nostrum
              reiciendis earum consequuntur sint ratione ipsam inventore
              tempore, ducimus dolores quod dolore placeat et. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Minima a assumenda
              voluptates aliquam alias quia quidem in provident minus iste
              perferendis aspernatur labore mollitia, voluptatem magnam officia,
              quam dolorem optio
            </p>
          </div>
          <div className=" col-12 col-md  p-md-5 mb-3 mb-md-0">
            <img
              src={
                'https://img.passeportsante.net/1200x675/2021-05-03/i103079-creche-entreprise.webp'
              }
              alt="Agrobusiness"
              className="w-100  rounded-1"
            />
          </div>
        </Link>

        <Link
          to="/Nos%20formations/haute%20couture%20et%20stylisme"
          className="d-flex flex-md-row flex-column align-items-center border gy-1 btn mb-5"
        >
          <div className="col-12 col-md  p-md-5 mb-3 mb-md-0">
            <img
              src={
                'https://senegalndiaye.com/wp-content/uploads/2021/08/formation-couture-dakar.jpg'
              }
              alt="Agrobusiness"
              className="w-100  rounded-1"
            />
          </div>
          <div className="col-md-8 col-12">
            <h5 className="text-uppercase text-decoration-underline">
              Haute couture et stylisme
            </h5>
            <p>
              Se vêtir fait partie des besoins fondamentaux de l’homme. Les
              êtres humains vont toujours s’habiller et plus la société évolue
              plus le goût de bien s’habiller pour se démarquer est très
              développé. Dans ce contexte, se former dans le secteur de la Mode
              avec l’Institut des Formations pour l’Emploi et l’Entrepreneuriat
              c’est s’assurer un avenir à succès et une belle réussite dans un
              secteur très porteur.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Section2
