import { Link } from 'react-router-dom'
import { Modules, NosReseaux } from '../../data'

export const Liste = {
  modulesListCollapse: (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        {Modules.map(({ id, nameModule, to }) => (
          <li key={id} className="nav-item ">
            <Link className="nav-link btn text-white fw-bold g-4" to={to}>
              {nameModule}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ),

  modulesListDropdown: (
    <div className="" id="">
      <ul className="dropdown-menu">
        {Modules.map(({ id, nameModule }) => (
          <li key={id} className="dropdown-item ">
            <Link className=" btn fw-bold g-4">{nameModule}</Link>
          </li>
        ))}
      </ul>
    </div>
  ),
}

export const reseauxListe = (
  <div className="col-md text-md-center gy-md-0 gy-2">
    <ul className="list-inline">
      {NosReseaux.map(({ id, nameReseau, icone, href }) => (
        <li className="list-inline-item" key={id}>
          <a href={href} title={nameReseau}>
            <i className={icone}></i>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export const AProposList = {
  moduleList: (
    <ul className="list-group list-group-flush my-4">
      {Modules.map(({ id, nameModule, to }) => (
        <li className="list-group-item bg-light" key={id}>
          <Link to={to} className="text-decoration-none fw-bold text-black">
            {nameModule}
          </Link>
        </li>
      ))}

      <li className="list-group-item bg-light">
        {' '}
        <a
          className="text-decoration-none fw-bold text-black "
          href="https://wa.me/22953042581?text=Salut.!%20Je%20suis%20interessé%20par%20votre%20formation%20pour%20devenir%20*conseiller%20scolaire,%20d’orientation%20et%20en%20emploi*.%20Pouvez-vous%20m'%20en%20dire%20plus.?"
        >
          Conseiller scolaire, d’orientation et en emploi
        </a>
      </li>
    </ul>
  ),

  moduleExpandList: (
    <div className="list-group my-4">
      {Modules.map(({ id, nameModule, to, description }) => (
        <Link
          to={to}
          key={id}
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">la formation en {nameModule}</h5>
          </div>
          <p className="mb-1">{description}</p>
        </Link>
      ))}

      <a
        href="https://wa.me/22953042581?text=Salut.!%20Je%20suis%20interessé%20par%20votre%20formation%20pour%20devenir%20*conseiller%20scolaire,%20d’orientation%20et%20en%20emploi*.%20Pouvez-vous%20m'%20en%20dire%20plus.?"
        class="list-group-item list-group-item-action"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">
            La formation pour devenir conseiller scolaire, d’orientation et en
            emploi :
          </h5>
        </div>
        <p class="mb-1">
          permet de former des spécialistes qui accompagnent les personnes de la
          vie scolaire et ou professionnelle jusqu’à l’insertion
          professionnelle. Ils sont conseiller scolaire, conseiller
          d’orientation scolaire et professionnelle et conseiller en emploi. Ils
          sont ainsi formés pour accompagner également les jeunes au chômage, ou
          en quête de reconversion professionnelle et les jeunes entrepreneurs.
          Leur public cible, ce sont les élèves, les jeunes en formation
          professionnelle, les étudiants, les entrepreneurs, les jeunes en quête
          de devenir.
        </p>
      </a>
    </div>
  ),
}

export const ContactList = (
  <p className="fw-bold">
    Vous voulez en savoir plus.? Pas de souci, vous pouvez nous joindre par{' '}
    {NosReseaux.map(({ href, id, nameReseau, jump }) => (
      <span key={id}>
        <a href={href}>{nameReseau}</a> {jump}{' '}
      </span>
    ))}
    .
  </p>
)
