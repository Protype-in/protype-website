import { loginAction } from "../actions";

interface LoginPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const hasError = params.error === "invalid";

  return (
    <div className="admin-login-root">
      {/* Background ambient lighting matching Protype website light theme */}
      <div className="admin-ambient-glow-1" />
      <div className="admin-ambient-glow-2" />
      <div className="admin-grid-pattern" />

      <div className="admin-login-card">
        {/* Admin Tag Badge */}
        <div className="admin-badge">
          <span className="admin-badge-dot" />
          <span>PROTYPE CONSOLE · ADMIN</span>
        </div>

        {/* Logo */}
        <div className="admin-login-logo">
          <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="12" fill="url(#admin-lg)" />
            <path
              d="M12 20L18 14L24 20L30 14"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 26L18 20L24 26L30 20"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.65"
            />
            <defs>
              <linearGradient id="admin-lg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#059669" />
                <stop offset="1" stopColor="#0d9488" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="admin-login-title">Command Center</h1>
        <p className="admin-login-subtitle">Sign in to access analytics & site operations</p>

        <form action={loginAction} className="admin-login-form">
          <div className="admin-input-group">
            <label htmlFor="password" className="admin-input-label">
              Security Key / Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••••••"
              className={`admin-input ${hasError ? "admin-input-error" : ""}`}
              autoFocus
              required
            />
            {hasError && (
              <p className="admin-input-error-msg">
                Incorrect security password. Please retry.
              </p>
            )}
          </div>
          <button type="submit" className="admin-login-btn">
            <span>Enter Admin Console</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        <div className="admin-login-footer">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span>Restricted Access · Authorized Personnel Only</span>
        </div>
      </div>

      <style>{`
        .admin-login-root {
          min-height: 100vh;
          background: #fafcfc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 24px;
        }
        .admin-ambient-glow-1 {
          position: absolute;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.16);
          filter: blur(130px);
          top: -10%;
          right: -5%;
          pointer-events: none;
        }
        .admin-ambient-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(14, 165, 233, 0.12);
          filter: blur(140px);
          bottom: -10%;
          left: -5%;
          pointer-events: none;
        }
        .admin-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.7;
          background-image:
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          pointer-events: none;
        }
        .admin-login-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 24px;
          padding: 44px 38px;
          width: 100%;
          max-width: 420px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          text-align: center;
          position: relative;
          z-index: 1;
          box-shadow:
            0 20px 40px -15px rgba(15, 23, 42, 0.07),
            0 0 0 1px rgba(255, 255, 255, 0.8) inset;
        }
        .admin-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.22);
          padding: 4px 10px;
          border-radius: 99px;
          font-size: 10.5px;
          font-weight: 700;
          color: #065f46;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .admin-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.6);
        }
        .admin-login-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }
        .admin-login-title {
          color: #0f172a;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 6px;
        }
        .admin-login-subtitle {
          color: #64748b;
          font-size: 13.5px;
          margin: 0 0 28px;
          line-height: 1.4;
        }
        .admin-login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }
        .admin-input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .admin-input-label {
          color: #334155;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .admin-input {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 13px 16px;
          color: #0f172a;
          font-size: 15px;
          font-family: inherit;
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .admin-input::placeholder { color: #94a3b8; }
        .admin-input:focus {
          background: #ffffff;
          border-color: #059669;
          box-shadow: 0 0 0 3.5px rgba(16, 185, 129, 0.15);
        }
        .admin-input-error {
          border-color: #ef4444 !important;
          background: #fff5f5 !important;
        }
        .admin-input-error-msg {
          color: #dc2626;
          font-size: 12.5px;
          font-weight: 500;
          margin: 2px 0 0;
        }
        .admin-login-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
          color: #ffffff;
          font-size: 14.5px;
          font-weight: 600;
          font-family: inherit;
          border: none;
          border-radius: 12px;
          padding: 13px 20px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.28);
        }
        .admin-login-btn:hover {
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.38);
          transform: translateY(-1px);
        }
        .admin-login-btn:active {
          transform: translateY(0);
        }
        .admin-login-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #94a3b8;
          font-size: 11.5px;
          font-weight: 500;
          margin-top: 28px;
        }
      `}</style>
    </div>
  );
}
