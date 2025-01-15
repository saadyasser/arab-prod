interface SkeletonProps {
  style?: React.CSSProperties;
}

export default function Skeleton({ style = {} }: SkeletonProps) {
  const defaultStyle: React.CSSProperties = {
    animation: "pulse 1.5s ease-in-out infinite",
    backgroundColor: "#d1d5db", // Equivalent to bg-gray-300
    borderRadius: "0.25rem", // Equivalent to rounded
  };

  return <div style={{ ...defaultStyle, ...style }}></div>;
}
