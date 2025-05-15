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
                    <Image
                        className={styles.image}
                        src='/consultation.jpg'
                        alt="consultation icon"
                        width={584} 
                        height={448}
                    /> 
                </article>
            </section>
        </>
    )
}  

export default Consultation