"use client";
import "@styles/navbar.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import localFont from 'next/font/local';
import logo from '../public/assets/icons/mikeyrg-logo.svg';
import { useRouter, usePathname } from 'next/navigation';
import LanguageSwitcher from "./LanguageSwitcher";

const ArchitectsDaughterRegular = localFont({
  src: '../public/assets/fonts/ArchitectsDaughter-Regular.ttf',
  display: 'swap',
});

const BebasNeueRegular = localFont({
  src: '../public/assets/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
});



export default function Navbar() {

  const router = useRouter();
  const pathname = usePathname();
  const languageSelector = pathname.slice(4);
  useEffect(() => {
    const navbarOptions = document.querySelectorAll(".nav-sections");
    const logoClicked = document.getElementById("LogoClicked");
    const getintouchClicked = document.getElementById("button-get-in-touch-desktop");
    const languageElements = document.querySelectorAll(".language");

    logoClicked.addEventListener('click', () => {
      getintouchClicked.classList.remove('button-get-in-touch-desktop-selected');
      navbarOptions.forEach(element => {
        element.classList.remove('selected');
      });
      navbarOptions[0].classList.toggle('selected');
    });

    navbarOptions.forEach(element => {
      element.addEventListener('click', () => {
        getintouchClicked.classList.remove('button-get-in-touch-desktop-selected');
        navbarOptions.forEach(element => {
          element.classList.remove('selected');
        });
        element.classList.toggle('selected');
      });
    });

    languageElements.forEach(element => {
      element.addEventListener('click', () => {
        languageElements.forEach(element => {
          element.classList.remove('selected');
        });
        element.classList.toggle('selected');
      });
    });

    getintouchClicked.addEventListener('click', () => {
      if (getintouchClicked.classList.contains('button-get-in-touch-desktop-selected')) {
        // Do nothing if already selected
      } else {
        navbarOptions.forEach(element => {
          element.classList.remove('selected');
        });
        getintouchClicked.classList.toggle('button-get-in-touch-desktop-selected');
      }
    });

  }, []);

  return (
    <nav className={`navbar ${ArchitectsDaughterRegular.className} ${BebasNeueRegular.className}`}>
      <Link id="LogoClicked" href={"/"}>
        <Image
          src={logo}
          alt="Picture of the author"
          width={169}
          height={208}
          className="mikey-logo"
        />
      </Link>
      <div className="navbar-menu">
        <Link className={`nav-sections ${(languageSelector === "" ? "selected" : "")}`} href={`/`}>HOME</Link>
        <Link className={`nav-sections ${(languageSelector === "about" ? "selected" : "")}`} href={`/about`}>ABOUT</Link>
        <Link className={`nav-sections ${(languageSelector === "work" ? "selected" : "")}`} href={`/work`}>WORK</Link>
        <LanguageSwitcher />
        <Link className={`button-get-in-touch-desktop ${(languageSelector === "getintouch" ? "button-get-in-touch-desktop-selected" : "")}`} id="button-get-in-touch-desktop" href={`/getintouch`}>GET IN TOUCH</Link>
      </div>
    </nav>
  );
};


