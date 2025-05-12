import Image from "next/image";
import styles from './Header.module.scss'

const Title = () =>{
    return(
        <>
            <article className={styles.header_title}>
                <Image
                    src="/logo.svg"
                    alt='app logo'
                    width={60}
                    height={60}
                />
                <h3>Горностай</h3>
            </article>
        </>
    )
}
export default Title