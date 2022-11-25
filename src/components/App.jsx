import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/404'
import APropos from '../Pages/A Propos'
import Agrobusiness from '../Pages/Agrobussines'
import Creche from '../Pages/Crêche'
import HauteCoutureEtStylisme from '../Pages/Haute couture et stylisme'
import Home from '../Pages/Home'
import Footer from './Footer'
import NavBar from './Header'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Nos%20formations/agrobusiness"
            element={<Agrobusiness />}
          />
          <Route path="/Nos%20formations/creche" element={<Creche />} />
          <Route
            path="/Nos%20formations/haute%20couture%20et%20stylisme"
            element={<HauteCoutureEtStylisme />}
          />
          <Route path="/a%20propos" element={<APropos />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
