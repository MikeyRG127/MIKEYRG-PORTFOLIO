import Link from 'next/link';
import "@styles/about.css";
import Image from "next/image";
const about = () => {
    return (

        <section className="about-section-container">
            <span className="about-paragraph">
                A 26-year-old enthusiast of
            </span>
            <span className="about-paragraph2">
                programming.
            </span>
            <span className="about-paragraph3">
                FROM THE
            </span>

            <span className="about-paragraph4">
                DOMINICAN REPUBLIC
            </span>
            <div className="work-experience">
                <span className="work-experience__title">WITH OVER 5 YEARS OF PROFESSIONAL</span>
                <span className="work-experience__title2">EXPERIENCE</span>
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
                        src="/assets/icons/uasd.png"
                        alt="Picture of the author"
                        width={130}
                        height={130}
                        className="education-logos"
                    />
                </div>
                <div className="education__items">
                    <span className="role">Instituto Técnico Superior Comunitario - ITSC</span>
                    <span className="company">Associate Degree in Software Development</span>
                    <span className="years">2017 - 2020</span>
                    <Image
                        src="/assets/icons/itsc.png"
                        alt="Picture of the author"
                        width={130}
                        height={130}
                        className="education-logos"
                    />
                </div>
                <div className="education__items">
                    <span className="role">Ministerio de Educación Superior, Ciencia y Tecnología - Mescyt</span>
                    <span className="company">English immersion program</span>
                    <span className="years">2018 - 2018</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <div className="education__items">
                    <span className="role">Instituto de Formación Técnico Profesional {'(INFOTEP)'}</span>
                    <span className="company">Certificate in Graphic Design</span>
                    <span className="years">2015 - 2016</span>
                    <span className="years2">3 yrs 4 mos</span>
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
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/css-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/javascript-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/tailwindcss-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/sass-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/angular-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/puntonet-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/nextjs-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/react-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/illustrator-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/adobe-photoshop-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/figma-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                    </div>

                    <div className="frontend">
                        <span className="title">BACKEND</span>
                        <Image
                            src="/assets/icons/nodejs-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/C++-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/csharp-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />

                        <Image
                            src="/assets/icons/java-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/python-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/typescript-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/expressjs-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/sqlserver-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/postgresql-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mongodb-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />

                        <Image
                            src="/assets/icons/sqlite-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />

                        <Image
                            src="/assets/icons/mysql-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                    </div>

                    <div className="additional-tools">
                        <span className="title">Additional Tools</span>
                        <Image
                            src="/assets/icons/git-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/github-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/bash-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />

                        <Image
                            src="/assets/icons/npm-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/visualstudio-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/webpack-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />

                        <Image
                            src="/assets/icons/playwright-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/trello-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/jira-logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                            className="skills__items"
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
export default about;
