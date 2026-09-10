import React from "react";

type IconType =
  | "chart"
  | "users"
  | "file"
  | "globe"
  | "link"
  | "monitor"
  | "smartphone"
  | "tablet"
  | "device"
  | "chrome"
  | "firefox"
  | "safari"
  | "edge"
  | "opera"
  | "browser"
  | "google"
  | "twitter"
  | "linkedin"
  | "facebook"
  | "github"
  | "reddit"
  | "mapPin";

interface Icon3DProps {
  type: IconType | string;
  size?: number;
  className?: string;
}

export default function Icon3D({ type, size = 20, className = "" }: Icon3DProps) {
  const s = size;

  switch (type.toLowerCase()) {
    case "chart":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-chart-base" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="ic3d-chart-bar1" x1="8" y1="18" x2="12" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="ic3d-chart-bar2" x1="14" y1="12" x2="18" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6ee7b7" />
              <stop offset="1" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="ic3d-chart-bar3" x1="20" y1="8" x2="24" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a7f3d0" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <filter id="ic3d-shadow" x="0" y="2" width="32" height="30" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#0f172a" floodOpacity="0.12" />
            </filter>
          </defs>
          <g filter="url(#ic3d-shadow)">
            <rect x="3" y="3" width="26" height="26" rx="8" fill="url(#ic3d-chart-base)" />
            <rect x="3.5" y="3.5" width="25" height="13" rx="7.5" fill="white" fillOpacity="0.22" />
            {/* 3D Pillars */}
            <rect x="7" y="16" width="4.5" height="9" rx="2" fill="url(#ic3d-chart-bar1)" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x="13.7" y="11" width="4.5" height="14" rx="2" fill="url(#ic3d-chart-bar2)" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />
            <rect x="20.5" y="7" width="4.5" height="18" rx="2" fill="url(#ic3d-chart-bar3)" stroke="white" strokeWidth="0.8" strokeOpacity="0.7" />
          </g>
        </svg>
      );

    case "users":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-users-bg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" />
              <stop offset="1" stopColor="#4338ca" />
            </linearGradient>
            <linearGradient id="ic3d-users-avatar" x1="10" y1="8" x2="22" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0e7ff" />
              <stop offset="1" stopColor="#c7d2fe" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="26" height="26" rx="8" fill="url(#ic3d-users-bg)" />
          <rect x="3.5" y="3.5" width="25" height="13" rx="7.5" fill="white" fillOpacity="0.22" />
          <circle cx="16" cy="12.5" r="4" fill="url(#ic3d-users-avatar)" stroke="white" strokeWidth="0.7" />
          <path d="M9 24c0-3.8 3.1-6 7-6s7 2.2 7 6" fill="#c7d2fe" stroke="white" strokeWidth="0.7" strokeLinecap="round" />
        </svg>
      );

    case "file":
    case "pages":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-file-bg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" />
              <stop offset="1" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="26" height="26" rx="8" fill="url(#ic3d-file-bg)" />
          <rect x="3.5" y="3.5" width="25" height="13" rx="7.5" fill="white" fillOpacity="0.22" />
          {/* Document Sheet */}
          <rect x="9" y="8" width="14" height="16" rx="2" fill="white" fillOpacity="0.95" />
          <line x1="12" y1="12" x2="20" y2="12" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="16" x2="18" y2="16" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="20" x2="16" y2="20" stroke="#fcd34d" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "globe":
    case "geography":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-globe-bg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#0e7490" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="26" height="26" rx="8" fill="url(#ic3d-globe-bg)" />
          <rect x="3.5" y="3.5" width="25" height="13" rx="7.5" fill="white" fillOpacity="0.22" />
          <circle cx="16" cy="16" r="7.5" stroke="white" strokeWidth="1.6" />
          <path d="M8.5 16h15" stroke="white" strokeWidth="1.4" />
          <ellipse cx="16" cy="16" rx="3.8" ry="7.5" stroke="white" strokeWidth="1.4" />
        </svg>
      );

    case "link":
    case "sources":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-link-bg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#6d28d9" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="26" height="26" rx="8" fill="url(#ic3d-link-bg)" />
          <rect x="3.5" y="3.5" width="25" height="13" rx="7.5" fill="white" fillOpacity="0.22" />
          <path
            d="M14 18l4-4m-1 7l2 2a3.5 3.5 0 005-5l-2-2a3.5 3.5 0 00-5 0m-4-4l-2-2a3.5 3.5 0 00-5 5l2 2a3.5 3.5 0 005 0"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "monitor":
    case "desktop":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-mon" x1="2" y1="2" x2="22" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#059669" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
          </defs>
          <rect x="2" y="3" width="20" height="13" rx="2.5" fill="url(#ic3d-mon)" />
          <rect x="3" y="4" width="18" height="10" rx="1.5" fill="#ecfdf5" />
          <path d="M8 20h8m-4-4v4" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "smartphone":
    case "mobile":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-mob" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0891b2" />
              <stop offset="1" stopColor="#0e7490" />
            </linearGradient>
          </defs>
          <rect x="6" y="2" width="12" height="20" rx="3" fill="url(#ic3d-mob)" />
          <rect x="7.5" y="3.5" width="9" height="15" rx="1.5" fill="#cffafe" />
          <circle cx="12" cy="19.5" r="0.8" fill="white" />
        </svg>
      );

    case "tablet":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="ic3d-tab" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" />
              <stop offset="1" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          <rect x="4" y="2" width="16" height="20" rx="2.5" fill="url(#ic3d-tab)" />
          <rect x="5.5" y="3.5" width="13" height="15.5" rx="1.5" fill="#e0e7ff" />
          <circle cx="12" cy="20" r="0.7" fill="white" />
        </svg>
      );

    case "chrome":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#059669" />
          <circle cx="12" cy="12" r="4.5" fill="#ffffff" />
          <circle cx="12" cy="12" r="3" fill="#10b981" />
          <path d="M12 2a10 10 0 018.66 5H12" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M20.66 7L15 17" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M7 17l5-8.66" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "firefox":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#ea580c" />
          <circle cx="12" cy="12" r="7" fill="#fb923c" />
          <circle cx="12.5" cy="11" r="4" fill="#fed7aa" />
        </svg>
      );

    case "safari":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#0284c7" />
          <circle cx="12" cy="12" r="8.5" stroke="white" strokeWidth="0.8" strokeDasharray="1 1.5" />
          <polygon points="16,8 13.5,13.5 8,16 10.5,10.5" fill="white" />
          <polygon points="13.5,13.5 16,8 10.5,10.5" fill="#f43f5e" />
          <circle cx="12" cy="12" r="1" fill="#0284c7" />
        </svg>
      );

    case "edge":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#2563eb" />
          <path d="M6 14c0 3.3 2.7 5 6 5s6-2 6-5-3-5-6-5c-3 0-5 2-5 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "opera":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#dc2626" />
          <ellipse cx="12" cy="12" rx="4.5" ry="6.5" fill="white" />
          <ellipse cx="12" cy="12" rx="2.5" ry="5" fill="#dc2626" />
        </svg>
      );

    case "google":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M12 7v5l3.5 2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="5" stroke="#f59e0b" strokeWidth="1.6" />
        </svg>
      );

    case "twitter":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#0f172a" />
          <path d="M7 7l10 10m0-10L7 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case "linkedin":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#0a66c2" />
          <rect x="6" y="10" width="3" height="8" rx="0.8" fill="white" />
          <circle cx="7.5" cy="7" r="1.5" fill="white" />
          <path d="M12 10v8m0-4.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "github":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#181717" />
          <path d="M8 17c0-2 1-3.5 2.5-4 0 0-1-2 0-3 1 0 2 1 2.5 1.5.8-.2 1.7-.2 2.5 0 .5-.5 1.5-1.5 2.5-1.5 1 1 0 3 0 3 1.5.5 2.5 2 2.5 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "facebook":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#1877f2" />
          <path d="M14 8h2m-2 0v8m-3-4h4" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case "reddit":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#ff4500" />
          <circle cx="9.5" cy="12" r="1.2" fill="white" />
          <circle cx="14.5" cy="12" r="1.2" fill="white" />
          <path d="M10 15c.6.6 1.4.8 2 .8s1.4-.2 2-.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "mappin":
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#059669" />
          <circle cx="12" cy="10" r="3" fill="white" />
          <path d="M12 13v5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}
