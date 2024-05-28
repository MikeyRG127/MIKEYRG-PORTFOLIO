import "@styles/navbar.css";
import Cookies from 'js-cookie';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const toEnglish = () => {
        Cookies.set('LANGUAGE', 'en', {
            expires: 365,
            path: '/'
        });

        router.push(pathname.replace('/es/', '/en/'));
        window.location.reload();
    }

    const toSpanish = () => {
        Cookies.set('LANGUAGE', 'es', {
            expires: 365,
            path: '/'
        });
        router.push(pathname.replace('/en/', '/es/'));
        window.location.reload();
    }

    return (
        <div className="language-selection">
            <span className={"language selected"} onClick={toEnglish}>EN</span>
            <span className={"language"} onClick={toSpanish}>ESP</span>
        </div>
    );
}
