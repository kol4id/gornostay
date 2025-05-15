import Image from 'next/image';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.about_us} id='aboutUs'>
        <h2>О нас</h2>
        <section className={styles.about_us_info}>
            <article className={styles.left}>
                <div className={styles.left_text}>
                    <p>В “Горностае“ мы заботимся о здоровье ваших питомцев, оказывая качественные ветеринарные услуги. Опытная команда докторов клиники готова предложить помощь в самых сложных случаях.</p>
                    <ul className={styles.left_text_list}>
                        <li>
                            <Image
                                src="/icon_m_calendar.svg"
                                alt="calendar icon"
                                width={24} 
                                height={24}
                            />   
                            Оснащены современным оборудованием
                        </li>
                        <li>
                            <Image
                                src="/icon_m_favorite_off.svg"
                                alt="favorite icon"
                                width={24} 
                                height={24}
                            />   
                            Команда сертифицированных специалистов
                        </li>
                        <li>
                            <Image
                                src="/icon_m_folder.svg"
                                alt="folder icon"
                                width={24} 
                                height={24}
                            />   
                            Оказываем полный спектр ветеринарных услуг
                        </li>
                    </ul>
                </div>
                <a href='#consultation' className={styles.ctaButton}>Оставить заявку</a>
            </article>
            <article className={styles.right}>
                <Image
                    src="/vet_with_cat.jpg"
                    alt="Ветеринар с котом в клинике Горностай"
                    width={584} 
                    height={443}
                    className={styles.right_image}
                />
            </article>
        </section>
        
      <div className={styles.imageContainer}>
        
      </div>
    </section>
  );
};

export default AboutUs;