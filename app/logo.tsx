// app/Logo.tsx
export function Logo({ className }: { className?: string }) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        /* We change the 'camera' to focus on the circle (r=230) 
           This removes the 512px padding that makes it look small */
        viewBox="26 26 460 460" 
        className={className}
      >
        <defs>
          <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00AEEF"/>
            <stop offset="100%" stopColor="#0072BC"/>
          </linearGradient>
          <linearGradient id="gradPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2DA3"/>
            <stop offset="100%" stopColor="#C4007A"/>
          </linearGradient>
          <linearGradient id="gradYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC20E"/>
            <stop offset="100%" stopColor="#F7941D"/>
          </linearGradient>
        </defs>
  
        {/* Background circle */}
        <circle cx="256" cy="256" r="230" fill="#0b1f2a"/>
  
        {/* Stylized A shape */}
        <path 
          d="M120 360 L240 100 L280 100 L390 360 L330 360 L305 300 L205 300 L180 360 Z"
          fill="url(#gradBlue)"
        />
  
        {/* Neural network nodes */}
        <circle cx="240" cy="180" r="10" fill="url(#gradPink)"/>
        <circle cx="300" cy="240" r="10" fill="url(#gradYellow)"/>
        <circle cx="200" cy="250" r="10" fill="url(#gradPink)"/>
        <circle cx="260" cy="310" r="10" fill="url(#gradYellow)"/>
  
        {/* Neural connections */}
        <line x1="240" y1="180" x2="300" y2="240" stroke="#00AEEF" strokeWidth="4"/>
        <line x1="240" y1="180" x2="200" y2="250" stroke="#00AEEF" strokeWidth="4"/>
        <line x1="200" y1="250" x2="260" y2="310" stroke="#00AEEF" strokeWidth="4"/>
        <line x1="300" y1="240" x2="260" y2="310" stroke="#00AEEF" strokeWidth="4"/>
  
        {/* AI text */}
        <text 
          x="256" y="440" 
          textAnchor="middle" 
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="48" 
          fill="#00AEEF" 
          fontWeight="bold"
        >
          AI
        </text>
      </svg>
    );
  }