type IslamicPatternBackgroundProps = {
  patternId: string;
  withCenterCircle?: boolean;
};

export function IslamicPatternBackground({
  patternId,
  withCenterCircle = false,
}: IslamicPatternBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.03] text-gold pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0 L80 40 L40 80 L0 40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            {withCenterCircle ? (
              <circle
                cx="40"
                cy="40"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            ) : null}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
