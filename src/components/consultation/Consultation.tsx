import Image from 'next/image';
import styles from './Consultation.module.scss';
import ConsultationForm from './ConsultationForm';

const Consultation = () =>{
    return(
        <>
            <section className={styles.consultation} id='consultation'>
                <article className={styles.consultation_left}>
                    <ConsultationForm/>
                </article>
                <article className={styles.consultation_right}>
                    <div className={styles.container}>
                        <Image
                            className={styles.container_image}
                            src='/consultation.jpg'
                            alt="consultation icon"
                            fill
                        /> 
                    </div>
                    
                </article>
            </section>
        </>
    )
}  

export default Consultation