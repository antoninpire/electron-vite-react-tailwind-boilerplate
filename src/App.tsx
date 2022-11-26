import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#2e026d] to-[#15162c] flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-7">
        <h1 className="text-center text-5xl font-bold text-[#BB33FF]">
          Vite + React + Tailwind
        </h1>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-[#E8DDFF] px-4 py-2 text-2xl font-semibold rounded-3xl outline-none border-none"
        >
          Your count: {count}
        </button>
      </div>
    </div>
  );
};

export default App;
