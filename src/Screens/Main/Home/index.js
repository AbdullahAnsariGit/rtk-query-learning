// import {useNavigation} from '@react-navigation/native';
// import React, {useState} from 'react';
// import {FlatList, RefreshControl, Text, View} from 'react-native';
// import Animated, {FadeOut, SlideInLeft} from 'react-native-reanimated';
// import {useGetAllRafflesQuery} from '../../../Api/rafflesApiSlice';
// import {useGetAllUserQuery} from '../../../Api/userApiSlice';
// import Background from '../../../Components/Background';
// import RaffleCard from '../../../Components/Cards/RafflesCard';
// import CustomHeader from '../../../Components/CustomHeader';
// import EmptyDataComponent from '../../../Components/EmptyDataComponent';
// import InputField from '../../../Components/InputField';
// import MainContainer from '../../../Components/MainContainer';
// import CustomText from '../../../Components/wrappers/Texts/CustomText';
// import routes from '../../../Navigation/routes';
// import {colors} from '../../../theme/colors';
// import {font, spacing} from '../../../theme/styles';
// import {vh} from '../../../theme/units';
// import {LOG} from '../../../Utils/helperFunctions';
// import styles from './styles';

// const Home = () => {
//   const navigation = useNavigation();
//   const {data, isLoading, isFetching} = useGetAllRafflesQuery(page);
//   LOG('isFetching----', isFetching);
//   LOG('isLoading----', isLoading);
//   LOG('data-----', data);
//   const {
//     data: allUser,
//     isLoading: isUserLoading,
//     isFetching: isUserFetching,
//   } = useGetAllUserQuery(userParams);

//   const [search, setSearch] = useState('');
//   const [focused, setFocused] = useState(false);
//   const [raffles, setRaffles] = useState([]);
//   const [users, setUsers] = useState(allUser?.data?.docs || []);
//   const [page, setPage] = useState({page: 1, limit: 5});
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [isLoadingMore, setIsLoadingMore] = useState(false);
//   const [hasNextPage, setHasNextPage] = useState(true);
//   const [userParams, setUserParams] = useState({
//     page: 1,
//     limit: 10,
//   });
//   LOG('hasNextPage', hasNextPage);
//   LOG('usersusers', users);

//   // For Focused state
//   const onFocus = () => setFocused(true);
//   const onBlur = () => setFocused(false);
//   const handleSearchChange = text => setSearch(text);

//   const fetchRaffles = async (isRefresh = false) => {
//     try {
//       if (isFetching) return;
//       setIsLoadingMore(true);
//       const newRaffles = data?.data?.docs || [];
//       LOG('newRaffles:', newRaffles);
//       setHasNextPage(data?.data?.hasNextPage);
//       setRaffles(prevRaffles =>
//         isRefresh ? newRaffles : [...prevRaffles, ...newRaffles],
//       );
//       if (!isRefresh) {
//         setPage(prev => ({...prev, page: prev.page + 1}));
//       }
//     } catch (err) {
//       LOG('Error fetching raffles:', err);
//     } finally {
//       setIsLoadingMore(false);
//       setIsRefreshing(false);
//     }
//   };

//   const handleRefresh = () => {
//     setPage({page: 1, limit: 5});
//     setIsRefreshing(true);
//     fetchRaffles(true);
//   };

//   // useEffect(() => {
//   //   if (page.page === 1 || raffles.length === 0) {
//   //     fetchRaffles(true);
//   //   }
//   // }, [page.page]);

//   const renderRaffleItem = ({item, index}) => (
//     <RaffleCard
//       key={index}
//       isLoading={isLoading}
//       raffle={item}
//       sharedTransitionTag={`raffle-${item.id}`}
//       onPress={() => {
//         navigation.navigate(routes.main.rafflesDetail, {
//           raffleId: item._id,
//           sharedTransitionTag: `raffle-${item.id}`,
//         });
//       }}
//       buyPress={() => navigation.navigate(routes.main.paymentMethod)}
//     />
//   );

//   const renderProfile = ({item}) => {
//     LOG('renderProfile', item);

