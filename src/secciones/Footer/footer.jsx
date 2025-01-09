import styles from './footerStyles.module.css';
import { useLanguage } from '../../common/lenguajes.jsx';

function Footer(){
    const { language } = useLanguage();
    return(
        <section id='footer' className={styles.container}>
        <p>
             {language === "en" ? (<> © 2025 Ramiro Parisi. <br /> All rights reserved.</>) : 
             (<> © 2025 Ramiro Parisi. <br /> Todos los derechos reservados.</>)}
        </p>
        </section>
    ); 
}

export default Footer;