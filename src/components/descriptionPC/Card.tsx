"use client";
import { FC } from 'react';
import styles from './Description.module.scss'
import Image from "next/image";
import { smoothScrollToId } from '@/utils/smoothScrollToId';

interface IProps{
    title: string,
    description: string,
    scrollTo?: string,
    linkTo?: string,
}

const Card: FC<IProps> = (props) =>{

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        if(props.scrollTo != undefined){
            event.preventDefault();
            smoothScrollToId('services', 200);
        }
    }

    return(
        <>
            <a
                tabIndex={0}
                onClick={handleClick}
                className={styles.card}
                href={props.linkTo ?? props.scrollTo}
                target="_blank"
                rel="noopener noreferrer"
            >
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
            </a>
        </>
    )
}
export default Card