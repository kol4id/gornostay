import styles from './Footer.module.scss';
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

const Footer = () =>{
    return(
        <>
            <footer className={styles.footer}>
                <section className={styles.footer_top}>
                    <article className={styles.footer_top_left}>
                        <FooterSocial/>
                        <FooterLinks/>
                    </article>
                    <article className={styles.footer_top_right}>
                        <FooterContacts/>
                        <div className={styles.work_time}>
                            <h6>График работы</h6>
                            <p>Ежедневно: 10:00 - 21:00</p>
                        </div>
                    </article>
                </section>
                <section className={styles.footer_bottom}>
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
            </footer>
        </>
    )
}

export default Footer