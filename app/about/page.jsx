import Link from 'next/link';
import "@styles/about.css";
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
            <span className="work-experience">
                <span className="work-experience__title">Work Experience</span>
                <div className="work-experience__items">
                    <span className="role">FULL-STACK WEB DEVELOPER</span>
                    <span className="company">Freelance {`(Self Employed)`} Full-Time </span>
                    <span className="years">2021 - Present</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">FULL-STACK WEB DEVELOPER</span>
                    <span className="company">Freelance {`(Self Employed)`} Full-Time </span>
                    <span className="years">2021 - Present</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">FULL-STACK WEB DEVELOPER</span>
                    <span className="company">Freelance {`(Self Employed)`} Full-Time </span>
                    <span className="years">2021 - Present</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <span className="work-experience__title">Education</span>
                <div className="work-experience__items">
                    <span className="role">Universidad Autónoma de Santo Domingo - UASD</span>
                    <span className="company">Bachelor’s Degree, Computer Science</span>
                    <span className="years">2023 - Present</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">Instituto Técnico Superior Comunitario - ITSC</span>
                    <span className="company">Associate Degree in Software Development</span>
                    <span className="years">2017 - 2020</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">Ministerio de Educación Superior, Ciencia y Tecnología - Mescyt</span>
                    <span className="company">Bachelor’s Degree, Computer Science</span>
                    <span className="years">English immersion program</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <div className="work-experience__items">
                    <span className="role">Instituto de Formación Técnico Profesional {'(INFOTEP)'}</span>
                    <span className="company">Certificate in Graphic Design</span>
                    <span className="years">2015 - 2016</span>
                    <span className="years2">3 yrs 4 mos</span>
                </div>
                <span className="work-experience__title">Skills</span>
            </span>
            <div className="grid-2">
                <span className="suggestion1">WANT TO SEE</span>
                <span className="suggestion2">EDUCATION</span>
                <span className="suggestion3">SKILLS</span>
                <span className="suggestion4">WORK EXPERIENCE?</span>
                <Link href="/resume" target="_blank" className="suggestion5">HERE IS MY RESUME</Link>
            </div>

        </section>
    )
}
export default about;
