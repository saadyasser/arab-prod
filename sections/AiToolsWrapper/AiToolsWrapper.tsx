"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiToolsResponse } from "@/types/aiTools";
import AiToolsList from "@/app/ai-tools/components/AiToolsList";
import Pagination from "@/app/ai-tools/components/Pagination";
import Header from "@/app/ai-tools/components/Header";
import { notFound } from "next/navigation";
import NotFound from "@/app/ai-tools/not-found";
import useDebounce from "@/hooks/useDebounce/useDebounce";

interface AiToolsWrapperProps {
  initialSearchTerm?: string;
  paginationType?: "ByIndicators" | "onScroll";
}

const AiToolsWrapper: React.FC<AiToolsWrapperProps> = ({
  initialSearchTerm = "",
  paginationType = "ByIndicators",
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const searchValue = useDebounce(searchTerm, 700);

  const fetchAiTools = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/aitools?search=${searchValue}&page=${currentPage}&page_size=${pageSize}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: AiToolsResponse = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["aitools", searchValue, currentPage, pageSize],
    queryFn: fetchAiTools,
    keepPreviousData: true,
  });

  const totalPages = data?.total_pages || 1;
  const aiToolsData = data?.data || [];

  const handlePageChange = (page: number) => {
    if (paginationType === "ByIndicators") {
      setCurrentPage(page);
    }
    if (paginationType === "onScroll") {
      setPageSize((prevSize) => prevSize + 12);
    }
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {!isLoading && aiToolsData.length === 0 ? (
        <NotFound cta={() => setSearchTerm("")} />
      ) : (
        <AiToolsList loading={isLoading} error={error} data={aiToolsData} />
      )}
      {!isLoading && aiToolsData.length > 1 && (
        <Pagination
          paginationType={paginationType}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isFetching={isLoading}
        />
      )}
    </>
  );
};

export default AiToolsWrapper;
