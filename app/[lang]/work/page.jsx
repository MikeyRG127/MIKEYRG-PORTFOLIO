import "@styles/work.css";
import Image from "next/image";
import localFont from 'next/font/local';
import { getDictionary } from '../dictionaries';
import Link from 'next/link';
import WorkModal from "@components/WorkModal";

const AntonRegular = localFont({
    src: '../../../public/assets/fonts/Anton-Regular.ttf',
    display: 'swap',
    preload: 'false'
})

const ArchitectsDaughterRegular = localFont({
    src: '../../../public/assets/fonts/ArchitectsDaughter-Regular.ttf',
    display: 'swap',
    preload: 'false'
})

const BebasNeueRegular = localFont({
    src: '../../../public/assets/fonts/BebasNeue-Regular.ttf',
    display: 'swap',
    preload: 'false'
})

const KhulaRegular = localFont({
    src: '../../../public/assets/fonts/Khula-Regular.ttf',
    display: 'swap',
    preload: 'false'

})

export default async function work({ params: { lang } }) {
    const dict = await getDictionary(lang) // en
    return (
        <>  <WorkModal isActive={false}></WorkModal>
            <section className={`work ${AntonRegular.className} ${KhulaRegular.className} ${ArchitectsDaughterRegular.className} ${BebasNeueRegular.className}`}>
                <div className="paragraph">
                    <span className="paragraph1">{dict.work.paragraphP1}</span>
                    <span className={`paragraph2 ${lang === "es" ? "spanish" : ""}`}>{dict.work.paragraphP2}</span>
                </div>
                <div className="projects">
                    <div className="project-container">
                        <span className="project-title">CLARO RD</span>

                        <Image
                            src="/assets/images/claro.png"
                            alt="snl"
                            width={1500}
                            height={1500}
                            className="project-image"
                            loading="lazy"
                        />

                    </div>
                    <div className="project-container">
                        <span className="project-title">DILCAR INTERNATIONAL, S.A.</span>


                        <Image
                            src="/assets/images/workdefault.jpg"
                            alt="snl"
                            width={1500}
                            height={1500}
                            className="project-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="project-container">
                        <span className="project-title">SOLUCIONES NET LIBERACIÓN</span>
                        <Image
                            src="/assets/images/workdefault.jpg"
                            alt="snl"
                            width={1500}
                            height={1500}
                            className="project-image"
                            loading="lazy"
                        />
                        <span className="project-footer"></span>
                    </div>
                </div>
                <span className="work-footer">
                    <span className="copyright">©2024</span>
                    <span className="designer">DESIGNER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="designer__item">MikeyRG</span></span>
                </span>
            </section>
        </>

    )
}

