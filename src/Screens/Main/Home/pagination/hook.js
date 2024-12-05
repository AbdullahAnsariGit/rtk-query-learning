import { useEffect, useState } from "react";
import { LOG } from "../../../../Utils/helperFunctions";
import { Alert } from "react-native";

export const usePagination = (fetchData, config = {}) => {
  LOG("config", config);
  const [page, setPage] = useState(config);
  const [searchValue, setSearchValue] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  const { data, isLoading, isFetching, refetch, error } = fetchData({
    ...page,
  });

  const loadMore = () => {
    setPage((prevPage) => ({
      ...prevPage,
      page: prevPage?.page + 1,
    }));
  };

  const refresh = () => {
    LOG("pages-limit", page?.limit);
    // setPage({ page: initialPage, limit: initialLimit });
    setPage((prevPage) => ({
      ...prevPage,
      page: 1,
      limit: 5,
    }));
    setIsRefresh(true);
  };

  useEffect(() => {
    if (!isFetching && isRefresh) {
      setIsRefresh(false);
    }
  }, [isFetching, isRefresh]);

  useEffect(() => {
    console.log("page-before-fresh", config);
    setPage((prevPage) => ({
      ...prevPage,
      page: 1,
      search: config?.search,
    }));
    console.log("page-after-fresh", config);
  }, [config?.search]);

  return {
    data,
    isLoading,
    isFetching,
    loadMore,
    refresh,
    isRefresh,
    refetch,
    error,
  };
};
