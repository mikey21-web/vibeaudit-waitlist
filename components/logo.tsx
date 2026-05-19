"use client"

interface Props {
  size?: number
  showWordmark?: boolean
  className?: string
  wordmarkClassName?: string
}

export function LogoMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="block shrink-0"
    >
      <defs>
        <linearGradient
          id="ds-shield"
          x1="2"
          y1="2"
          x2="26"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7170FF" />
          <stop offset="100%" stopColor="#5E6AD2" />
        </linearGradient>
        <linearGradient
          id="ds-shield-inner"
          x1="0"
          y1="0"
          x2="0"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      <path
        d="M14 2.5 L24 5.5 V13 C24 18.5 19.5 23.5 14 25.5 C8.5 23.5 4 18.5 4 13 V5.5 Z"
        fill="url(#ds-shield)"
      />
      <path
        d="M14 2.5 L24 5.5 V13 C24 18.5 19.5 23.5 14 25.5 C8.5 23.5 4 18.5 4 13 V5.5 Z"
        fill="url(#ds-shield-inner)"
      />
      <path
        d="M9 14.5 L12.5 18 L19 10.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({
  size = 22,
  showWordmark = true,
  className = "",
  wordmarkClassName = "",
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          className={`text-[14px] font-semibold tracking-tightish text-ink-primary ${wordmarkClassName}`}
        >
          DeploySafe
        </span>
      )}
    </span>
  )
}
