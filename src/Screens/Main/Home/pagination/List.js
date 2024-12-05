// import React, { useRef } from "react";
// import { useGetAllRafflesQuery } from "../../../../Api/rafflesApiSlice";
// import { usePagination } from "./hook";
// import ActivityLoader from "../../../../Components/ActivityLoader";
// import {
//   Alert,
//   Button,
//   FlatList,
//   RefreshControl,
//   Text,
//   View,
// } from "react-native";
// import { font, layout, spacing } from "../../../../theme/styles";
// import { colors } from "../../../../theme/colors";
// import fonts from "../../../../Assets/fonts";
// import { vh } from "../../../../theme/units";

// const PaginatedList = () => {
//   const {
//     data,
//     isLoading,
//     isFetching,
//     loadMore,
//     refresh,
//     isRefresh,
//     applyFilters,
//     error,
//   } = usePagination(useGetAllRafflesQuery);
//   console.log("isRefresh", isRefresh);

//   const onEndReachedCalledDuringMomentum = useRef(false); // Track if momentum scroll

//   console.log("data-data", data?.data?.length);
//   console.log("errorerror", error);

//   if (isLoading) return <ActivityLoader />;

//   const renderItem = ({ item, index }) => {
//     console.log("item", item);

//     return (
//       <View
//         key={index}
//         style={{
//           gap: spacing.small,
//           backgroundColor: colors?.theme?.primary,
//           margin: spacing.small,
//           padding: spacing.medium,
//           borderRadius: layout.borderRadius,
//         }}
//       >
//         <Text style={{ color: "white" }}>
//           {item.firstName + " " + item?.lastName}
//         </Text>
//         <Text style={{ color: "white" }}>{item.email}</Text>
//         <Text style={{ color: "white" }}>{item.hostedUrl}</Text>
//         <Text style={{ color: "white" }}>{item.rollNo}</Text>
//       </View>
//     );
//   };

//   // const handleScrollEnd = ({ distanceFromEnd }) => {
//   //   console.log("distanceFromEnd", distanceFromEnd);
//   //   // Only load more when we reach the bottom and momentum scroll is not happening
//   //   if (distanceFromEnd >= 0 && !onEndReachedCalledDuringMomentum.current) {
//   //     loadMore();
//   //   }
//   // };

//   const handleMomentumScrollBegin = () => {
//     // Set the flag to true when momentum scroll begins to prevent onEndReached from being called
//     onEndReachedCalledDuringMomentum.current = true;
//   };

//   const handleMomentumScrollEnd = () => {
//     // Reset the flag to false after momentum scroll ends
//     onEndReachedCalledDuringMomentum.current = false;
//   };

//   return (
//     <>
//       <View style={{ justifyContent: "center", alignSelf: "center" }}>
//         <Text
//           style={{
//             color: colors.text.white,
//             fontSize: font?.xlarge,
//             fontFamily: fonts?.e?.semibold,
//           }}
//         >
//           Testing Custom Pagination
//         </Text>
//         <Text style={{ color: colors.text.white, textAlign: "center" }}>
//           Using RTK query
//         </Text>
//       </View>

//       <FlatList
//         data={data?.data}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: vh * 8 }}
//         style={{ maxHeight: vh * 80, height: vh * 80 }}
//         refreshControl={
//           <RefreshControl refreshing={isRefresh} onRefresh={refresh} />
//         }
//         onEndReached={loadMore}
//         onEndReachedThreshold={0}
//         // onMomentumScrollBegin={handleMomentumScrollBegin}
//         // onMomentumScrollEnd={handleMomentumScrollEnd}
//         ListFooterComponent={() => {
//           return isFetching && <ActivityLoader />;
//         }}
//       />
//     </>
//   );
// };

// export default PaginatedList;

import React, { useRef, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import { usePagination } from "./hook";
import ActivityLoader from "../../../../Components/ActivityLoader";
import { vh } from "../../../../theme/units";
import EmptyDataComponent from "../../../../Components/EmptyDataComponent";

const PaginatedList = ({
  fetchData,
  renderItem,
  initialPage,
  initialLimit,
  filters = {},
  ListHeaderComponent,
  ListFooterComponent,
}) => {
  const {
    data,
    isLoading,
    isFetching,
    loadMore,
    refresh,
    isRefresh,
    applyFilters,
    error,
  } = usePagination(fetchData, {
    page: initialPage,
    limit: initialLimit,
    ...filters,
  });

  console.log("filters-paginatedList", filters);

  const onEndReachedCalledDuringMomentum = useRef(false); // Track if momentum scroll

  // Optionally apply filters on load
  // useEffect(() => {
  //   if (filters && Object.keys(filters).length) {
  //     applyFilters(filters);
  //   }
  // }, [filters, applyFilters]);

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
        onEndReached={loadMore}
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
