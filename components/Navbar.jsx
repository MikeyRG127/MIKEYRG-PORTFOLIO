"use client"
import "@styles/navbar.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import localFont from 'next/font/local';
import logo from '../public/assets/icons/mikeyrg-logo.svg';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const ArchitectsDaughterRegular = localFont({
  src: '../public/assets/fonts/ArchitectsDaughter-Regular.ttf',
  display: 'swap',
})

const BebasNeueRegular = localFont({
  src: '../public/assets/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
})


const Navbar = () => {
  const router = useRouter()
  const [language, setLanguage] = useState();

  const toEnglish = () => {
    sessionStorage.setItem('LANGUAGE', 'en');
    setLanguage(sessionStorage.getItem('LANGUAGE'));
    router.push('/');
  };
  const toSpanish = () => {
    sessionStorage.setItem('LANGUAGE', 'es');
    setLanguage(sessionStorage.getItem('LANGUAGE'));
    router.push('/');
  };

  useEffect(() => {
    const data = () => {

      setLanguage(sessionStorage.getItem('LANGUAGE'));

    }


    data();


    const navbarOptions = document.querySelectorAll(".nav-sections");
    const logoClicked = document.getElementById("LogoClicked");
    const getintouchClicked = document.getElementById("button-get-in-touch-desktop");
    const language = document.querySelectorAll(".language");

    logoClicked.addEventListener('click', () => {
      getintouchClicked.classList.remove('button-get-in-touch-desktop-selected');
      navbarOptions.forEach(element => {
        element.classList.remove('selected');
      })
      navbarOptions[0].classList.toggle('selected');
    });

    navbarOptions.forEach(element => {
      element.addEventListener('click', () => {
        getintouchClicked.classList.remove('button-get-in-touch-desktop-selected');
        navbarOptions.forEach(element => {
          element.classList.remove('selected');

        })
        element.classList.toggle('selected');
      })
    });

    language.forEach(element => {
      element.addEventListener('click', () => {
        language.forEach(element => {
          element.classList.remove('selected');
        })
        element.classList.toggle('selected');
      })
    });

    getintouchClicked.addEventListener('click', () => {
      if (getintouchClicked.classList.contains('button-get-in-touch-desktop-selected')) {

      } else {
        navbarOptions.forEach(element => {
          element.classList.remove('selected');
        })
        getintouchClicked.classList.toggle('button-get-in-touch-desktop-selected');
      }

    });

  }, []);

  return (
    <nav className={`navbar ${ArchitectsDaughterRegular.className} ${BebasNeueRegular.className}`}>

      <Link id="LogoClicked" href={`${language}/`}>
        <Image
          src={logo}
          alt="Picture of the author"
          width={169}
          height={208}
          className="mikey-logo"
        />
      </Link>
      <div className="navbar-menu">
        <Link className="nav-sections selected" href={`${language}/`}>HOME</Link>
        <Link className="nav-sections" href={`${language}/about`}>ABOUT</Link>
        <Link className="nav-sections" href={`${language}/work`}>WORK</Link>
        <div className="language-selection">
          <span className="language selected" onClick={toEnglish}>EN</span>
          <span className="language" onClick={toSpanish}>ESP</span>
        </div>
        <Link className="button-get-in-touch-desktop" id="button-get-in-touch-desktop" href={`${language}/getintouch`}>GET IN TOUCH</Link>
      </div>
    </nav>
  );
};

export default Navbar
