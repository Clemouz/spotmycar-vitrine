window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        midnight: "#0A192F", // Deep Navy
        midnightLight: "#172a45", // Lighter Navy for cards
        signal: "#00E676", // Profit Green
        signalHover: "#00C853",
        slate: "#64748B", // Grey text base
        lightSlate: "#CBD5E1", // Lighter Grey for dark backgrounds
        light: "#F8FAFC", // Off-white background
        alert: "#FF4444" // Red for market average line
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"]
      },
      animation: {
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        scroll: "scroll 40s linear infinite",
        dash: "dash 2s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        dash: {
          to: {
            strokeDashoffset: "0"
          }
        },
        "ticker-scroll": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" }
        }
      }
    }
  }
};
