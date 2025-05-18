import styles from './Header.module.scss'
import HeaderPhone from './HeaderPhone';
import HeaderTabletMenu from './HeaderTabletMenu';

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
            <article className={styles.header_tablet}>
                <HeaderTabletMenu/>
            </article>
        </>
    )
}

export default HeaderMenu