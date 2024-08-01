"use client";

import s from "./index.module.scss";

type props = {
  complexity: number;
};

export default function ComplexityDisplay({ complexity }: props) {
  const validComplexity = Math.max(0, Math.min(complexity, 5)); // Ensure complexity is between 0 and 5
  const remaining = Math.max(0, 5 - validComplexity); // Ensure remaining is non-negative

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: -15,
      }}
      className={s.container}
    >
      {[...Array(validComplexity)].map((_, i) => (
        <img
          key={i}
          src="/orangeCom.svg"
          style={{ marginRight: "10px" }}
          alt="Orange Complexity"
        />
      ))}
      {[...Array(remaining)].map((_, i) => (
        <img
          key={i + validComplexity}
          src="/whiteCom.svg"
          style={{ marginRight: "10px" }}
          alt="White Complexity"
        />
      ))}
    </div>
  );
}
