import Link from 'next/link';
import "@styles/about.css";
import Image from "next/image";
import localFont from 'next/font/local';
import { getDictionary } from '../dictionaries'
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
                {"DON’T KNOW ME? LET’S TALK"}
            </span>
            <span className="about-paragraph2">
                {"ABOUT ME"}
            </span>
            <span className="about-paragraph3">
                {"I’M A 26-YEARS OLD ENTHUSIAST"}
            </span>

            <span className="about-paragraph4">
                {"OF PROGRAMMING FROM THE"}
            </span>
            <span className="about-paragraph5">
                {"DOMINICAN REPUBLIC"}
            </span>
            <div className="work-experience">
                <span className="work-experience__title">{dict.about.p5}</span>
                <span className="work-experience__title2">{dict.about.p6}</span>
                <div className="work-experience__items">
                    <span className="role">FULL-STACK WEB DEVELOPER</span>
                    <span className="company">Freelance {`(Self Employed)`} · Full-Time </span>
                    <span className="years">2021 - Present</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">FULL-STACK WEB DEVELOPER</span>
                    <span className="company">iKompras · Full-Time</span>
                    <span className="years">2020 - 2021</span>
                    <span className="years2">1 yr 10 mos</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">FULL-STACK WEB DEVELOPER</span>
                    <span className="company">Solumedios · Full-time</span>
                    <span className="years">2017 - 2019</span>
                    <span className="years2">2 yrs 2 mos</span>
                </div>
            </div>

            <div className="education">
                <span className="education__title">EXCELLENT</span>
                <span className="education__title2">EDUCATION</span>
                <div className="education__items">
                    <span className="role">Universidad Autónoma de Santo Domingo - UASD</span>
                    <span className="company">Bachelor’s Degree, Computer Science</span>
                    <span className="years">2023 - Present</span>
                    <Image
                        src="/assets/icons/uasd-logo.svg"
                        alt="uasd-logo"
                        width={130}
                        height={130}
                        className="education-logos"
                        loading="lazy"
                    />
                </div>
                <div className="education__items">
                    <span className="role">Instituto Técnico Superior Comunitario - ITSC</span>
                    <span className="company">Associate Degree in Software Development</span>
                    <span className="years">2017 - 2020</span>
                    <Image
                        src="/assets/icons/itsc-logo.svg"
                        alt="itsc-logo"
                        width={130}
                        height={130}
                        className="education-logos"
                        loading="lazy"
                    />
                </div>
                <div className="education__items">
                    <span className="role">Ministerio de Educación Superior, Ciencia y Tecnología - Mescyt</span>
                    <span className="company">English immersion program</span>
                    <span className="years">2018 - 2018</span>
                    <Image
                        src="/assets/icons/mescyt-logo.svg"
                        alt="mescyt-logo"
                        width={130}
                        height={130}
                        className="education-logos"
                        loading="lazy"
                    />
                </div>
                <div className="education__items">
                    <span className="role">Instituto de Formación Técnico Profesional {'(INFOTEP)'}</span>
                    <span className="company">Certificate in Graphic Design</span>
                    <span className="years">2015 - 2016</span>
                    <Image
                        src="/assets/icons/infotep-logo.svg"
                        alt="infotep-logo"
                        width={130}
                        height={130}
                        className="education-logos"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="skills">
                <span className="skills__title">VERSATILE</span>
                <span className="skills__title2">SKILLS</span>
                <span className="skills__title3">SETT</span>
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
                        <span className="title">Additional Tools</span>
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
            <section className="footer">
                <span className="copyright">©2024</span>
                <span className="designer">DESIGNER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="designer__item">MikeyRG</span></span>
            </section>

        </section>
    )
}