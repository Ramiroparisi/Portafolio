import styles from './profileStyles.module.css';
import perfilLight from '../../assets/perfil-Photoroom.png';
import perfilDark from '../../assets/perfil-Photoroom.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from '../../assets/RamiroParisi_CV.pdf';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';

import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import { useTheme} from '../../common/themeContext.jsx';

function Perfil() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const perfil = theme === 'light' ? perfilLight : perfilDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return <section id="perfil" className={styles.container}> 
    <div className={styles.colorModeContainer}> 
      <img 
        className={styles.perfil} 
        src={perfil} 
        alt="Foto de perfil" 
      />

      <img 
        className={styles.colorMode} 
        src={themeIcon} 
        alt="Icono de cambio de tema"
        onClick={toggleTheme} 
      />

    </div>

    <div className={styles.info}>
      <h1>
        Ramiro <br/> Parisi  
      </h1>
      <h2>
        Fullstack Developer
      </h2>
      <span>
        <a href="https://github.com/Ramiroparisi">
          <img src={githubIcon} alt="Icono de Github"/>
        </a>
        <a href="https://www.linkedin.com/in/ramiro-parisi-5a2bb8230/">
          <img src={linkedinIcon} alt="Icono de Linkedin"/>
        </a>
      </span>
      <p className={styles.description}> 
        Me encanta aprender y probar diversas teconologías, también me gustan las buenas prácticas 
        y los patrones de diseño.
        </p>
      <a href={CV} download>
        <button className='hover'>
        CV
        </button>
      </a>
    </div>
  </section>
}

export default Perfil;