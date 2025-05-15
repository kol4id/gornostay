import Image from 'next/image';
import styles from './Sertificats.module.scss';

const sertificatList = [
    {imgUrl: '/gipokrat.png', linkTo: '/Медаль гиппократа.jpg'},
    {imgUrl: '/medvet.png', linkTo: '/Медвет.pdf'},
    {imgUrl: '/SPB_konf.png', linkTo: '/Санкт-Петербургская конференция.pdf'},
    {imgUrl: '/mitina.png', linkTo: '/Митино.pdf'},
    {imgUrl: '/NVC.png', linkTo: '/НВК.pdf'},
    {imgUrl: '/nmic_oncology.png', linkTo: '/НМИЦ Онкологии.pdf'},
    {imgUrl: '/vitar.png', linkTo: '/Витар.pdf'},
    {imgUrl: '/ural_biovet.png', linkTo: '/УралБИОВЕТ.pdf'},
]

const Sertificats = () =>{
    return(
        <>
            <section className={styles.sertificats} id="sertificates">
                <h2>Сертификаты</h2>
                <article className={styles.sertificats_list}>
                    {
                        sertificatList.map(sert=>
                            <a 
                                href={sert.linkTo}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={sert.linkTo}
                            >
                                <Image
                                    className={styles.card_image}
                                    src={sert.imgUrl}
                                    alt="sertificat icon"
                                    width={256} 
                                    height={256}
                                /> 
                            </a>
                        )
                    }
                </article>
            </section>
        </>
    )
}

export default Sertificats