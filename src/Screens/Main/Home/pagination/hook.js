import { useEffect, useState } from "react";
import { LOG } from "../../../../Utils/helperFunctions";

export const usePagination = (fetchData, config = {}) => {
  LOG("config", config);
  const { page: initialPage, limit: initialLimit, ...rest } = config;

  console.log("restrestrest", rest);

  const [page, setPage] = useState({ page: initialPage, limit: initialLimit });
  const [filters, setFilters] = useState(rest);
  const [isRefresh, setIsRefresh] = useState(false);

  console.log("filters--inhook", filters);

  // Combine page and filters to fetch data
  let myfilter = {
    search: "latest",
  };
  const { data, isLoading, isFetching, refetch, error } = fetchData({
    ...page,
    ...filters,
  });

  const loadMore = () => {
    setPage((prevPage) => ({
      ...prevPage,
      page: prevPage.page + 1,
    }));
  };

  const refresh = () => {
    LOG("pages-limit", page?.limit);
    setPage({ page: initialPage, limit: initialLimit });
    setIsRefresh(true);
  };

  const applyFilters = (newFilters) => {
    console.log("newFilters", newFilters);

    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    setPage({ page: initialPage, limit: initialLimit }); // Reset pagination on new filters
  };

  // Reset `isRefresh` when fetching is complete
  useEffect(() => {
    if (!isFetching && isRefresh) {
      setIsRefresh(false);
    }
  }, [isFetching, isRefresh]);

  return {
    data,
    isLoading,
    isFetching,
    loadMore,
    refresh,
    isRefresh,
    applyFilters,
    refetch,
    error,
  };
};
