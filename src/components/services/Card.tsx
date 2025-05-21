import { StaticImageData } from "next/image";
import styles from './Services.module.scss'
import { FC } from "react";

export type cardType = 'small' | 'big';

interface IProps{
    type?: cardType,
    price?: string,
    title?: string,
    options?: string[],
    img?: StaticImageData,
    alt?: string,
    isWhite?: boolean,
    titleColor?: string
}

const Card: FC<IProps> = (props) =>{

    const color = props.isWhite ? 'white' : '';
    const background = props.isWhite ? '#1D2025' : '';
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
                    backgroundColor: props.isWhite ? 'transparent' : '',
                    border: props.isWhite ? '1px solid #1D202540' : '',
                }}
            >
                <div></div>
                {/* {props.price && <p 
                    style={{
                        backgroundColor: background,
                        color: color
                    }}
                    className={styles.price}>
                        {props.price}
                    </p>} */}
                <section className={styles.title}>
                    <h5
                        style={{color: props.titleColor ?? ''}}
                    >{props.title}</h5>
                    <ul className={listStyle}>
                        {props.options?.map(option => 
                            <p 
                                style={{
                                    backgroundColor: background,
                                    color: color
                                }}
                                key={option}
                            >{option}</p>
                        )}
                    </ul>
                </section>
            </article>
        </>
    )
}  

export default Card