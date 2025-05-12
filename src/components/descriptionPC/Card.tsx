import { FC } from 'react';
import styles from './Description.module.scss'
import Image from "next/image";

interface IProps{
    title: string,
    description: string,
    scrollTo?: string,
    linkTo?: string,
}

const Card: FC<IProps> = (props) =>{
    return(
        <>
            <article className={styles.card}>
                <div className={styles.card_title}>
                    <h6>{props.title}</h6>
                    <p>{props.description}</p>
                </div>
                <div className={styles.card_icon}>
                    <Image
                        src="/icon_circle_right.svg"
                        alt='circle right'
                        width={40}
                        height={40}
                    />
                </div>
            </article>
        </>
    )
}
export default Card