type LogoVariant = 'bracket' | 'aperture' | 'monogram' | 'caret';

export default function LogoMark({ variant = 'bracket' }: { variant?: LogoVariant }) {
  if (variant === 'aperture') {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="16" cy="16" r="13" />
        <path d="M16 3 L23 16 L16 29 L9 16 Z" fill="currentColor" stroke="none" opacity="0.95" />
        <circle cx="16" cy="16" r="2.2" fill="#000" />
      </svg>
    );
  }
  if (variant === 'monogram') {
    return (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.2" />
        <text
          x="16" y="22" textAnchor="middle"
          fontFamily="Fraunces, serif" fontSize="18" fontWeight="400"
          fontStyle="italic" fill="currentColor"
        >
          B
        </text>
      </svg>
    );
  }
  if (variant === 'caret') {
    return (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
        <path d="M5 9 L11 16 L5 23" />
        <line x1="15" y1="23" x2="27" y2="23" />
      </svg>
    );
  }
  // bracket (default)
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M9 4 L4 4 L4 28 L9 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
      <path d="M23 4 L28 4 L28 28 L23 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
      <text
        x="16" y="22" textAnchor="middle"
        fontFamily="Fraunces, serif" fontSize="17" fontWeight="400"
        fontStyle="italic" fill="currentColor"
      >
        B
      </text>
    </svg>
  );
}
