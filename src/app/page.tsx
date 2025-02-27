// pages/index.tsx
import React from "react";
import DAG, { DAGData } from "../components/DAG";

const data: DAGData = {
  nodes: [{ id: "A" }, { id: "B" }, { id: "C" }, { id: "D" }],
  links: [
    { source: "A", target: "B" },
    { source: "A", target: "C" },
    { source: "B", target: "D" },
    { source: "C", target: "D" },
  ],
};

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>DAG Visualization with D3 and Next.js (TypeScript)</h1>
      <DAG data={data} />
    </div>
  );
};

export default HomePage;
