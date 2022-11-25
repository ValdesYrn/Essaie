import { Link } from 'react-router-dom'
import logoExpand from '../../assets/logo expand.png'
import logo from '../../assets/logo.png'

export const BrandImages = {
  brandImageExpand: (
    <Link to="/">
      <img
        src={logoExpand}
        alt="logo-IFEE"
        className=""
        width={200}
        height={50}
      />
    </Link>
  ),

  brandImage: (
    <Link to="/">
      <img src={logo} alt="logo-IFEE" className="" width={25} height={50} />
    </Link>
  ),
}
