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
        </>
    )
}
export default Description