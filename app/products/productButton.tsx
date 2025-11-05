interface ButtonProps{
    label: string;
    className?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export function ProductButton({ label, className, icon, onClick }: ButtonProps) {
  return (
    <button className={`product-button bg-slate-800 text-white p-2 rounded ${className}`} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
}