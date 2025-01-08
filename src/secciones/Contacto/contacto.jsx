import styles from './contactoStyles.module.css';

function Contacto() {
    return(
        <section id="contacto" className={styles.container}>
            <h1 className='sectionTitle'>Contacto </h1>
            <form action="https://formspree.io/f/mdkkpqyw" method="post">
                <div className="formGroup">
                    <label htmlFor="nombre" hidden>
                        Nombre
                    </label>
                    <input type="text" 
                    name="nombre" 
                    id="nombre" 
                    placeholder='Nombre'
                    required 
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Email'
                    required 
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="mensaje" hidden>
                        Mensaje
                    </label>
                    <textarea
                    name="mensaje" 
                    id="mensaje" 
                    placeholder='Mensaje'
                    required> 
                    </textarea>
                </div>
                <input className= "hover btn" type="submit" value="Enviar"/>
            </form>
        </section>
    )
}

export default Contacto;