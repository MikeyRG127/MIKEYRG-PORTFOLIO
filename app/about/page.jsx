import Link from 'next/link';
import "@styles/about.css";
import Image from "next/image";
const about = () => {
    return (
        <section className="about-section-container">
            <div className="grid-1">
                <span className="title">ABOUT</span>
                <Link className="download-resume" href="#getintouch">DOWNLOAD RESUME</Link>
            </div>
            <span className="about-paragraph">
                A 26-year-old enthusiast of
                programming.
                My mission? To craft outstanding
                projects that not only meet current
                standards but also exceed client
                expectations. Let's collaborate to bring your creative visions to life!
            </span>
            <div className="work-experience">
                <span className="work-experience__title">Work Experience</span>
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
                <span className="education__title">Education</span>
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
                <span className="skills__title">Skills</span>
                <div className="backend">
                    <span className="title">Backend</span>
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                </div>

                <div className="frontend">
                    <span className="title">Frontend</span>
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                </div>

                <div className="additional-tools">
                    <span className="title">Additional Tools</span>
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                    <Image
                        src="/assets/icons/mikey.png"
                        alt="Picture of the author"
                        width={50}
                        height={60}
                        className="mikey-logo"
                    />
                </div>
            </div>


        </section>
    )
}
export default about;
