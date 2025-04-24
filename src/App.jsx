import { useState } from "react"
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from "./components/Navbar"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"
import { Reviews } from "./components/sections/Reviews"
import { Experience } from "./components/sections/Experience"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>

      {/* Main App Content */}
      <div class="absolute top-0 z-[-2] min-h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } relative z-10`}
      >
        <Navbar />
        <Home isLoaded={isLoaded} />
        <About />
        <Projects />
        <Experience isLoaded={isLoaded}/>
        <Reviews />
        <Contact />
      </div>
      </div>
    </>
  )
}

export default App
