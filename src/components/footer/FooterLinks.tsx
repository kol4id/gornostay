import styles from './Footer.module.scss';

const FooterLinks = () =>{
    return(
        <>
            <div className={styles.links}>
                <h6>Клиника</h6>
                <a href='#services'>Услуги</a>
                <a href='#aboutUs'>О нас</a>
                <a href='#ourDoctors'>Наши доктора</a>
                <a href='#sertificates'>Сертификаты</a>
            </div>
        </>
    )
}
export default FooterLinks