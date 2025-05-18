import { FC } from "react"
import styles from './HeaderModalMenu.module.scss'
import Title from "../Title"
import { motion } from "framer-motion"
import HeaderMenu from "./HeaderMenu"
import Image from "next/image";

interface IProps{
    onClose: () => void
}

const HeaderModalMenu: FC<IProps> = ({onClose}) =>{
    return(
        <>
            <motion.div
                initial={{ opacity: 0.1, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{
                    duration: 0.15,  
                    ease: "easeIn", 
                }}
            >
                <main className={styles.menu}>
                    <header className={styles.header}>
                        <Title/>
                        <HeaderMenu onClose={onClose}/>
                    </header>
                    <section className={styles.info}>
                        <div className={styles.links}>
                            <h6>Клиника</h6>
                            <a href='#services'>Услуги</a>
                            <a href='#aboutUs'>О нас</a>
                            <a href='#ourDoctors'>Наши доктора</a>
                            <a href='#sertificates'>Сертификаты</a>
                        </div>
                        <article className={styles.phone}>
                            <p className={styles.phone}>8 (958) 125-25-34</p>
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
                                    г. Реутов, Садовый проезд, 4А <br/>
                                    Ежедневно: 10:00-21:00
                                </a>
                            </section>
                        </article>
                        <a href='#consultation' className={styles.service}>Записаться на прием</a>
                    </section>
                </main>
            </motion.div>
        </>
    )
}   

export default HeaderModalMenu