import { Colors } from '../../untils/colors'
import { Buttons } from '../Buttons'
import { BrandImages } from '../Images'

function NavBar() {
  return (
    <header className="py-4">
      <nav
        className="navbar navbar-expand-md  fixed-top rounded"
        style={{ backgroundColor: Colors.navbgcolor }}
      >
        <div className="container-fluid">
          <div className="navbar-brand btn ">
            {BrandImages.brandImageExpand}
          </div>
          {Buttons.NavbarToggle}
        </div>
      </nav>
    </header>
  )
}
export default NavBar
