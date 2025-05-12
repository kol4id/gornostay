import styles from './Header.module.scss'
import HeaderPhone from './HeaderPhone';

const HeaderMenu = () =>{
    return(
        <>
            <article className={styles.header_menu}>
                <nav>
                    <button
                        
                    >
                        Услуги
                    </button>
                    <button
                        
                    >
                        Специалисты
                    </button>
                    <button
                        
                    >
                        О нас
                    </button>
                </nav>
                <HeaderPhone/>
            </article>
        </>
    )
}

export default HeaderMenu