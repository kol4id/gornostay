import styles from './Footer.module.scss';
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterMobile from './FooterMobile';
import FooterSocial from './FooterSocial';

const Footer = () =>{
    return(
        <>
            <footer className={styles.footer}>
                <section className={styles.footer_main}>
                    <section className={styles.footer_main_top}>
                        <article className={styles.footer_main_top_left}>
                            <FooterSocial/>
                            <FooterLinks/>
                        </article>
                        <article className={styles.footer_main_top_right}>
                            <FooterContacts/>
                            <div className={styles.work_time}>
                                <h6>График работы</h6>
                                <p>Ежедневно: 10:00 - 21:00</p>
                            </div>
                        </article>
                    </section>
                    <FooterMobile/>
                    <section className={styles.footer_main_bottom}>
                        <div>
                            made by <a
                                href='https://copylobby.art/'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                copylobby.art
                            </a> 
                        </div>
                        2025
                    </section>
                </section>
            </footer>
        </>
    )
}

export default Footer