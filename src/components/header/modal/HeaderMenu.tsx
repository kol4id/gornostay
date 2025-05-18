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
                    <a
                        className={styles.button}
                        href='https://vk.com/club154017977'
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                    >
                        <Image
                            src="/icon_m_vk.svg"
                            alt='vk logo'
                            width={24}
                            height={24}
                        />
                    </a>
                    <a
                        className={styles.button}
                        href='https://t.me/gornostaycenter'
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                    >   
                        <Image
                            src="/icon_m_telegram.svg"
                            alt='tg logo'
                            width={24}
                            height={24}
                        />
                    </a>
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