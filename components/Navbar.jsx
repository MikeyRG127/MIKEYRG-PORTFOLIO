"use client"
import Image from "next/image";
import Link from 'next/link'
import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import english from '../public/plugins/js/en';
import spanish from '../public/plugins/js/es';



const Navbar = () => {

  const pathname = usePathname()
  useEffect(() => {
    const navbarOptions = document.querySelectorAll(".nav-sections");
    const logoClicked = document.getElementById("LogoClicked");


    logoClicked.addEventListener('click', () => {
      navbarOptions.forEach(element => {
        element.classList.remove('selected');
      })
      navbarOptions[0].classList.toggle('selected');
    });

    navbarOptions.forEach(element => {
      element.addEventListener('click', () => {
        navbarOptions.forEach(element => {
          element.classList.remove('selected');
        })
        element.classList.toggle('selected')
      })
    });

  }, []);

  return (
    <nav className="navbar">

      <Link id="LogoClicked" href="/">
        <Image
          src="/assets/icons/mikey.png"
          alt="Picture of the author"
          width={70}
          height={80}
          className="mikey-logo"
        />
      </Link>

      <div className="navbar-menu">
        <Link className="nav-sections selected" href="/">HOME</Link>
        <Link className="nav-sections" href="/about">ABOUT</Link>
        <Link className="nav-sections" href="/work">WORK</Link>
        <div className="language-selection">
          <span className="language-spanish ">ESP</span>
          <span className="language-english ">EN</span>
        </div>
        <Link className="button-get-in-touch" href="/getintouch">GET IN TOUCH</Link>
      </div>
    </nav>
  );
};

export default Navbar
