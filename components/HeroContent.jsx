"use client";
import "@styles/home.css";
import localFont from 'next/font/local';
import Image from "next/image";
import { useEffect } from "react";
const AntonRegular = localFont({
    src: '../public/assets/fonts/Anton-Regular.ttf',
    display: 'swap',
})

const KhulaRegular = localFont({
    src: '../public/assets/fonts/Khula-Regular.ttf',
    display: 'swap',
})

export default async function HeroContent({ dict }) {
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
            <div className={`hero-section ${AntonRegular.className} ${KhulaRegular.className}`}>
                <div className="desktop">
                    <span className="desktop__im" id="im">{dict.im}</span>
                    <div className="desktop__name-and-photo">
                        <span className="name-and-photo__jose">JOSE</span>
                        <Image className="name-and-photo__photo" src="/assets/images/profile.png" alt="MikeyRG picture." width={385} height={385} id="picture"></Image>
                        <span className="name-and-photo__rodriguez">RODRIGUEZ</span>
                    </div>
                    <div className="desktop__nickname">
                        <span className="nickname__fullstack">{dict.fullstack}</span>
                        <span className="nickname__mikeyrg">“MIKEYRG”</span>
                    </div>
                    <span className="desktop__web-developer">{dict.webdeveloper}</span>
                    <span className="desktop__phrase">{dict.phrase}</span>
                </div>
            </div>
        </>
    );
}