
interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 mb-4">
      <div className="text-right text-white text-3xl font-mono min-h-[3rem] flex items-center justify-end overflow-hidden">
        {value}
      </div>
    </div>
  );
};

export default Display;
