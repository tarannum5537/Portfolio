import { Route, Routes } from "react-router-dom"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import HeroSection from "./components/Hero-section/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Projects/Project"
import Work from "./components/Work/Allworks.jsx"
import Details from "./components/DetailProject/Details"



const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <Work />
              <Project />
              <Footer />
            </>
          }
        />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </main>
  );
}

export default App
