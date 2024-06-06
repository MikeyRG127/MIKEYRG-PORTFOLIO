import "@styles/getintouch.css";
import Link from 'next/link';
import localFont from 'next/font/local';
import { getDictionary } from '../dictionaries';
const AntonRegular = localFont({
    src: '../../../public/assets/fonts/Anton-Regular.ttf',
    display: 'swap',
    preload: 'false'
})
const PermanentMarkerRegular = localFont({
    src: '../../../public/assets/fonts/PermanentMarker-Regular.ttf',
    display: 'swap',
    preload: 'false'
})

export default async function getintouch({ params: { lang } }) {
    const dict = await getDictionary(lang) // en
    return (
        <section className={`getintouch-section ${AntonRegular.className} ${PermanentMarkerRegular.className}`}>
            <div className="left">
                <span className="title1">{dict.about.getintouchP1}</span>
                <span className={`title2 ${lang === "es" ? "spanish" : ""}`}>{dict.about.getintouchP2}</span>
                <div className="social-media">
                    <Link href="https://www.linkedin.com/in/mikeyrg/" target="_blank" className="social-media__items">LINKEDIN</Link>
                    <Link href="https://www.facebook.com/mikeyrg127/" target="_blank" className="social-media__items">FACEBOOK</Link>
                    <Link href="https://www.instagram.com/mikeyrg127/" target="_blank" className="social-media__items">INSTAGRAM</Link>
                    <Link href="https://wa.me/18293055147" target="_blank" className="social-media__items">WHATSAPP</Link>
                    <span className="social-media__items">JOSEALBERTOPERSONAL@GMAIL.COM</span>
                </div>
            </div>
            <div className="right">
                <div className="questions">
                    <span className={`suggestion1 ${lang === "es" ? "spanish" : ""}`}>{dict.about.getintouchP3}</span>
                    <span className={`suggestion2 ${lang === "es" ? "spanish" : ""}`}>{dict.about.getintouchP4}</span>
                    <span className={`suggestion3 ${lang === "es" ? "spanish" : ""}`}>{dict.about.getintouchP5}</span>
                    <span className={`suggestion4 ${lang === "es" ? "spanish" : ""}`}>{dict.about.getintouchP6}</span>
                </div>
            </div>
        </section>
    )
}