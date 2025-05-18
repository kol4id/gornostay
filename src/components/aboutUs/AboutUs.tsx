import Image from 'next/image';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.about_us} id='aboutUs'>
        <h2>О нас</h2>
        <section className={styles.about_us_info}>
            <article className={styles.left}>
                <div className={styles.left_text}>
                    <div>
                        <span>В “Горностае“ мы заботимся о здоровье ваших питомцев, оказывая качественные ветеринарные услуги.</span>
                        <span className={styles.p_second}>Опытная команда докторов клиники готова предложить помощь в самых сложных случаях.</span>
                    </div>
                    <ul className={styles.left_text_list}>
                        <li>
                            <Image
                                src="/icon_m_calendar.svg"
                                alt="calendar icon"
                                width={24} 
                                height={24}
                            />   
                            <span className={styles.first}>Оснащены современным оборудованием</span>
                            <span className={styles.second}>Современное оборудование</span>
                        </li>
                        <li>
                            <Image
                                src="/icon_m_favorite_off.svg"
                                alt="favorite icon"
                                width={24} 
                                height={24}
                            />
                            <span className={styles.first}>Команда сертифицированных специалистов</span>
                            <span className={styles.second}>Лучшие специалисты</span>
                        </li>
                        <li>
                            <Image
                                src="/icon_m_folder.svg"
                                alt="folder icon"
                                width={24} 
                                height={24}
                            />
                            <span className={styles.first}>Оказываем полный спектр ветеринарных услуг</span>
                            <span className={styles.second}>Полный спектр услуг</span>
                        </li>
                    </ul>
                </div>
                <a href='#consultation' className={styles.ctaButton}>Оставить заявку</a>
            </article>
            <article className={styles.right}>
                <div className={styles.right_container}>
                    <Image
                        src="/vet_with_cat.jpg"
                        alt="Ветеринар с котом в клинике Горностай"
                        fill
                        className={styles.right_container_image}
                    />
                </div>
                
                <a href='#consultation' className={styles.ctaButton}>Оставить заявку</a>
            </article>
        </section>
        
      <div className={styles.imageContainer}>
        
      </div>
    </section>
  );
};

export default AboutUs;