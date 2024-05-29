'use client'
import "@styles/navbar.css";
import { useRouter, usePathname } from 'next/navigation';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';


export default function LanguageSwitcher() {

    const router = useRouter();
    const pathname = usePathname();
    const languageSelector = (pathname.slice(1, 3) === "en") ? "en" : "es";

    const toEnglish = () => {
        setCookie('LANGUAGE', 'en');
        router.push(pathname.replace('/es', '/en'));
        router.refresh();
    }

    const toSpanish = () => {
        setCookie('LANGUAGE', 'es');
        router.push(pathname.replace('/en', '/es'));
        router.refresh();
    }



    return (
        <div className="language-selection">
            <span className={`language ${(languageSelector === "en" ? "selected" : "")}`} onClick={toEnglish}>EN</span>
            <span className={`language ${(languageSelector === "es" ? "selected" : "")}`} onClick={toSpanish}>ESP</span>
        </div>
    );
}
