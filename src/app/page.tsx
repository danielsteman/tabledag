// app/page.tsx

import FlowChart from "@/components/FlowChart";

export default function HomePage() {
  return (
    <main className="w-screen h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">
        React Flow in Next.js + Tailwind
      </h1>
      <FlowChart />
    </main>
  );
}
