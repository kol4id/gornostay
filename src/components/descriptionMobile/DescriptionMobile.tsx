import Card from '../descriptionPC/Card';
import styles from './DescriptionMobile.module.scss'
import Image from "next/image";

const DescriptionMobile = () =>{
    return(
        <>
            <section className={styles.description}>
                <h4>С заботой о ваших питомцах</h4>
                <article className={styles.description_info}>
                    <div className={styles.work}>
                        <div className={styles.work_time}>
                            <Image
                                src="/icon_time.svg"
                                alt='tg icon'
                                width={24}
                                height={24}
                            />
                            <p>10:00 - 21:00</p>
                        </div>
                        <p>Без выходных</p>
                    </div>
                    <div className={styles.appointment}>
                        <div className={styles.container}>
                            <Image
                                className={styles.image}
                                src="/cat_main.png"
                                alt='cute cat'
                                fill
                            />
                        </div>
                        <a href='#consultation'>Записаться на прием</a>
                    </div>
                </article>
                <div className={styles.cards}>
                    <Card 
                        title='35+ видов услуг' 
                        description='Предлагаем полный спектр услуг для вашего питомца.'
                        scrollTo='#services'
                    />
                    <Card 
                        title='В добрые руки' 
                        description='В нашей ветклинике есть животные, нуждающиеся в семье.'
                        linkTo='https://t.me/gornostaycenter'
                    />
                </div>
            </section>
        </>
    )
}
export default DescriptionMobile