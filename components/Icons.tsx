type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const WhatsAppIcon = ({ size = 20, className }: P) => (
  <svg {...base(size)} strokeWidth={2} className={className}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
  </svg>
);

export const ShieldIcon = ({ size = 32 }: P) => (
  <svg {...base(size)}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const WavesIcon = ({ size = 32 }: P) => (
  <svg {...base(size)}>
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
  </svg>
);

export const LockIcon = ({ size = 32 }: P) => (
  <svg {...base(size)}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const ClockIcon = ({ size = 32 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const HomeIcon = ({ size = 36 }: P) => (
  <svg {...base(size)}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M9 20v-5h6v5" />
  </svg>
);

export const PoolIcon = ({ size = 36 }: P) => (
  <svg {...base(size)}>
    <path d="M7 4v13" />
    <path d="M17 4v13" />
    <path d="M7 8h10" />
    <path d="M7 12h10" />
    <path d="M2 20c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
  </svg>
);

export const SeaIcon = ({ size = 36 }: P) => (
  <svg {...base(size)}>
    <circle cx="17" cy="7" r="3" />
    <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
  </svg>
);

export const InfoIcon = ({ size = 24 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5" />
    <path d="M12 16.5v.01" />
  </svg>
);

export const MailIcon = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const CheckIcon = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2.4}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const ArrowDownIcon = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2.2}>
    <path d="M12 5v14" />
    <path d="M6 13l6 6 6-6" />
  </svg>
);

const STAR =
  "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6z";

export const Stars = ({ count = 5 }: { count?: number }) => (
  <svg
    width="120"
    height="22"
    viewBox="0 0 124 24"
    fill="currentColor"
    role="img"
    aria-label={`${count} von 5 Sternen`}
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <g
        key={i}
        transform={`translate(${i * 25} 0)`}
        opacity={i < count ? 1 : 0.2}
      >
        <path d={STAR} />
      </g>
    ))}
  </svg>
);
