"use client";
import Image from "next/image";
import { useEffect } from "react";
const page = () => {



  useEffect(() => {

    window.addEventListener('load', function () {

    });

    const containerx = document.querySelector('.vertical-lines-container');
    const viewportWidth = window.innerWidth;
    const lineSpacing = 20; // Adjust this value to change the spacing between lines

    const numLines = Math.floor(viewportWidth / lineSpacing);

    for (let i = 0; i <= numLines; i++) {
      const line = document.createElement('div');
      line.classList.add('vertical-line');
      line.style.width = '1px'; // Set the width of the line to 1 pixel
      containerx.appendChild(line);
    }

    // Distribute the lines evenly across the container
    const lines = containerx.querySelectorAll('.vertical-line');
    containerx.style.justifyContent = 'space-between';
    lines.forEach((line, index) => {
      if (index === 0 || index === lines.length - 1) {
        line.style.marginLeft = line.style.marginRight = '0';
      } else {
        line.style.marginLeft = line.style.marginRight = `${lineSpacing / 2}px`;
      }
    });

    const picture = document.querySelector('.mikey-picture');
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
  }, []);

  return (
    <div className="presentation-container">

      <div className="presentation">

        <div className="presentation-title">
          <span className="im" id="im">I'M</span>
          <span className="joserodriguez">JOSE RODRIGUEZ</span>
          <span className="mikeyrg">“MIKEYRG”</span>
        </div>

        <Image
          src="/assets/images/profile.png"
          alt="MikeyRG picture."
          width={385}
          height={385}
          className="mikey-picture"
          id="picture"
        ></Image>
        <div className="presentation-profession">
          <span className="fullstack">FULLSTACK</span>
          <span className="web-developer">WEB DEVELOPER</span>
          <span className="and">&</span>
          <span className="graphic">Graphic</span>
          <span className="designer">Designer</span>
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
        </span>

        <span className="work-section">WORK</span>
        <span className="getintouch-section">GET IN</span>
        <span className="getintouch-section2">TOUCH</span>
      </div>

      <div className="about-section">


      </div>

    </div>




  );
}

export default page