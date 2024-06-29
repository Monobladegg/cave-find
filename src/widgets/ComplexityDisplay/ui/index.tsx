"use client";

type props = {
  complexity: number;
};

export default function ComplexityDisplay({ complexity }: props) {
  const validComplexity = Math.max(0, Math.min(complexity, 5)); // Ensure complexity is between 0 and 5
  const remaining = Math.max(0, 5 - validComplexity); // Ensure remaining is non-negative

  return (
    <div style={{ display: "flex", alignItems: "center", position: "absolute", top: 5, right: 0 }}>
      {[...Array(validComplexity)].map((_, i) => (
        <img key={i} src="/orangeCom.svg" style={{ marginRight: "10px" }} alt="Orange Complexity" />
      ))}
      {[...Array(remaining)].map((_, i) => (
        <img key={i + validComplexity} src="/whiteCom.svg" style={{ marginRight: "10px" }} alt="White Complexity" />
      ))}
    </div>
  );
}

