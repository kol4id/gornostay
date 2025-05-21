import Card, { cardType } from './Card'
import styles from './Services.module.scss'
import reproduction from '../../../public/reproduction_card.jpg'
import stomatology from '../../../public/stomatology_card.jpg'
import surgery from '../../../public/surgery_card.jpg'
import cat_top_right from '../../../public/cat_top_right_card.png'
import cat_middle_left from '../../../public/cat_middle_left_card.png'
import ServiceMobile from './ServicesMobile'
import Image from 'next/image';

const servicesData = [
    { id: 1, type: 'big', img: surgery, options: ['Кастрация', 'Стерилизация', 'Травматология'], title: 'Хирургия', price: 'от 5500₽' },
    { id: 2, type: 'small', options: ['Осмотр врача', 'Прием специалиста'], title: 'Терапия', price: 'от 3200₽'},
    { id: 3, type: 'small', img: cat_top_right, alt: 'Мейн-кун'}, // Карточка только с изображением
    { id: 4, type: 'small', options: ['Все виды анализов'], title: 'Лабораторная Диагностика', price: 'от 350₽'},
    { id: 5, type: 'small', img: cat_middle_left, alt: 'Рыжий кот', variant: 'imageOnly' },
    { id: 6, type: 'big', img: reproduction, options: ['Ведение беременности', 'Кесарево сечение'], title: 'Репродукция', price: 'от 3500₽'},
    { id: 7, type: 'big', img: stomatology, options: ['Экстракция зуба', 'Санация полости рта'], title: 'Стоматология', price: 'от 1500₽'},
    { id: 8, type: 'small', options: ['Узи диагностика', 'Рентгендиагностика'], title: 'Визуальная Диагностика', price: 'от 350₽'},
    // { id: 9, type: 'small', options: ['Реанимация', 'Госпитализация'], title: 'Терапия', price: 'от 2500₽', isWhite: true },
];


const Services = () =>{
    return(
        <>
            <section className={styles.services} id='services'>
                <h2>Услуги</h2>
                <article className={styles.services_list}>
                    {servicesData.map(service => (
                        <Card
                            key={service.id}
                            type={service.type as cardType}
                            img={service.img}
                            alt={service.alt}
                            options={service.options}
                            title={service.title}
                            price={service.price}
                            // isWhite={service.isWhite}
                        />
                    ))}
                    <a className={styles.card_link}
                        href='https://docs.google.com/spreadsheets/d/1gjNa-tmdjCztoPZDHwF_OIPlCnEbF-YUZN5j_vGeL4U/edit?usp=sharing'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <section className={styles.card_link_inner}>
                            <h5>Все услуги</h5>
                            <div className={styles.container}>
                                <Image
                                    src='/icon_circle_downright.svg'
                                    alt='arrow icon'
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </section>
                    </a>
                </article>
                <ServiceMobile/>
            </section>
        </>
    )
}
export default Services