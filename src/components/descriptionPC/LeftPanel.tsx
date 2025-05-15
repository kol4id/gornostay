import Card from './Card'
import styles from './Description.module.scss'

const LeftPanel = () =>{
    return(
        <>
            <article className={styles.description_left}>
                <section className={styles.description_left_title}>
                    <h1>С заботой о ваших питомцах</h1>
                    <a href='#consultation'>Записаться на прием</a>
                </section>
                <section className={styles.description_left_cards}>
                    <Card 
                        title='35+ видов услуг' 
                        description='От прививок до ухода за зубами — наша клиника предлагает полный спектр услуг для вашего питомца.'
                        scrollTo='#services'
                    />
                    <Card 
                        title='В добрые руки' 
                        description='В нашей ветклинике есть животные, нуждающиеся в новом доме. Заберите их, подарите им вашу любовь!'
                        linkTo='https://t.me/gornostaycenter'
                    />
                </section>
            </article>
        </>
    )
}

export default LeftPanel