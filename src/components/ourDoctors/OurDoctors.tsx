'use client';
import { useEffect, useRef, useState } from 'react';
import DoctorCard from './DoctorCard';
import styles from './OurDoctors.module.scss'
import Image from 'next/image';


const docList = [
    {imgUrl: '/e_kainova.jpg', docName: 'Елена Кайнова', docPosition: 'Хирург, кардиолог, нефролог, специалист УЗИ-диагностики'},
    {imgUrl: '/o_shinkova.jpg', docName: 'Ольга Шинкова', docPosition: 'Ветеринарный врач, специалист УЗИ-диагностики'},
    {imgUrl: '/l_kozlova.jpg', docName: 'Людмила Козлова', docPosition: 'Ветеринарный врач, дерматолог'},
    {imgUrl: '/i_makarova.jpg', docName: 'Инна Макарова', docPosition: 'Ветеринарный онколог, цитолог, патоморфолог'},
    {imgUrl: '/t_bogdanova.jpg', docName: 'Татьяна Богданова', docPosition: 'Ветеринарный диетолог'},
]

const OurDoctors = () =>{
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    // const [canScrollRight, setCanScrollRight] = useState(false);

    const updateButtons = () => {
        const el = containerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        // setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }

    //true -> scroll right
    const scroll = (direction: boolean) => {
        containerRef.current?.scrollBy({
            left: !direction ? -350 : 350,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        updateButtons();
        el.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);

        return () => {
            el.removeEventListener("scroll", updateButtons);
            window.removeEventListener("resize", updateButtons);
        };
    }, []);


    return(
        <>
            <section className={styles.our_doctors} id='ourDoctors'>
                <div className={styles.our_doctors_title}>
                    <h2>Наши доктора</h2>
                    <div className={styles.buttons}>
                        <button
                            className="scroll-button left"
                            onClick={() => scroll(false)}
                            disabled={!canScrollLeft}
                        >
                            <Image
                                style={{opacity: !canScrollLeft ? 0.5 : 1}}
                                src='/icon_circle_left.svg'
                                alt='circle to left'
                                width={40}
                                height={40}
                            /> 
                        </button>
                        <button
                            className="scroll-button right"
                            onClick={() => scroll(true)}
                            disabled={canScrollLeft}
                        >
                            <Image
                                style={{opacity: canScrollLeft ? 0.5 : 1}}
                                src='/icon_circle_right.svg'
                                alt='circle to right'
                                width={40}
                                height={40}
                            /> 
                        </button>
                    </div>
                </div>
                
                <article className={styles.our_doctors_info} ref={containerRef}>
                    {docList.map(doc =>
                        <DoctorCard key={doc.docName} imgUrl={doc.imgUrl} docName={doc.docName} docPosition={doc.docPosition}/>
                    )}
                </article>
            </section>
        </>
    )
}

export default OurDoctors;