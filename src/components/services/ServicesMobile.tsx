import Card from "./Card";
import styles from './Services.module.scss'
import reproduction from '../../../public/reproduction_card.jpg'
import stomatology from '../../../public/stomatology_card.jpg'
import surgery from '../../../public/surgery_card.jpg'

const servicesData = [
    { id: 1, type: 'big', img: reproduction, options: ['Кастрация кота', 'Стерилизация'], title: 'Репродукция', price: 'от 5500₽', titleColor: '#FFFFFFDE' },
    { id: 2, type: 'small', options: ['Пуревакс', 'Фелиген'], title: 'Вакцинация', price: 'от 3200₽'},
    { id: 6, type: 'big', img: stomatology, options: ['Чистка зубов', 'Удаление зуба'], title: 'Стоматология', price: 'от 1500₽', titleColor: '#FFFFFFDE'},
    { id: 4, type: 'small', options: ['Стрижка когтей', 'Чистка ушей'], title: 'Гигиена', price: 'от 350₽'},
    { id: 7, type: 'big', img: surgery, options: ['Чистка раны', 'Удаление кисты'], title: 'Хирургия', price: 'от 3500₽', titleColor: '#FFFFFFDE'},
    { id: 8, type: 'small', options: ['Узи живота', 'Рентген снимок'], title: 'Диагностика', price: 'от 350₽'},
    { id: 9, type: 'small', options: ['Реанимация', 'Госпитализация'], title: 'Терапия', price: 'от 2500₽', isWhite: true },
];

const ServiceMobile = () =>{
    return(
        <>
            <article className={styles.services_list_mobile}>
                {servicesData.map(service => (
                    <Card
                        key={service.id}
                        type={'small'}
                        img={service.img}
                        options={service.options}
                        title={service.title}
                        price={service.price}
                        isWhite={service.isWhite}
                        titleColor={service.titleColor}
                    />
                ))}
            </article>
        </>
    )
}
export default ServiceMobile