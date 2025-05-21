import { FC } from 'react';
import styles from './OurDoctors.module.scss'
import Image from 'next/image';

interface IProps{
    imgUrl: string;
    docName: string;
    docPosition: string;
    // docSecPosition: string;
}

const DoctorCard: FC<IProps> = (props) =>{
    return(
        <>
            <section className={styles.card}>
                <div className={styles.container}>
                    <Image
                        className={styles.container_image}
                        src={props.imgUrl}
                        alt={props.docName}
                        fill
                    /> 
                </div>
                <div className={styles.card_info}>
                    <h6>{props.docName}</h6>
                    <p>{props.docPosition}</p>
                </div>
            </section>
        </>
    )
}

export default DoctorCard