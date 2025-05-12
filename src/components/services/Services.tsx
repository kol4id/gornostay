import Card, { cardType } from './Card'
import styles from './Services.module.scss'
import reproduction from '../../../public/reproduction_card.jpg'
import stomatology from '../../../public/stomatology_card.jpg'
import surgery from '../../../public/surgery_card.jpg'
import cat_top_right from '../../../public/cat_top_right_card.png'
import cat_middle_left from '../../../public/cat_middle_left_card.png'


const servicesData = [
    { id: 1, type: 'big', img: reproduction, options: ['Кастрация кота', 'Стерилизация', 'Гистерэктомия'], title: 'Репродукция', price: 'от 5500₽', variant: 'image' },
    { id: 2, type: 'small', options: ['Пуревакс', 'Фелиген'], title: 'Вакцинация', price: 'от 3200₽', variant: 'content', backgroundColor: '#D6E4FF' /* Светло-голубой */ },
    { id: 3, type: 'small', img: cat_top_right, alt: 'Мейн-кун', variant: 'imageOnly' }, // Карточка только с изображением
    { id: 4, type: 'small', options: ['Стрижка когтей', 'Чистка ушей'], title: 'Гигиена', price: 'от 350₽', variant: 'content', backgroundColor: '#D6E4FF' },
    { id: 5, type: 'small', img: cat_middle_left, alt: 'Рыжий кот', variant: 'imageOnly' },
    { id: 6, type: 'big', img: stomatology, options: ['Чистка зубов', 'Удаление зуба', 'Обработка рта'], title: 'Стоматология', price: 'от 1500₽', variant: 'image' },
    { id: 7, type: 'big', img: surgery, options: ['Чистка раны', 'Удаление кисты', 'Лапаротомия'], title: 'Хирургия', price: 'от 3500₽', variant: 'image' },
    { id: 8, type: 'small', options: ['Узи живота', 'Рентген снимок'], title: 'Диагностика', price: 'от 350₽', variant: 'content', backgroundColor: '#D6E4FF' },
    { id: 9, type: 'small', options: ['Реанимация', 'Госпитализация'], title: 'Терапия', price: 'от 2500₽', variant: 'content', backgroundColor: '#FFFFFF', textColor: '#000000' /* Для белой карточки с темным текстом */ },
];


const Services = () =>{
    return(
        <>
            <section className={styles.services}>
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
                        />
                    ))}
                </article>
            </section>
        </>
    )
}
export default Services