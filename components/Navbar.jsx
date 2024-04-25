"use client"
import "@styles/navbar.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect } from "react";
import { usePathname } from 'next/navigation'



const Navbar = () => {
  const pathname = usePathname()



  useEffect(() => {

    const navbarOptions = document.querySelectorAll(".nav-sections");
    const logoClicked = document.getElementById("LogoClicked");
    const getintouchClicked = document.getElementById("button-get-in-touch-desktop");


    getintouchClicked.addEventListener('click', () => {
      if (getintouchClicked.classList.contains('button-get-in-touch-desktop-selected')) {

      } else {
        navbarOptions.forEach(element => {
          element.classList.remove('selected');
        })
        getintouchClicked.classList.toggle('button-get-in-touch-desktop-selected');
      }

    });



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
        element.classList.toggle('selected')
        console.log(element);
      })
    });

  }, []);




  return (
    <nav className="navbar">

      <Link id="LogoClicked" href="/">
        <Image
          src="/assets/icons/mikeyrg-logo.svg"
          alt="Picture of the author"
          width={169}
          height={208}
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
        <Link className="button-get-in-touch-desktop" id="button-get-in-touch-desktop" href="/getintouch">GET IN TOUCH</Link>
      </div>
    </nav>
  );
};

export default Navbar
