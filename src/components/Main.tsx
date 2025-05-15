import AboutUs from './aboutUs/AboutUs'
import Consultation from './consultation/Consultation'
import Description from './descriptionPC/Description'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Main.module.scss'
import OurDoctors from './ourDoctors/OurDoctors'
import Sertificats from './sertificats/Sertificats'
import Services from './services/Services'

const Main = () =>{
    return(
        <>
            <section className={styles.main_section}>
                <Header/>
                <Description/>
                <Services/>
                <AboutUs/>
                <OurDoctors/>
                <Sertificats/>
                <Consultation/>
                <Footer/>
            </section>
        </>
    )
}

export default Main