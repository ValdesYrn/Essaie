import React from 'react'
import styled from 'styled-components'
import Contact from '../../components/Contacts'

export default function Agrobusiness() {
  const TitleStyle = styled.h1``
  return (
    <section className=" mt-5">
      <div className="bg-light container-fluid">
        <div className=" col-2 p-2 w-100 h-100">
          <TitleStyle className=" w-100 p-2 text-center fw-bold fs-2 text-decoration-underline">
            AGROBUSINESS
          </TitleStyle>
        </div>
        <div className="d-flex flex-lg-row flex-column-reverse align-items-center">
          <div className="col-12 col-lg  ">
            <div className=" h-100">
              <p>
                <p>
                  {' '}
                  <span style={{ fontSize: '2em', fontWeight: 'bold' }}>S</span>
                  e nourrir est le premier besoin de l’homme. C’est un besoin
                  qui ne disparaîtra jamais. Tant la population, ne cesse de
                  croitre. Dans ce contexte, se former dans le secteur de
                  l’agrobusiness avec l’Institut des Formations pour l’Emploi et
                  l’Entrepreneuriat, c’est s’assurer un avenir à succès et bâtir
                  sereinement sa richesse financière dans un secteur très
                  rentable. C’est aussi contribuer à l’autosuffisance
                  alimentaire.
                </p>

                <p>
                  {' '}
                  Tu es jeune béninois ou africain, tu as le BAC ou pas. Tu es
                  un jeune, tu as échoué dans d’autres domaines et tu souhaites
                  te reconvertir dans un secteur porteur. Tu es un jeune, tu es
                  au chômage, tu recherches un secteur qui te fera quitter
                  définitivement le chômage. Tu es jeune, et passionné de la
                  production agricole, de l’élevage, de la transformation des
                  produits agricoles, de l’investissement dans le secteur
                  agricole,{' '}
                </p>
                <p>
                  {' '}
                  Viens t’inscrire à l’Institut des Formations pour l’Emploi et
                  l’Entrepreneuriat et bénéficie :
                  <ul>
                    <li style={{ fontWeight: 'bold' }}>
                      D’une formation attractive et 100% pratique sur une ferme
                      agricole
                    </li>
                    <li style={{ fontWeight: 'bold' }}>
                      Des cours pratiques sur le Marketing et la vente
                    </li>
                    <li style={{ fontWeight: 'bold' }}>
                      L’exercice pratique de ton métier dans un incubateur
                      d’agrobusiness avec possibilité de voyage d’échanges dans
                      un pays de la sous-région
                    </li>
                    <li style={{ fontWeight: 'bold' }}>
                      Ton Installation sur ta ferme agricole
                    </li>
                  </ul>
                </p>
                <p>
                  Jeune bachelier béninois ou africain, tu es passionné de
                  l’agrobusiness, rejoins l’IFE et bénéficie{' '}
                  <u style={{ fontWeight: 'bold' }}>
                    des avantages que tu ne trouveras nul par ailleurs :
                  </u>
                </p>
                <p>
                  <ul>
                    <li>
                      Formation 100% pratique dans une ferme Ecole, avec
                      l’hébergement et la restauration garantis
                    </li>
                    <li>
                      Apprentissage concret sur la vente et l’écoulement des
                      produits
                    </li>
                    <li>
                      6 mois ou un 1 an d’incubation pour expérimentation
                      concrète de la gestion d’une ferme de la production et ou
                      de la transformation à la commercialisation des produits
                    </li>
                    <li>Création de dermes agricoles aux finissants</li>
                  </ul>
                </p>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg ">
            <div className="p-2 h-100">
              <img
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cropscientist.jpg/1200px-Cropscientist.jpg'
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
