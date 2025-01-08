import './App.css';
import Perfil from './secciones/perfil/profile.jsx';
import Habilidades from './secciones/Habilidades/Habilidades.jsx';
import Contacto from './secciones/Contacto/contacto.jsx';
import Footer from './secciones/Footer/footer.jsx';

function App() {
  return (
    <>
      <Perfil />
      <Habilidades />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;