"use client";
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
    const jose = document.querySelector('.name-and-photo-container__jose');
    const rodriguez = document.querySelector('.name-and-photo-container__rodriguez');

    function startShimmer() {
      jose.style.animation = 'shimmer infinite 3s linear';
      rodriguez.style.animation = 'shimmer infinite 3s linear';
    }


    // Function to start shimmer animation


    // Event listener to start shimmer animation after cascade animation ends
    jose.addEventListener('animationend', startShimmer);
    rodriguez.addEventListener('animationend', startShimmer);
    const picture = document.querySelector('.name-and-photo-container__photo');
    const container = document.querySelector('*');
    let isMouseOver = false;
    let mouseX = 0;
    let mouseY = 0;
    let imageX = 0;
    let imageY = 0;

    container.addEventListener('mouseenter', () => {
      isMouseOver = true;
      requestAnimationFrame(updateImagePosition);
    });

    container.addEventListener('mousemove', (e) => {
      mouseX = e.clientX - container.getBoundingClientRect().left; // Mouse position relative to the container
      mouseY = e.clientY - container.getBoundingClientRect().top;
    });

    container.addEventListener('mouseleave', () => {
      isMouseOver = false;
    });

    function updateImagePosition() {
      if (isMouseOver) {
        const parallaxAmount = 30; // Adjust this value for the desired parallax effect

        // Calculate the new position for the image based on mouse position
        const targetX = (mouseX / container.offsetWidth - 0.5) * parallaxAmount;
        const targetY = (mouseY / container.offsetHeight - 0.5) * parallaxAmount;

        // Use easing for smoother movement (you can use different easing functions)
        imageX += (targetX - imageX) * 0.1;
        imageY += (targetY - imageY) * 0.1;

        // Apply the transform to the image
        picture.style.transform = `translate(${imageX}px, ${imageY}px`;

        requestAnimationFrame(updateImagePosition);
      } else {
        resetImagePosition();
      }
    }

    function resetImagePosition() {
      const resetSpeed = 0.01;

      if (Math.abs(imageX) > 0.01 || Math.abs(imageY) > 0.01) {
        imageX += (0 - imageX) * resetSpeed;
        imageY += (0 - imageY) * resetSpeed;

        picture.style.transform = `translate(${imageX}px, ${imageY}px`;

        requestAnimationFrame(resetImagePosition);
      } else {
        picture.style.transform = 'translate(0, 0)';

      }
    }


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
      <div className="hero-section-container">
        <div className="hero-section-desktop">
          <span className="hero-section-desktop__im" id="im">I'M</span>
          <div className="hero-section-desktop__name-and-photo-container">
            <span className="name-and-photo-container__jose">JOSE</span>
            <Image className="name-and-photo-container__photo" src="/assets/images/profile.png" alt="MikeyRG picture." width={385} height={385} id="picture"></Image>
            <span className="name-and-photo-container__rodriguez">RODRIGUEZ</span>
          </div>
          <div className="hero-section-desktop__nickname-container">
            <span className="nickname-container__fullstack">FULLSTACK</span>
            <span className="nickname-container__mikeyrg">“MIKEYRG”</span>
          </div>
          <span className="hero-section-desktop__web-developer">WEB DEVELOPER</span>
          <span className="hero-section-desktop__phrase">Your Ideal Developer for Bringing Your Dream Software Project to Life.</span>
        </div>



        <div className="hero-section-mobile">
          <span className="im" id="im">I'M</span>
          <span className="joserodriguez">JOSE RODRIGUEZ</span>
          <span className="mikeyrg">“MIKEYRG”</span>
          <Image
            src="/assets/images/profile.png"
            alt="MikeyRG picture."
            width={385}
            height={385}
            className="mikey-picture"
            id="picture"
          ></Image>
          <span className="fullstack">FULLSTACK</span>
          <span className="web-developer">WEB DEVELOPER</span>
          <span className="phrase">Your Ideal Developer for Bringing Your Dream Software Project to Life.</span>
        </div>

        <span className="about-section">
          <span className="title">ABOUT</span>
          <span className="paragraph">
            A 26-year-old enthusiast of
            programming and graphic design.
            My mission? To craft outstanding
            projects that not only meet current
            standards but also exceed client
            expectations. Let's collaborate to bring your creative visions to life!
          </span>
          <span className="suggestion1">WANT TO SEE</span>
          <span className="suggestion2">EDUCATION</span>
          <span className="suggestion3">SKILLS</span>
          <span className="suggestion4">WORK EXPERIENCE?</span>
          <Link href="/resume" target="_blank" className="suggestion5">HERE IS MY RESUME</Link>
        </span>

        <span className="work-section">WORK</span>
        <span className="getintouch-section">GET IN</span>
        <span className="getintouch-section2">TOUCH</span>
        <span className="getintouch-content">
          <span id="getintouch" className="getintouch-suggestion1">HAVE QUESTIONS,</span>
          <span className="getintouch-suggestion2">PROBLEM OR</span>
          <span className="getintouch-suggestion3">WANT TO HIRE ME?</span>
          <span className="getintouch-suggestion4">LET'S TALK</span>
        </span>
        <Link href="https://www.linkedin.com/in/mikeyrg/" target="_blank" className="linkedin">LINKEDIN</Link>
        <Link href="https://www.facebook.com/mikeyrg127/" target="_blank" className="facebook">FACEBOOK</Link>
        <Link href="https://www.instagram.com/mikeyrg127/" target="_blank" className="instagram">INSTAGRAM</Link>
        <Link href="https://wa.me/18293055147" target="_blank" className="whatsapp">WHATSAPP</Link>
        <Tooltip id="gmail-tooltip" />
        <span data-tooltip-id="gmail-tooltip" data-tooltip-content={copy} onClick={copyToClipboard} className="gmail">josealbertopersonal@gmail.com</span>
      </div>
    </>
  );
}

export default page