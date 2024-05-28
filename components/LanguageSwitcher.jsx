import "@styles/navbar.css";
import Cookies from 'js-cookie';

export default function LanguageSwitcher() {
    const toEnglish = () => {
        Cookies.set('LANGUAGE', 'en', {
            expires: 365,
            path: '/'
        });
        window.location.reload(); // Reload the page to apply changes
    }

    const toSpanish = () => {
        Cookies.set('LANGUAGE', 'es', {
            expires: 365,
            path: '/'
        });
        window.location.reload(); // Reload the page to apply changes
    }

    return (
        <div className="language-selection">
            <span className={"language selected"} onClick={toEnglish}>EN</span>
            <span className={"language"} onClick={toSpanish}>ESP</span>
        </div>
    );
}
