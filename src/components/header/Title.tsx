import Image from "next/image";
import styles from './Header.module.scss'

const Title = () =>{
    return(
        <>
            <article className={styles.header_title}>
                <section className={styles.container}>
                    <Image
                        src="/logo.svg"
                        alt='app logo'
                        fill
                    />
                </section>
                <h3>Горностай</h3>
            </article>
        </>
    )
}
export default Title