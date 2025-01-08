import styles from './footerStyles.module.css';

function Footer(){
    return(
        <section id='footer' className={styles.container}>
            <p>
                &copy; 2025 Ramiro Parisi .<br/>
                Todos los derechos reservados.
            </p>
        </section>
    ); 
}

export default Footer;