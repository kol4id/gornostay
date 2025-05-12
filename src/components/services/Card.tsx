import { StaticImageData } from "next/image";
import styles from './Services.module.scss'
import { FC } from "react";

export type cardType = 'small' | 'big';

interface IProps{
    type: cardType,
    price?: string,
    title?: string,
    options?: string[],
    img?: StaticImageData,
    alt?: string,
}

const Card: FC<IProps> = (props) =>{

    const cardStyle = props.type == 'small' ? styles.card_small : styles.card_big;
    const listStyle = props.type == 'small' ? styles.title_option_vert : styles.title_option_horz;

    return(
        <>
            <article className={cardStyle} 
                style={{
                    backgroundImage: props.img ? `url(${props.img.src})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {props.price && <p className={styles.price}>{props.price}</p>}
                <section className={styles.title}>
                    <h5>{props.title}</h5>
                    <ul className={listStyle}>
                        {props.options?.map(option => 
                            <p key={option}>{option}</p>
                        )}
                    </ul>
                </section>
            </article>
        </>
    )
}  

export default Card