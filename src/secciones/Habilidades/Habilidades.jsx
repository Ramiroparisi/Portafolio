import ListaHabilidades from '../../common/listaHabilidades.jsx';
import styles from '../Habilidades/habilidadesStyles.module.css';

import Reactjs from '../../assets/react.png';
import HTML from '../../assets/html5.svg';
import CSS from '../../assets/css3.svg';
import Bootstrap from '../../assets/bootstrap-svgrepo-com.svg';
import Javascript from '../../assets/javascript.svg';
import Typescript from '../../assets/typescript.svg';
import Node from '../../assets/node-js.svg';
import Spring from '../../assets/spring.svg';
import Java from '../../assets/Java.png';
import Express from '../../assets/express.svg';
import MongoDB from '../../assets/MongoDB.png';
import SQL from '../../assets/sql.svg';

function Habilidades() {
    return (
        <section id="habilidades" className={styles.container}>
            <h1 className='sectionTitle'> Habilidades </h1>
            <div className={styles.listaHabilidades}>
                <ListaHabilidades src={Reactjs} habilidad="React" alt="Icono de react" />
                <ListaHabilidades src={HTML} habilidad="HTML"/>
                <ListaHabilidades src={CSS} habilidad="CSS"/>
                <ListaHabilidades src={Bootstrap} habilidad="Bootstrap"/>
                <ListaHabilidades src={Javascript} habilidad="Javascript"/>
                <ListaHabilidades src={Typescript} habilidad="Typescript"/>
                <ListaHabilidades src={Node} habilidad="Node"/>
                <ListaHabilidades src={Spring} habilidad="Spring"/>
                <ListaHabilidades src={Java} habilidad="Java"/>
                <ListaHabilidades src={Express} habilidad="Express"/>
                <ListaHabilidades src={MongoDB} habilidad="MongoDB"/>
                <ListaHabilidades src={SQL} habilidad="SQL"/>
            </div>
        </section>
    )
}
export default Habilidades;