import { FC } from 'react';
// import styles from '../Header.module.scss'
import styles from './HeaderModalMenu.module.scss'
import Image from "next/image";

interface IProps{
    onClose: () => void
}

const HeaderMenu: FC<IProps> = ({onClose}) =>{
    return(
        <>
            <article className={styles.header_tablet}>
                <section
                    className={styles.buttons_menu}
                >
                    <button className={styles.button}>
                        <Image
                            src="/icon_m_vk.svg"
                            alt='vk logo'
                            width={24}
                            height={24}
                        />
                    </button>
                    <button className={styles.button}>
                        <Image
                            src="/icon_m_telegram.svg"
                            alt='tg logo'
                            width={24}
                            height={24}
                        />
                    </button>
                </section>
                <button 
                    className={styles.button_menu}
                    onClick={() => onClose()}
                >
                    <Image
                        src='/icon_m_close.svg'
                        alt='menu logo'
                        width={24}
                        height={24}
                    />
            </button>
            </article>
        </>
    )
}
export default HeaderMenu