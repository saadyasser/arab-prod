"use client";

import React, { useCallback, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  const pageSize = 12;

  const fetchAiTools = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/aitools?search=${searchTerm}&page=${pageParam}&page_size=${pageSize}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: AiToolsResponse = await response.json();
    return data;
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["aitools", searchTerm],
    queryFn: fetchAiTools,
    getNextPageParam: (lastPage: AiToolsResponse) => {
      if (lastPage.current_page < lastPage.total_pages) {
        return lastPage.current_page + 1;
      }
      return undefined;
    },
    staleTime: 0,
    keepPreviousData: true,
  });

  const handlePageChange = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  const totalPages = data?.pages[0]?.total_pages || 1;
  const aiToolsData = data?.pages.flatMap((page) => page.data) || [];

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <AiToolsList loading={isLoading} error={error} data={aiToolsData} />

      {!isLoading && (
        <Pagination
          currentPage={data?.pages.length || 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isFetching={isFetchingNextPage}
        />
      )}
    </>
  );
};

export default AiToolsWrapper;
