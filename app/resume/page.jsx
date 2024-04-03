'use client';
import { useEffect, useRef } from 'react';
export default function resume() {


    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (typeof window !== 'undefined') {
            import('pspdfkit').then((PSPDFKit) => {
                if (PSPDFKit) {
                    PSPDFKit.unload(container);
                }

                PSPDFKit.load({
                    container,
                    document: './assets/resume/CV.pdf',
                    baseUrl: `${window.location.protocol}//${window.location.host}/`,
                    licenseKey: 'HE6VLngNR-aA1ydHLhpUSaENVU8aQbbubn8ligoQM08PMA2Ht95_dqkDlpuIY-MkiM-0RRhJT6E4zTtaoFCPBH4EZjv1BRHtj5YAk1-TApBpjr8y3KTcAwzBhgR3P60nFNsobnzGlwi8ejUsKEEylgPhzvfgZYPnZVj7PtbW1UkUwXZVQno4lc2FTdiVJ5Bo-EhFCSO3im5lLg',
                });
            });
        }
    }, []);

    return (

        <div ref={containerRef} style={{ height: '100vh' }} />

    );
}

// pages/index.js (or any other page)