//     return (
//       <Animated.View
//         exiting={FadeOut.duration(600)}
//         entering={SlideInLeft.duration(300)}
//         style={styles?.profileWrap}>
//         {/* <FastImage
//           source={{uri: imageServer + item?.image}}
//           style={styles.profiles}
//           resizeMode="cover"
//         /> */}
//         <CustomText
//           text={item?.firstName?.charAt(0).toUpperCase()}
//           size={font?.xxlarge}
//         />
//       </Animated.View>
//     );
//   };
//   return (
//     <>
//       <Background>
//         <CustomHeader routeName={routes?.tab.home} title={'Home'} />
//         <MainContainer>
//           <InputField
//             leftIcon="search"
//             placeholder={'Search Raffles Here.....'}
//             onChangeText={handleSearchChange}
//             value={search}
//             onFocus={onFocus}
//             onBlur={onBlur}
//             returnKeyType="search"
//             style={{width: '100%'}}
//           />
//           {true && (
//             <FlatList
//               data={users}
//               renderItem={renderProfile}
//               keyExtractor={(item, index) => index.toString()}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{
//                 paddingHorizontal: spacing.small,
//               }}
//               style={{
//                 maxHeight: 100,
//                 height: 100,
//               }}
//               ItemSeparatorComponent={() => (
//                 <View style={{width: spacing.small}} />
//               )}
//             />
//           )}
//           <FlatList
//             data={raffles}
//             renderItem={renderRaffleItem}
//             keyExtractor={item => item.id}
//             contentContainerStyle={{
//               paddingHorizontal: spacing.small,
//               paddingBottom: vh * 14,
//             }}
//             style={{maxHeight: vh * 68}}
//             ListEmptyComponent={
//               <EmptyDataComponent message="No raffles available!" />
//             }
//             ItemSeparatorComponent={() => (
//               <View style={{height: spacing.small}} />
//             )}
//             onEndReached={hasNextPage && !isFetching ? fetchRaffles : null}
//             onEndReachedThreshold={0.1}
//             refreshControl={
//               <RefreshControl
//                 refreshing={isRefreshing}
//                 onRefresh={handleRefresh}
//               />
//             }
//             ListFooterComponent={
//               isLoadingMore ? (
//                 <View style={{padding: spacing.medium}}>
//                   <Text
//                     style={{
//                       textAlign: 'center',
//                       color: colors.text.placeholder,
//                     }}>
//                     Loading more...
//                   </Text>
//                 </View>
//               ) : !hasNextPage ? (
//                 <View style={{padding: spacing.medium}}>
//                   <Text
//                     style={{
//                       textAlign: 'center',
//                       color: colors.text.placeholder,
//                     }}>
//                     No more raffles available
//                   </Text>
//                 </View>
//               ) : null
//             }
//           />
//         </MainContainer>
//       </Background>
//     </>
//   );
// };

// export default Home;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useGetAllRafflesQuery } from "../../../Api/rafflesApiSlice";
import PaginatedList from "./pagination/List";
import { colors } from "../../../theme/colors";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(null);

  // const filters = { search: "example" }; // Add your dynamic filters here
  const renderItem = ({ item, index }) => (
    <View
      key={index}
      style={{
        marginBottom: 10,
        padding: 10,
        backgroundColor: colors?.theme?.primary,
      }}
    >
      <Text style={{ color: "white" }}>
        {item.firstName + " " + item.lastName}
      </Text>
      <Text style={{ color: "white" }}>{item.email}</Text>
    </View>
  );

  const ListHeader = () => (
    <View>
      <Text
        style={{ color: colors.text.white, fontSize: 20, textAlign: "center" }}
      >
        Pagination & Filter With RTK Query
      </Text>
    </View>
  );

  return (
    <View>
      <ListHeader />
      {/* Search input field */}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please search here"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Update search query
        />

        {/* Search button */}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            // Trigger the search (in this case, it's just updating filters)
            console.log("Searching for:", searchQuery);
            setFilters({ search: searchQuery });
          }}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <PaginatedList
        fetchData={useGetAllRafflesQuery}
        renderItem={renderItem}
        filters={filters}
        initialPage={1}
        initialLimit={2}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={() => (
          <Text style={{ textAlign: "center", color: "white" }}>
            {/* Loading more... */}
          </Text>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.text.white,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.text.white,
    borderRadius: 5,
    marginRight: 10,
    color: "white",
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.theme.primary,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
