import DescriptionMobile from '../descriptionMobile/DescriptionMobile'
import styles from './Description.module.scss'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const Description = () =>{
    return(
        <>
            <section className={styles.description}>
                <LeftPanel/>
                <RightPanel/>
            </section>
            <section className={styles.description_mobile}>
                <DescriptionMobile/>
            </section>
        </>
    )
}
export default Description