import Title from "../header/Title"
import Image from 'next/image';
import styles from './Footer.module.scss';

const FooterSocial = () =>{
    return(
        <>
            <div className={styles.social}>
                <Title/>
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
            </div>
        </>
    )
}

export default FooterSocial