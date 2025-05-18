'use client';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss'
import Image from "next/image";
import Modal from '../modal/Modal';
import HeaderModalMenu from './modal/HeaderModalMenu';

const HeaderTabletMenu = () =>{
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setIsOpen(false)
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setIsOpen]);

    return(
        <>
            <section
                className={styles.buttons_menu}
            >
                <a className={styles.button} href='#consultation'>
                    <Image
                        src="/icon_m_phone.svg"
                        alt='phone logo'
                        width={24}
                        height={24}
                    />
                </a>
            </section>
            <button 
                className={styles.button_menu}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    src='/icon_m_menu.svg'
                    alt='menu logo'
                    width={24}
                    height={24}
                />
            </button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                overlayClickClose={false}
            >
                <HeaderModalMenu onClose={() => setIsOpen(false)}/>
            </Modal>
        </>
    )
}
export default HeaderTabletMenu