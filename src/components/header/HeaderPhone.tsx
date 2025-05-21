import styles from './Header.module.scss'
import Image from "next/image";

const HeaderPhone = () =>{
    return(
        <>
            <article className={styles.header_menu_phone}>
                <a href="tel:+79851252534" className={styles.phone}>8 (985) 125-25-34</a>
                <section className={styles.map}>
                    <Image
                        className={styles.map_image}
                        src="/map_point.svg"
                        alt='map point'
                        width={24}
                        height={24}
                    />
                    <a 
                        className={styles.map_address}
                        href='https://yandex.ru/maps/org/gornostay/235157433113/?ll=37.851755%2C55.768490&z=14'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        г. Реутов, Садовый проезд, 4А</a>
                </section>
            </article>
        </>
    )
}
export default HeaderPhone