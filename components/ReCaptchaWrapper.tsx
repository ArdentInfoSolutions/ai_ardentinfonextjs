'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function ReCaptchaWrapper({ children }: { children: React.ReactNode }) {
  // Use the NEXT_PUBLIC_ prefix so the browser can read the value
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.error("reCAPTCHA Error: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing from environment variables.");
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey as string}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}