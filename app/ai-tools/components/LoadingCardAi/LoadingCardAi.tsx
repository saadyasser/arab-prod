import Skeleton from "@/components/Skeleton/Skeleton";
import React from "react";

const LoadingCardAi = () => {
  return (
    <div className={styles["card-ai"]}>
      <div className={styles["avatar-favorite"]}>
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
      <Skeleton className="w-full h-24 rounded" />
      <div className={styles["content"]}>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-10 w-1/4" />
      </div>
    </div>
  );
};

export default LoadingCardAi;
