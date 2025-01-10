"use client";

import React, { useCallback, useState } from "react";
import styles from "./AiTools.module.css";
import Header from "./components/Header";
import AiToolsList from "./components/AiToolsList";
import { useFetchData } from "@/hooks/useFetchData";
import { AiToolsResponse } from "@/types/aiTools";
import Pagination from "./components/Pagination";

const AiTools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
    <div className={styles["ai-tools-container"]}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AiToolsList loading={loading} error={error} data={data?.data} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isFetching={isFetching}
      />
    </div>
  );
};

export default AiTools;
