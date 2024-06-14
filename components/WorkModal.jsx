'use client'
<<<<<<< HEAD
import React, { useState } from 'react';
import "@styles/workmodal.css";
import Image from "next/image";

export default function WorkModal({ title = "default", image = "default", description = "none", src = "none", alt = "none" }) {
    const [modalToggle, setModalToggle] = useState(false);

    function activate() {
        setModalToggle(prevState => !prevState);
    }

    return (
        <>
            <Image
                onClick={activate}
                src={src}
                alt={alt}
                width={1500}
                height={1500}
                className="project-image"
                loading="lazy"
            />
            <div className={`work-modal ${modalToggle && "active"}`}>
                <div className="modal-content">
                    <div onClick={activate}>CLICK HERE TO CLOSE</div>
                </div>
            </div>
        </>
    );
}
=======
import "@styles/workmodal.css";
export default async function WorkModal({ title = "default", image = "default", description = "none", url = "none", isActive = false }) {

    return (

        <div className={`work-modal ${isActive && "active"}`}>


        </div>

    );
}
>>>>>>> 9ca6febfe32990dc19a8091408692accbe830d3e
