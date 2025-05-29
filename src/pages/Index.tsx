
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
};

export default Index;
