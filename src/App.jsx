import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Interests from "./components/Interests.jsx"

function App() {
  
  return (
    <div className="container">
      <img src="https://melvinosportfolio.wordpress.com/wp-content/uploads/2024/06/melvino-1.jpg?w=768" alt="Insert image here" className="container__img"/>
      <div className='card'>
        <Contact />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}

export default App
