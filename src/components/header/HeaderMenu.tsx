import styles from './Header.module.scss'
import HeaderPhone from './HeaderPhone';

const HeaderMenu = () =>{
    return(
        <>
            <article className={styles.header_menu}>
                <nav>
                    <a href='#services'>Услуги</a>
                    <a href='#ourDoctors'>Специалисты</a>
                    <a href='#aboutUs'>О нас</a>
                </nav>
                <HeaderPhone/>
            </article>
        </>
    )
}

export default HeaderMenu