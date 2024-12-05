import React, { useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import ActivityLoader from "../../../../Components/ActivityLoader";
import EmptyDataComponent from "../../../../Components/EmptyDataComponent";
import { vh } from "../../../../theme/units";
import { LOG } from "../../../../Utils/helperFunctions";
import { usePagination } from "./hook";

const PaginatedList = ({
  fetchData,
  renderItem,
  payload = {},
  ListHeaderComponent,
  ListFooterComponent,
}) => {
  const { data, isLoading, isFetching, loadMore, refresh, isRefresh } =
    usePagination(fetchData, { ...payload });
  LOG("payload", payload);
  LOG("data?.data?.data", data);

  if (isLoading) return <ActivityLoader />;

  return (
    <>
      {/* {ListHeaderComponent && ListHeaderComponent()} */}

      <FlatList
        data={data?.data}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: vh * 8 }}
        style={{ maxHeight: vh * 80, height: vh * 80 }}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={refresh} />
        }
        onEndReached={() => {
          if (data?.hasNextPage) {
            loadMore();
          }
        }}
        onEndReachedThreshold={0}
        ListEmptyComponent={() => (
          <EmptyDataComponent message="No Items Found" />
        )}
        ListFooterComponent={() => {
          return isFetching ? (
            <ActivityLoader />
          ) : ListFooterComponent ? (
            ListFooterComponent()
          ) : null;
        }}
      />
    </>
  );
};

export default PaginatedList;
