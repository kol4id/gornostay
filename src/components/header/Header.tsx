import styles from './Header.module.scss'
import HeaderMenu from './HeaderMenu'
import Title from './Title'


const Header = () =>{
    return(
        <>
            <header className={styles.header}>
                <Title/>
                <HeaderMenu/>
            </header>
        </>
    )
}

export default Header