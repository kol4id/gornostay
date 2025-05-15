import DoctorCard from './DoctorCard';
import styles from './OurDoctors.module.scss'


const docList = [
    {imgUrl: '/e_kainova.jpg', docName: 'Елена Кайнова', docPosition: 'Главный врач'},
    {imgUrl: '/o_shinkova.jpg', docName: 'Ольга Шинкова', docPosition: 'Ветеринар-фельдшер'},
    {imgUrl: '/l_kozlova.jpg', docName: 'Людмила Козлова', docPosition: 'Ветеринар-терапевт'},
    {imgUrl: '/t_bogdanova.jpg', docName: 'Татьяна Богданова', docPosition: 'Ветеринар-диетолог'},
]


const OurDoctors = () =>{
    return(
        <>
            <section className={styles.our_doctors} id='ourDoctors'>
                <h2>Наши доктора</h2>
                <article className={styles.our_doctors_info}>
                    {docList.map(doc =>
                        <DoctorCard key={doc.docName} imgUrl={doc.imgUrl} docName={doc.docName} docPosition={doc.docPosition}/>
                    )}
                </article>
            </section>
        </>
    )
}

export default OurDoctors;