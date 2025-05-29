
import { cn } from "@/lib/utils";

interface CalculatorButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const CalculatorButton = ({ children, onClick, className }: CalculatorButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-16 rounded-xl font-semibold text-lg transition-all duration-200 transform active:scale-95 hover:scale-105 shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default CalculatorButton;
