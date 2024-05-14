import Link from 'next/link';
import "@styles/about.css";
import Image from "next/image";
import Footer from "@components/Footer";
const about = () => {
    return (
        <section className="about-section-container">
            <div className="grid-1">
                <span className="title">ABOUT</span>
                <Link className="download-resume" href="#getintouch">DOWNLOAD RESUME</Link>
            </div>
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
                        <span className="title">Backend</span>
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                    </div>

                    <div className="frontend">
                        <span className="title">Frontend</span>
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                    </div>

                    <div className="additional-tools">
                        <span className="title">Additional Tools</span>
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                        <Image
                            src="/assets/icons/mikey.png"
                            alt="Picture of the author"
                            width={50}
                            height={60}
                            className="skills__items"
                        />
                    </div>
                </span>

            </div>
            <Footer className="footer"></Footer>

        </section>
    )
}
export default about;
