import styles from './Footer.module.scss';

const FooterContacts = () =>{
    return(
        <>
            <div className={styles.contacts}>
                <h6>Контакты</h6>
                <p> г. Реутов, <br />
                    Садовый проезд, 4А
                </p>
                <p>gornostaycenter@mail.ru</p>
                <p>8 (985) 125-25-34</p>
            </div>
        </>
    )
}
export default FooterContacts