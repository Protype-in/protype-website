import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic WhatsApp Brand Logo
 */
export function WhatsAppLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#25D366"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
      />
      <path
        fill="#FFFFFF"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
      />
    </svg>
  );
}

/**
 * Authentic Shopify Brand Logo (Green shopping bag with white 'S' emblem)
 */
export function ShopifyLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023z"
        fill="#5E8E3E"
      />
      <path
        d="M15.009 24l.927-21.166s-.04.021-.078.021-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24z"
        fill="#95BF47"
      />
      <path
        d="M11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002z"
        fill="#5E8E3E"
      />
      <path
        d="M11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Authentic Google Gmail 4-Color Logo
 */
export function GmailLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="52 42 88 66"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  );
}

/**
 * Authentic Slack 4-Color Logo
 */
export function SlackLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 127 127"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z"
        fill="#E01E5A"
      />
      <path
        d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z"
        fill="#36C5F0"
      />
      <path
        d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z"
        fill="#2EB67D"
      />
      <path
        d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z"
        fill="#ECB22E"
      />
    </svg>
  );
}

/**
 * Authentic Microsoft Excel Brand Logo
 */
export function ExcelLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 2290 2130"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#185C37"
        d="M1437.75 1011.75L532.5 852v1180.39c0 53.91 43.7 97.61 97.61 97.61h1562.04c53.9 0 97.6-43.7 97.6-97.61V1597.5l-852-585.75z"
      />
      <path
        fill="#21A366"
        d="M1437.75 0H630.11C576.2 0 532.5 43.7 532.5 97.61V532.5l905.25 532.5 479.25 159.75L2289.75 1065V532.5L1437.75 0z"
      />
      <path fill="#107C41" d="M532.5 532.5h905.25V1065H532.5z" />
      <path
        fill="#33C481"
        d="M2192.14 0H1437.75v532.5h852V97.61c0-53.91-43.7-97.61-97.61-97.61z"
      />
      <path fill="#107C41" d="M1437.75 1065h852v532.5h-852z" />
      {/* Front dark green badge with white X */}
      <rect
        x="0"
        y="479.25"
        width="1171.5"
        height="1171.5"
        rx="97.6"
        fill="#107C41"
      />
      <path
        fill="#FFFFFF"
        d="M302.3 1382.26l205.33-318.17L319.5 747.68h151.34l102.66 202.35c9.48 19.22 15.98 33.49 19.49 42.92h1.33c6.75-15.34 13.85-30.23 21.3-44.68L725.37 747.79h138.93l-192.93 314.55 197.83 319.92H721.38L602.79 1160.16c-5.59-9.45-10.33-19.38-14.16-29.66h-1.76c-3.47 10.07-8.08 19.72-13.74 28.75l-122.1 223.01H302.3z"
      />
    </svg>
  );
}

/**
 * Authentic Google Sheets Logo (Green folder with fold and white spreadsheet table)
 */
export function GoogleSheetsLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 4H10C7.79 4 6 5.79 6 8v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V16L30 4z"
        fill="#0F9D58"
      />
      {/* Top right corner fold */}
      <path d="M30 4v12h12L30 4z" fill="#87CEAC" />
      {/* 6-cell spreadsheet table in white */}
      <rect x="14" y="22" width="20" height="14" rx="1.5" fill="#FFFFFF" />
      <path
        d="M14 26.5h20M14 31.5h20M24 22v14"
        stroke="#0F9D58"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/**
 * Authentic Shiprocket Brand Logo (Supersonic speed rocket chevron)
 */
export function ShiprocketLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#0C1B33" />
      {/* Upper arrow */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 22L19.27 17.22c.62-.36.95-.97.95-1.57s-.33-1.21-.95-1.57L11.18 9.7C9.72 8.86 8.58 9.96 8.58 11.04v9.5c0 .76.62 1.57 1.42 1.57.34 0 .7-.11 1-.31z"
        fill="#008ECC"
      />
      {/* Supersonic speed lead chevron */}
      <path
        d="M16.98 15.63L11.49 12.11c-.34-.2-.79.05-.79.49v6.05c0 .44.45.69.79.49l5.49-3.52z"
        fill="#18F040"
      />
    </svg>
  );
}

/**
 * Authentic HubSpot (CRM) Brand Logo
 */
export function HubSpotLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FF7A59"
        d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
      />
    </svg>
  );
}

/**
 * Authentic Instagram Gradient Logo
 */
export function InstagramLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="igGrad"
          cx="0.2"
          cy="1"
          r="1"
          gradientTransform="matrix(0 1 -1 0 1 0)"
        >
          <stop offset="0%" stopColor="#ffd521" />
          <stop offset="10%" stopColor="#f50000" />
          <stop offset="50%" stopColor="#b900b4" />
          <stop offset="100%" stopColor="#3b00c4" />
        </radialGradient>
        <radialGradient
          id="igGrad2"
          cx="0.1"
          cy="0.9"
          r="0.8"
        >
          <stop offset="0%" stopColor="#ffdc80" />
          <stop offset="20%" stopColor="#f77737" />
          <stop offset="50%" stopColor="#fd1d1d" />
          <stop offset="100%" stopColor="#c13584" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGrad2)" />
      <path
        fill="#FFFFFF"
        d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 11-2.34 0 1.17 1.17 0 012.34 0z"
      />
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="4.8"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.8"
      />
    </svg>
  );
}

/**
 * Authentic Google Drive Logo (Yellow, Green, Blue triangle)
 */
export function GoogleDriveLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 87.3 78"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
      <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47" />
      <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
      <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
      <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
    </svg>
  );
}

/**
 * Authentic LinkedIn Brand Logo (Official #0A66C2 with "in" mark)
 */
export function LinkedInLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M20.5 20.5h-3.5v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.5v-11.4h3.36v1.56h.05c.47-.89 1.61-1.83 3.32-1.83 3.55 0 4.21 2.34 4.21 5.38v6.29zM6.5 7.6a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zm1.75 12.9H4.75V9.1h3.5v11.4z"
      />
    </svg>
  );
}

/**
 * Authentic GitHub Brand Logo (Official dark silhouette)
 */
export function GitHubLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#181717"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
}

/**
 * Authentic X (formerly Twitter) Brand Logo
 */
export function XTwitterLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#0f172a"
        d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
      />
    </svg>
  );
}

/**
 * Authentic Classic Twitter Blue Bird Logo
 */
export function TwitterBirdLogo({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 248 204"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#1d9bf0"
        d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
      />
    </svg>
  );
}
