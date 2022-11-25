import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../untils/colors'
import MentionsLegales from '../Mentions Légales'
import Nouscontactez from '../Nos réseaux'

function Footer() {
  const H6style = styled.h6`
    text-align: center;
    font-family: 'Arial Narrow', Arial, sans-serif;
    text-decoration: solid white 2px;
    color: white;
  `
  const Pstyle = styled.p`
    font-family: 'Arial Narrow', Arial, sans-serif;
    color: white;
  `

  const DateSpan = styled.span`
    color: black;
    font-size: 0.75em;
    padding-bottom: 10px;
    color: white;
  `
  const FooterStyle = styled.footer`
    background-color: ${Colors.footerbgColor};
  `
  return (
    <FooterStyle className="">
      <div className="container-fluid my-4">
        <div className="row gy-2">
          <div className="col-12 col-md-6">
            <Link to="/a%20propos" className="py-4 btn">
              <H6style>A propos de l’IFEE :</H6style>

              <Pstyle>
                Il ne s’agit pas juste d’une promesse d’insertion
                professionnelle. Il s’agit d’un système de formation murie, qui
                fait passez directement l’étudiant de la forma...
              </Pstyle>
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <div className="py-5">
              <MentionsLegales />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className=" py-5">
              <Nouscontactez />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <div className="py-2">
              <DateSpan>
                © 2022 - Institut des Formations pour l'Emploi et
                l'Entreprenariat
              </DateSpan>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  )
}
export default Footer
