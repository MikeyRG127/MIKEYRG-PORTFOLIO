"use client";
import "@styles/home.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
const page = () => {
  const [copy, setCopy] = useState("Copy 💾");
  function copyToClipboard() {
    var specificUrl = "josealbertopersonal@gmail.com"; // Specify the URL you want to copy

    navigator.clipboard.writeText(specificUrl)
      .then(function () {
        setCopy("Copied ✅");
        console.log('URL copied to clipboard successfully');
      })
      .catch(function (error) {
        console.error('Unable to copy URL: ', error);
      });
  }




  useEffect(() => {
    const jose = document.querySelector('.name-and-photo__jose');
    const rodriguez = document.querySelector('.name-and-photo__rodriguez');

    function startShimmer() {
      jose.style.animation = 'shimmer infinite 3s linear';
      rodriguez.style.animation = 'shimmer infinite 3s linear';
    }

    // Event listener to start shimmer animation after cascade animation ends
    jose.addEventListener('animationend', startShimmer);
    rodriguez.addEventListener('animationend', startShimmer);




    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const windowHeight = window.innerHeight;
        const targetHeight = target.offsetHeight;
        const offsetTop = target.offsetTop;

        // Calculate the scroll position to center the target element
        const scrollPosition = offsetTop - (windowHeight - targetHeight) / 2;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      });
    });


  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="desktop">
          <span className="desktop__im" id="im">I'M</span>
          <div className="desktop__name-and-photo">
            <span className="name-and-photo__jose">JOSE</span>
            <Image className="name-and-photo__photo" src="/assets/images/profile.png" alt="MikeyRG picture." width={385} height={385} id="picture"></Image>
            <span className="name-and-photo__rodriguez">RODRIGUEZ</span>
          </div>
          <div className="desktop__nickname">
            <span className="nickname__fullstack">FULLSTACK</span>
            <span className="nickname__mikeyrg">“MIKEYRG”</span>
          </div>
          <span className="desktop__web-developer">WEB DEVELOPER</span>
          <span className="desktop__phrase">Your Ideal Developer for Bringing Your Dream Software Project to Life.</span>
        </div>
      </div>
    </>
  );
}

export default page