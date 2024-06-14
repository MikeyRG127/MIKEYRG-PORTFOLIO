'use client'
import React, { useState, useEffect } from 'react';
import "@styles/workmodal.css";
import Image from "next/image";

export default function WorkModal({ title = "default", image = "default", description = "none", src = "none", alt = "none" }) {
    const [modalToggle, setModalToggle] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click occurred outside the modal
            if (modalToggle && !event.target.closest('.work-modal')) {
                setModalToggle(false); // Close the modal
            }
        };

        // Add event listener when component mounts
        document.addEventListener('click', handleOutsideClick);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [modalToggle]); // Re-run effect when modalToggle changes

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
                    <div className="topbar">
                        <Image
                            onClick={activate}
                            src={"/assets/icons/cerrar.png"}
                            alt={"Close Icon"}
                            width={25}
                            height={25}
                            className="modal-close-icon"
                            loading="lazy">
                        </Image>
                    </div>


                </div>
            </div>
        </>
    );
}

