"use client";
import Image from "next/image";
import { useEffect } from "react";
const page = () => {

  useEffect(() => {
    const picture = document.querySelector('.mikey-picture');
    const container = document.querySelector('*');
    const myname = document.getElementById('myname');

    myname.addEventListener("mouseenter", () => {
      const hi = document.getElementById('hi');
      const handWaving = document.getElementById('hand-waving');
      const and = document.getElementById('and');
      const iama = document.getElementById('iama');
      handWaving.style.display = 'none';
      hi.style.display = 'none';
      and.style.display = 'none';
      iama.style.display = 'none';
    });

    myname.addEventListener('mouseleave', () => {
      const hi = document.getElementById('hi');
      const handWaving = document.getElementById('hand-waving');
      const and = document.getElementById('and');
      const iama = document.getElementById('iama');
      handWaving.style.display = 'grid';
      hi.style.display = 'grid';
      and.style.display = 'grid';
      iama.style.display = 'grid';

    });

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
  }, []);

  return (
    <div className="presentation-container">


      <div className="presentation">
        <Image
          src="/assets/images/profile.png"
          alt="MikeyRG picture."
          width={439}
          height={439}
          className="mikey-picture"
          id="picture"
        ></Image>
        <span className="hi" id="hi">Hi,&nbsp;&nbsp; my name is</span>
        <Image
          src="/assets/icons/waving-hand.svg"
          alt="waving-hand"
          width={35}
          height={35}
          className="waving-hand"
          id="hand-waving"
        />

        <span className="joserodriguez" id="myname" data-mikeyrg="AKA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MikeyRG">Jose Rodriguez</span>
        <span className="and" id="and">and</span>
        <span className="iama" id="iama">I am a</span>
        <span className="fullstack">FULLSTACK</span>
        <span className="web-developer">WEB DEVELOPER</span>
        <span className="and-graphic-designer">& GRAPHIC DESIGNER</span>
        <span className="located-in-dominican-republic">LOCATED IN DOMINICAN REPUBLIC</span>
      </div>

    </div>
  );
}

export default page