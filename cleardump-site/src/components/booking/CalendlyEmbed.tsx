"use client";

import { useEffect, useState, useRef } from "react";

export default function CalendlyEmbed() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Clean up any existing Calendly widget logic to avoid duplicates
    const container = containerRef.current;
    if (container) {
      container.innerHTML = '';
    }

    // Inject the Calendly script dynamically so it fires properly after the DOM is ready
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (!mounted) {
    return <div className="h-[700px] flex items-center justify-center text-cd-gray-400">Loading booking calendar...</div>;
  }

  return (
    <div 
      ref={containerRef}
      className="calendly-inline-widget w-full" 
      data-url="https://calendly.com/cleardump-proton/30min?primary_color=00c853&hide_event_type_details=1" 
      style={{ minWidth: '320px', height: '700px' }} 
    />
  );
}
