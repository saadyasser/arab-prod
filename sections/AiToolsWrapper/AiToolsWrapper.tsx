"use client";

import React, { useCallback, useEffect, useState } from "react";

import { useFetchData } from "@/hooks/useFetchData";
import { AiToolsResponse } from "@/types/aiTools";
import AiToolsList from "@/app/ai-tools/components/AiToolsList";
import Pagination from "@/app/ai-tools/components/Pagination";
import Header from "@/app/ai-tools/components/Header";

interface AiToolsWrapperProps {
  initialSearchTerm?: string;
  initialPage?: number;
}

const AiToolsWrapper: React.FC<AiToolsWrapperProps> = ({
  initialSearchTerm = "",
  initialPage = 1,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pageSize = 12;

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  const { data, loading, error, isFetching } = useFetchData<AiToolsResponse>({
    endpoint: "/aitools",
    params: { search: searchTerm, page: currentPage, page_size: pageSize },
    queryKey: ["aitools", searchTerm, currentPage],
    queryOptions: {
      staleTime: 0,
      keepPreviousData: true,
    },
  });

  const totalPages = data?.total_pages || 1;

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AiToolsList loading={loading} error={error} data={data?.data} />

      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isFetching={isFetching}
        />
      )}
    </>
  );
};

export default AiToolsWrapper;
