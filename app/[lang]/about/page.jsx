import "@styles/about.css";
import Image from "next/image";
import localFont from 'next/font/local';
import { getDictionary } from '../dictionaries';

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


export default async function about({ params: { lang } }) {
    const dict = await getDictionary(lang) // en

    return (
        <section className={`about-section ${AntonRegular.className} ${KhulaRegular.className} ${ArchitectsDaughterRegular.className} ${BebasNeueRegular.className}`}>

            <span className="about-paragraph">
                {dict.about.aboutP1}
            </span>

            <span className={`about-paragraph2 ${lang === "es" ? "spanish" : ""}`}>
                {dict.about.aboutP2}
            </span>
            <span className="about-paragraph3">
                {dict.about.aboutP3}
            </span>
            <span className="about-paragraph4">
                {dict.about.aboutP4}
            </span>
            <span className={`about-paragraph5 ${lang === "es" ? "spanish" : ""}`}>
                {dict.about.aboutP5}
            </span>
            <div className="work-experience">
                <span className="work-experience__title">{dict.about.experienceP1}</span>
                <span className={`work-experience__title2 ${lang === "es" ? "spanish" : ""}`}>{dict.about.experienceP2}</span>
                <div className="work-experience__items">
                    <span className="role">{dict.about.experienceP3}</span>
                    <span className="company">{dict.about.experienceP4}</span>
                    <span className="years">{dict.about.experienceP5}</span>
                    <span className="years2">{dict.about.experienceP6}</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">{dict.about.experienceP7}</span>
                    <span className="company">{dict.about.experienceP8}</span>
                    <span className="years">{dict.about.experienceP9}</span>
                    <span className="years2">{dict.about.experienceP10}</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">{dict.about.experienceP11}</span>
                    <span className="company">{dict.about.experienceP12}</span>
                    <span className="years">{dict.about.experienceP13}</span>
                    <span className="years2">{dict.about.experienceP14}</span>
                </div>
            </div>

            <div className="education">
                <span className="education__title">{dict.about.educationP1}</span>
                <span className="education__title2">{dict.about.educationP2}</span>
                <a href="https://uasd.edu.do/" target="_blank">
                    <div className="education__items">
                        <span className="role">{dict.about.educationP3}</span>
                        <span className="company">{dict.about.educationP4}</span>
                        <span className="years">{dict.about.educationP5}</span>
                        <Image
                            src="/assets/icons/uasd-logo.svg"
                            alt="uasd-logo"
                            width={130}
                            height={130}
                            className="education-logos"
                            loading="lazy"
                        />
                    </div>
                </a>

                <a href="https://www.itsc.edu.do/" target="_blank">
                    <div className="education__items">
                        <span className="role">{dict.about.educationP6}</span>
                        <span className="company">{dict.about.educationP7}</span>
                        <span className="years">{dict.about.educationP8}</span>
                        <Image
                            src="/assets/icons/itsc-logo.svg"
                            alt="itsc-logo"
                            width={130}
                            height={130}
                            className="education-logos"
                            loading="lazy"
                        />
                    </div>
                </a>
                <a href="https://mescyt.gob.do/" target="_blank">
                    <div className="education__items">
                        <span className="role">{dict.about.educationP9}</span>
                        <span className="company">{dict.about.educationP10}</span>
                        <span className="years">{dict.about.educationP11}</span>
                        <Image
                            src="/assets/icons/mescyt-logo.svg"
                            alt="mescyt-logo"
                            width={130}
                            height={130}
                            className="education-logos"
                            loading="lazy"
                        />
                    </div>
                </a>
                <a href="https://www.infotep.gob.do/" target="_blank">
                    <div className="education__items">
                        <span className="role">{dict.about.educationP12}</span>
                        <span className="company">{dict.about.educationP13}</span>
                        <span className="years">{dict.about.educationP14}</span>
                        <Image
                            src="/assets/icons/infotep-logo.svg"
                            alt="infotep-logo"
                            width={130}
                            height={130}
                            className="education-logos"
                            loading="lazy"
                        />
                    </div>
                </a>
            </div>

            <div className="skills">
                <span className="skills__title">{dict.about.skillsP1}</span>
                <span className={`skills__title2 ${lang === "es" ? "spanish" : ""}`}>{dict.about.skillsP2}</span>
                <span className="skills__title3">{dict.about.skillsP3}</span>
                <span className="skills__tools">
                    <div className="backend">
                        <span className="title">FRONTEND</span>
                        <Image
                            src="/assets/icons/html5-logo.svg"
                            alt="html5-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/css-logo.svg"
                            alt="css-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/javascript-logo.svg"
                            alt="javascript-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/tailwindcss-logo.svg"
                            alt="tailwindcss-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/sass-logo.svg"
                            alt="sass-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/angular-logo.svg"
                            alt="angular-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/puntonet-logo.svg"
                            alt="puntonet-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/nextjs-logo.svg"
                            alt="nextjs-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/react-logo.svg"
                            alt="react-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/illustrator-logo.svg"
                            alt="illustrator-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/adobe-photoshop-logo.svg"
                            alt="adobe-photoshop-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/figma-logo.svg"
                            alt="figma-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                    </div>

                    <div className="frontend">
                        <span className="title">BACKEND</span>
                        <Image
                            src="/assets/icons/nodejs-logo.svg"
                            alt="nodejs-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/C++-logo.svg"
                            alt="C++-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/csharp-logo.svg"
                            alt="csharp-logo"
                            width={60}
                            height={60}
                            className="skills__items" loading="lazy"
                        />

                        <Image
                            src="/assets/icons/java-logo.svg"
                            alt="java-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/python-logo.svg"
                            alt="python-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/typescript-logo.svg"
                            alt="typescript-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/expressjs-logo.svg"
                            alt="expressjs-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/sqlserver-logo.svg"
                            alt="sqlserver-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/postgresql-logo.svg"
                            alt="postgresql-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/mongodb-logo.svg"
                            alt="mongodb-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />

                        <Image
                            src="/assets/icons/sqlite-logo.svg"
                            alt="sqlite-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />

                        <Image
                            src="/assets/icons/mysql-logo.svg"
                            alt="mysql-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                    </div>

                    <div className="additional-tools">
                        <span className="title">{dict.about.otherToolsP1}</span>
                        <Image
                            src="/assets/icons/git-logo.svg"
                            alt="git-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/github-logo.svg"
                            alt="github-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/bash-logo.svg"
                            alt="bash-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />

                        <Image
                            src="/assets/icons/npm-logo.svg"
                            alt="npm-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/visualstudio-logo.svg"
                            alt="visualstudio-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/webpack-logo.svg"
                            alt="webpack-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />

                        <Image
                            src="/assets/icons/playwright-logo.svg"
                            alt="playwright-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/trello-logo.svg"
                            alt="trello-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                        <Image
                            src="/assets/icons/jira-logo.svg"
                            alt="jira-logo"
                            width={60}
                            height={60}
                            className="skills__items"
                            loading="lazy"
                        />
                    </div>
                </span>


            </div>
            <div className="about-footer">
                <span className="copyright">©2024</span>
                <span className="designer">DESIGNER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="designer__item">MikeyRG</span></span>
            </div>

        </section>
    )
}