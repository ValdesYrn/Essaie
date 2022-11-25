import React from 'react'
import Contact from '../../components/Contacts'
import { AProposList } from '../../components/Liste'

export default function APropos() {
  return (
    <section className="my-5 ">
      <div className="container-fluid bg-light">
        <div className="my-4">
          <h2> A propos de IFEE</h2>
        </div>

        <div>
          <p>
            Il ne s’agit pas juste d’une promesse d’insertion professionnelle.
            Il s’agit d’un système de formation murie, qui fait passez
            directement l’étudiant de la formation à l’Emploi indépendant ou
            salarié suivant les filières. A{' '}
            <span style={{ fontWeight: 'bold' }}>
              l’Institut des Formations pour l’Emploi et l’Entrepreneuriat (IFE)
            </span>
            , l’Etudiant ne passe pas un seul jour au chômage, entre la
            formation et l’emploi. Pour aller droit au but, l’Institut lance
            quatre formations professionnelles :
          </p>

          <div>{AProposList.moduleList}</div>

          <p>
            {' '}
            <span className="text-uppercase">à </span>
            <span className="fw-bold">
              l’Institut des Formations pour l’Emploi et l’Entrepreneuriat
            </span>{' '}
            :
          </p>

          {AProposList.moduleExpandList}

          <p>
            Outre ces quatre formations internes dont le système de formation
            est mis en place par l’Institut même, l’Institut accompagne tout
            jeune ou tout groupe de jeunes à la recherche d’emploi ou qui
            souhaitent s’installer à son propre compte à décrocher un emploi
            salarié ou à créer son entreprise.{' '}
          </p>
        </div>
      </div>
      <Contact />
    </section>
  )
}
