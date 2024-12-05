import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import Background from '../../../Components/Background';
import CustomHeader from '../../../Components/CustomHeader';
import routes from '../../../Navigation/routes';
import Tabbar from '../../../Components/Tabbar';
import RowCard from '../../../Components/Cards/RowCard';
import InputField from '../../../Components/InputField';
import {styles} from './styles';
import {font, spacing} from '../../../theme/styles';
import {useGetAllRafflesQuery} from '../../../Api/rafflesApiSlice';
import {formatDate, LOG} from '../../../Utils/helperFunctions';
import EmptyDataComponent from '../../../Components/EmptyDataComponent';
import {colors} from '../../../theme/colors';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import fonts from '../../../Assets/fonts';

const RafflesLogs = () => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const [statusObj, setStatusObj] = useState({
    status: 'ONGOING',
    page: 1,
    limit: 5,
  });
  LOG('Raffles-Payload', statusObj);
  const [raffles, setRaffles] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const {data, isLoading, isFetching} = useGetAllRafflesQuery(statusObj);
  console.log('data', data);

  useEffect(() => {
    if (data?.data?.docs) {
      setHasNextPage(data?.data?.hasNextPage);
      if (statusObj.page === 1) {
        setRaffles(data?.data?.docs); // Reset data when the page is 1
      } else {
        setRaffles(prevState => [...prevState, ...data?.data?.docs]); // Append new data to existing data
      }
    }
  }, [data, statusObj.page]);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const handleSearchChange = text => {
    setSearch(text);
  };

  // Filter raffles based on search input
  const filteredRaffles = raffles.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item, index}) => {
    return (
      <RowCard
        key={index}
        name={item?.title}
        code={item?._id}
        date={formatDate(item?.endDate, 'dmy')}
        ticketCost={`$${item.ticketPrice}`}
        ticketQty={item.numTickets}
        ticketWinPrize={`$${item.prize}`}
      />
    );
  };

  const loadMoreData = () => {
    if (hasNextPage && !isFetching) {
      setStatusObj(prev => ({...prev, page: prev.page + 1}));
    }
  };

  return (
    <Background>
      <CustomHeader routeName={routes.main.rafflesLogs} />
      <View style={styles.container}>
        <Tabbar
          onSelected={tab => {
            setStatusObj({status: tab, page: 1, limit: 5});
            setRaffles([]);
          }}
        />
        <View style={{height: spacing.medium}} />
        <InputField
          leftIcon="search"
          placeholder={'Search Here....'}
          onChangeText={handleSearchChange}
          value={search}
          onFocus={onFocus}
          onBlur={onBlur}
          returnKeyType="search"
          style={{width: '100%'}}
        />
        <FlatList
          data={filteredRaffles} // Use the filtered data here
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
          contentContainerStyle={{paddingBottom: 20}}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator animating={true} color={colors.text?.white} />
            ) : (
              <EmptyDataComponent message="No log available!" />
            )
          }
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            isFetching ? (
              <View style={{alignItems: 'center'}}>
                <CustomText
                  text="Loading more"
                  color={colors.text.white}
                  size={font.xsmall}
                  font={fonts.e.light}
                />
              </View>
            ) : (
              !hasNextPage &&
              raffles.length > 0 && (
                <View style={{alignItems: 'center'}}>
                  <CustomText
                    text="No more logs found"
                    color={colors.text.white}
                    size={font.xsmall}
                    font={fonts.e.light}
                  />
                </View>
              )
            )
          }
        />
      </View>
    </Background>
  );
};

export default RafflesLogs;
