interface Props {
  onClick: () => void;
  children: JSX.Element | string;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button = ({
  onClick,
  children,
  disabled = false,
  fullWidth = false,
  className = "",
}: Props) => {
  return (
    <button
      className={
        "group relative " +
        (fullWidth ? "w-full " : "") +
        "py-1 px-2 border border-transparent text-sm " +
        "font-medium rounded-md text-white " +
        "focus:outline-none focus:ring-2 " +
        "focus:ring-offset-2 focus:ring-red-500 mx-auto " +
        (disabled ? "bg-gray-700 " : "bg-red-800 hover:bg-red-900 ") +
        className
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
