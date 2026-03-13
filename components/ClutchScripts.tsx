'use client';

import Script from 'next/script';

export default function ClutchScript() {
  return (
    <Script 
      src="https://widget.clutch.co/static/js/widget.js" 
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-ignore
        if (window.CLUTCHCO && window.CLUTCHCO.Init) {
            // @ts-ignore
            window.CLUTCHCO.Init();
        }
      }}
    />
  );
}