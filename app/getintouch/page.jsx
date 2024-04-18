"use client";
import "@styles/getintouch.css";
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import { useEffect, useState } from "react";
const getintouch = () => {


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



    return (
        <section className="getintouch-section-desktop">

            <div className="left">
                <span className="title1">GET IN</span>
                <span className="title2">TOUCH</span>
                <div className="social-media">
                    <Link href="https://www.linkedin.com/in/mikeyrg/" target="_blank" className="social-media__items">LINKEDIN</Link>
                    <Link href="https://www.facebook.com/mikeyrg127/" target="_blank" className="social-media__items">FACEBOOK</Link>
                    <Link href="https://www.instagram.com/mikeyrg127/" target="_blank" className="social-media__items">INSTAGRAM</Link>
                    <Link href="https://wa.me/18293055147" target="_blank" className="social-media__items">WHATSAPP</Link>
                    <Tooltip id="gmail-tooltip" />
                    <span data-tooltip-id="gmail-tooltip" data-tooltip-content={copy} onClick={copyToClipboard} className="social-media__items">JOSEALBERTOPERSONAL@GMAIL.COM</span>
                </div>
            </div>


            <div className="right">

                <div className="questions">
                    <span className="suggestion1" >HAVE QUESTIONS,</span>
                    <span className="suggestion2">PROBLEM OR</span>
                    <span className="suggestion3">WANT TO HIRE ME?</span>
                    <span className="suggestion4">LET'S TALK</span>


                </div>



            </div>
        </section>
    )
}
export default getintouch;
