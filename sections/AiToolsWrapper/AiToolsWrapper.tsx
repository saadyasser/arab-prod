"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiToolsResponse } from "@/types/aiTools";
import AiToolsList from "@/app/ai-tools/components/AiToolsList";
import Pagination from "@/app/ai-tools/components/Pagination";
import Header from "@/app/ai-tools/components/Header";

interface AiToolsWrapperProps {
  initialSearchTerm?: string;
}

const AiToolsWrapper: React.FC<AiToolsWrapperProps> = ({
  initialSearchTerm = "",
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const fetchAiTools = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/aitools?search=${searchTerm}&page=${currentPage}&page_size=${pageSize}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: AiToolsResponse = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["aitools", searchTerm, currentPage],
    queryFn: fetchAiTools,
    keepPreviousData: true,
  });

  const totalPages = data?.total_pages || 1;
  const aiToolsData = data?.data || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <AiToolsList loading={isLoading} error={error} data={aiToolsData} />

      {!isLoading && (
        <Pagination
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
