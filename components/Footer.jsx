"use client"
import "@styles/footer.css";
import Image from "next/image";
import Link from 'next/link';
import { useEffect } from "react";
import { usePathname } from 'next/navigation'



const Footer = () => {

    return (
        <nav className="footer">
            <span className="copyright">©2024</span>
            <span className="designer">DESIGNER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="designer__item">MikeyRG</span></span>
        </nav>
    );
};

export default Footer
