import {useState} from "react"
import './App.css';
import NavBar from './Componentes/NavBar';
import PerfilPage from './Pages/PerfilPage';
import Footer from "./Componentes/Footer";
import Experiencia from "./Pages/ExperienciaPage";
import Portafolio from "./Pages/PortafolioPage";
import Estudios from "./Pages/EstudiosPage";


function App() {
  const [tab, setTab] = useState('aboutMe') 

  return (
    <div>
      <NavBar tab={tab} setTab={setTab}/>
      
      {tab === "aboutMe" && <PerfilPage/>}

      {tab === "study" && <Estudios/>}

      {tab === "experiences" && <Experiencia/>}
      
      {tab === "projects" && <Portafolio/>}
      
      <Footer/>
    </div>
    
  )
}




export default App;
