import Image from "next/image";
import styles from './Footer.module.scss';

const FooterMobile = () =>{
    return(
        <>
            <section className={styles.footer_mobile}>
                <article className={styles.footer_mobile_title}>
                    <Image
                        src="/logo.svg"
                        alt='app logo'
                        width={60}
                        height={60}
                    />
                    <h3>Горностай</h3>
                </article>
                <div className={styles.contacts}>
                    <h6>Контакты</h6>
                    <p> г. Реутов, Садовый проезд, 4А</p>
                    <p>gornostaycenter@mail.ru</p>
                    <p>8 (985) 125-25-34</p>
                </div>
                <div className={styles.work_time}>
                    <h6>График работы</h6>
                    <p>Ежедневно: 10:00 - 21:00</p>
                </div>
                <nav className={styles.social_links}>
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
                        href='https://vk.com/club154017977'
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
            </section>
        </>
    )
}

export default FooterMobile