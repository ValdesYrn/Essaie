import React from 'react'
import Contact from '../../components/Contacts'

export default function HauteCoutureEtStylisme() {
  return (
    <section className="mt-5">
      <div className="bg-light container-fluid">
        <div className=" p-2 w-100 h-100">
          <h2 className=" w-100 p-2 text-center fw-bold fs-2 text-decoration-underline">
            Haute Couture et Stylisme
          </h2>
        </div>
        <div className="d-flex flex-lg-row flex-column-reverse align-items-center">
          <div className="col-12 col-lg  ">
            <div className=" h-100">
              <p>
                <p>
                  <span style={{ fontSize: '2em', fontWeight: 'bold' }}>S</span>
                  e vêtir fait partie des besoins fondamentaux de l’homme. Les
                  êtres humains vont toujours s’habiller et plus la société
                  évolue plus le goût de bien s’habiller pour se démarquer est
                  très développé. Dans ce contexte, se former dans le secteur de
                  la Mode avec l’Institut des Formations pour l’Emploi et
                  l’Entrepreneuriat c’est s’assurer un avenir à succès et une
                  belle réussite dans un secteur très porteur.
                </p>
                <p>
                  Tu es un jeune béninois ou africain,{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    tu as le niveau BAC
                  </span>{' '}
                  ou <span style={{ fontWeight: 'bold' }}>Terminale</span> et tu
                  es passionné des métiers de la mode. Ou encore, tu as moins
                  que ce niveau mais{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    tu as un talent très visible en couture, stylisme ou
                    modélisme qui peut se confirmer grâce à un test pratique
                  </span>
                  .
                </p>
                <p>
                  Tu te retrouves dans l’un des profils défini plus haut, et tu
                  rêves travailler à ton propre compte dans une maison de
                  couture qui porte ta marque en fin de formation, nous
                  réalisons ton rêve.
                </p>
                <p>
                  Viens t’inscrire à l’Institut des Formations pour l’Emploi et
                  l’Entrepreneuriat et bénéficie :
                </p>
                <p>
                  <ul>
                    <li>D'une formation attractive 100% pratique</li>
                    <li>Des cours pratiques sur le Marketing de la Mode</li>
                    <li>Des cours d’Anglais</li>
                    <li>
                      Des cours sur la gestion pratique d’une maison de couture
                      et de Mode
                    </li>
                  </ul>
                </p>
                <p>
                  L’exercice pratique de ton métier dans un incubateur de mode
                  avec possibilité de voyage d’échanges dans une maison de haute
                  couture dans un pays de la sous-région
                </p>
                <p>L'ouverture de ta maison de couture</p>
                <u style={{ fontWeight: 'bold' }}>
                  Nos avantages que tu ne trouveras nul par ailleurs
                </u>
                <ul>
                  <li>Formation 100% pratique</li>
                  <li>une machine offerte dès ton inscription</li>
                  <li>Diplôme national</li>
                  <li>
                    Exercice du Métier dans un incubateur de mode, sur la
                    gestion à succès d’une maison de couture
                  </li>
                  <li>
                    Ouverture de maisons de couture moderne aux finissants
                  </li>
                </ul>
                <p>
                  <h3>Durée:</h3>
                  <ul>
                    <li> 2 ans de formation pratique</li>
                    <li>
                      6 mois à 9 mois d’incubation débouchant sur la création de
                      votre maison de couture et de mode
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg ">
            <div className="p-2 h-100">
              <img
                src={
                  'https://senegalndiaye.com/wp-content/uploads/2021/08/formation-couture-dakar.jpg'
                }
                alt="img"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  )
}
