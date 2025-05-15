import styles from './Description.module.scss'
import Image from "next/image";

const RightPanel = () =>{
    return(
        <>
            <article className={styles.description_right}>
                <section className={styles.description_right_info}>
                    <nav className={styles.social}>
                        <a
                            href='https://vk.com/club154017977'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/vk_icon_black.svg"
                                alt='circle right'
                                width={56}
                                height={56}
                            />
                        </a>
                        <a
                            href='https://t.me/gornostaycenter'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/tg_icon_black.svg"
                                alt='vk icon'
                                width={56}
                                height={56}
                            />
                        </a>
                    </nav>
                    <div className={styles.work}>
                        <div className={styles.work_time}>
                            <Image
                                src="/icon_time.svg"
                                alt='tg icon'
                                width={24}
                                height={24}
                            />
                            <p>10:00 - 21:00</p>
                        </div>
                        <p>Без выходных</p>
                    </div>
                </section>
                <div>
                    <Image
                        src="/cat_main.png"
                        alt='cute cat'
                        width={520}
                        height={600}
                    />
                </div>
            </article>
        </>
    )
}
export default RightPanel