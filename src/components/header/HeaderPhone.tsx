import styles from './Header.module.scss'
import Image from "next/image";

const HeaderPhone = () =>{
    return(
        <>
            <article className={styles.header_menu_phone}>
                <p className={styles.phone}>8 (958) 125-25-34</p>
                <section className={styles.map}>
                    <Image
                        className={styles.map_image}
                        src="/map_point.svg"
                        alt='map point'
                        width={24}
                        height={24}
                    />
                    <p className={styles.map_address}>г. Реутов, Садовый проезд, 4А</p>
                </section>
            </article>
        </>
    )
}
export default HeaderPhone