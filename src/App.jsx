import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Feature from "./pages/Feature"
import Services from "./pages/Services"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PageNotFound from "./pages/PageNotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SoftwareDevelopement from "./pages/SoftwareDevelopement"

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/services" element={<Services />} />
          <Route path="/software-development" element={<SoftwareDevelopement />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
