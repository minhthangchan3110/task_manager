export default function Avatar({ initials, w, h, f, color }) {
  return (
    <button
      type="button"
      aria-label={`Tài khoản ${initials}`}
      style={{
        width: `${w}px`,
        height: `${h}px`,
        fontSize: `${f}px`,
        backgroundColor: color,
      }}
      className="flex shrink-0 items-center justify-center rounded-full border-2 border-gray-100 font-semibold text-white hover:cursor-pointer"
    >
      {initials}
    </button>
  );
}
