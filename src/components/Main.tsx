import Description from './descriptionPC/Description'
import Header from './header/Header'
import styles from './Main.module.scss'
import Services from './services/Services'

const Main = () =>{
    return(
        <>
            <section className={styles.main_section}>
                <Header/>
                <Description/>
                <Services/>
            </section>
        </>
    )
}

export default Main