export default function LinkArrowIcon({ direction = "up-right", className }) {
  const isRight = direction === "right";
  const isLeft = direction === "left";

  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {isLeft ? (
        <>
          <path d="M13.5 8h-11" />
          <path d="m6.5 4-4 4 4 4" />
        </>
      ) : isRight ? (
        <>
          <path d="M2.5 8h11" />
          <path d="m9.5 4 4 4-4 4" />
        </>
      ) : (
        <>
          <path d="M4 12 12 4" />
          <path d="M6 4h6v6" />
        </>
      )}
    </svg>
  );
}
