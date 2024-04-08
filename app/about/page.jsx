import Link from 'next/link';
const about = () => {
    return (
        <section className="about-section-desktop">
            <div className="left">
                <span className="title">ABOUT</span>
                <span className="paragraph">
                    A 26-year-old enthusiast of
                    programming and graphic design.
                    My mission? To craft outstanding
                    projects that not only meet current
                    standards but also exceed client
                    expectations. Let's collaborate to bring your creative visions to life!
                </span>
            </div>
            <div className="right">
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
