import { useEffect, useRef } from "react";

export default function Sent({
  isOpened,
  onClose,
}: {
  isOpened: boolean;
  onClose: () => void;
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close modal on escape key
  useEffect(() => {
    if (!isOpened) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpened, onClose]);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpened) {
      window.addEventListener("mousedown", handler);
      return () => window.removeEventListener("mousedown", handler);
    }
  }, [isOpened, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center  !justify-center transition-all duration-300 ${
        isOpened
          ? "visible opacity-100 pointer-events-auto"
          : "invisible opacity-0 pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(22,30,46,0.35)",
        transition: "opacity 0.3s cubic-bezier(.23,1.08,.70,.86)",
      }}
    >
      <div
        ref={popupRef}
        className={`relative bg-white dark:bg-slate-800 border border-emerald-400 shadow-2xl rounded-2xl px-8 py-7 flex flex-col items-center
        transition-all duration-400 ${
          isOpened
            ? "scale-100 opacity-100 animate-popupin"
            : "scale-95 opacity-0"
        }`}
        style={{
          minWidth: "300px",
          minHeight: "200px",
          transition:
            "transform 0.3s cubic-bezier(.23,1.08,.70,.86), opacity 0.3s cubic-bezier(.23,1.08,.70,.86)",
        }}
      >
        {/* Animated check icon */}
        <svg
          className="w-14 h-14 mb-2 text-emerald-800 animate-checkpulse"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="#d1fae5"
            className="animate-circlegrow"
          />
          <path
            d="M7 13l3 3 7-7"
            stroke="#1d293d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-checkmark"
          />
        </svg>
        <div className="text-emerald-700 dark:text-emerald-500 text-xl font-bold mb-1">
          Your message sent!
        </div>
        <div className="text-slate-600 dark:text-slate-200 mb-3">
          Thank you for reaching out.
        </div>
        <button
          onClick={onClose}
          type="button"
          className="absolute top-2 right-2 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg p-1 transition"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M6 6l8 8M14 6l-8 8"
              stroke="currentColor"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <style jsx global>{`
          @keyframes popupin {
            0% {
              opacity: 0;
              transform: translateY(-30px) scale(0.92);
            }
            60% {
              opacity: 1;
              transform: translateY(4px) scale(1.04);
            }
            100% {
              opacity: 1;
              transform: translateY(0px) scale(1);
            }
          }
          .animate-popupin {
            animation: popupin 0.42s cubic-bezier(0.63, 1.45, 0.46, 1.02) both;
          }
          @keyframes checkpulse {
            0% {
              transform: scale(0.7);
              opacity: 0;
            }
            60% {
              transform: scale(1.07);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-checkpulse {
            animation: checkpulse 0.5s cubic-bezier(0.63, 1.45, 0.46, 1.02);
          }
          @keyframes circlegrow {
            0% {
              r: 0;
              opacity: 0.3;
            }
            80% {
              r: 10;
              opacity: 1;
            }
            100% {
              r: 10;
              opacity: 1;
            }
          }
          .animate-circlegrow {
            animation: circlegrow 0.38s cubic-bezier(0.21, 0.84, 0.56, 1.08)
              both;
          }
          @keyframes checkmark {
            0% {
              stroke-dasharray: 0 24;
              opacity: 0;
            }
            50% {
              stroke-dasharray: 14 24;
              opacity: 1;
            }
            100% {
              stroke-dasharray: 24 0;
              opacity: 1;
            }
          }
          .animate-checkmark {
            stroke-dasharray: 24 0;
            animation: checkmark 0.41s 0.13s cubic-bezier(0.23, 1.08, 0.7, 0.86)
              both;
          }
        `}</style>
      </div>
    </div>
  );
}
