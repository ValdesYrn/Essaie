import { Liste } from '../Liste'

export const Buttons = {
  NavbarToggle: (
    <>
      <button
        className="navbar-toggler  border border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list"></i>
      </button>
      {Liste.modulesListCollapse}
    </>
  ),

  NavBtnDropdown: (
    <div className="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      {Liste.modulesListDropdown}
    </div>
  ),
}
