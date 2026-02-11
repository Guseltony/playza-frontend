interface StatItemProps {
  icon: string;
  label: string;
  value: string;
  valueColor: string;
  editMode?: boolean;
  onValueChange?: (value: string) => void;
}

export function StatItem({
  icon,
  label,
  value,
  valueColor,
  editMode = false,
  onValueChange,
}: StatItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="text-gray-400 text-sm">{label}</div>
        {editMode && onValueChange ? (
          <input
            type="text"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            className={`text-xl ${valueColor} bg-transparent border-b border-gray-600 outline-none focus:border-blue-500 w-32`}
          />
        ) : (
          <div className={`text-xl ${valueColor}`}>{value}</div>
        )}
      </div>
    </div>
  );
}
