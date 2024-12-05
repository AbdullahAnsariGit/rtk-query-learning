// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Animated,
//   TouchableOpacity,
// } from 'react-native';

// // Reusable Search Overlay component
// const SearchOverlay = ({data, placeholder = 'Search...', onItemSelect}) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState(data);
//   const slideAnim = new Animated.Value(-300); // Initial off-screen position

//   // Handle the search and filter the data
//   const handleSearch = query => {
//     setSearchQuery(query);

//     if (query) {
//       const filtered = data.filter(item =>
//         item.name.toLowerCase().includes(query.toLowerCase()),
//       );
//       setFilteredData(filtered);

//       // Trigger the slide-in animation when search query is active
//       Animated.timing(slideAnim, {
//         toValue: 0, // Slide in the results
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       setFilteredData([]);
//       // Slide out the results when search query is empty
//       Animated.timing(slideAnim, {
//         toValue: -300, // Slide out of view
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };

//   // Render the search results
//   const renderItem = ({item}) => (
//     <TouchableOpacity
//       style={styles.chatItem}
//       onPress={() => onItemSelect(item)}>
//       <Text style={styles.chatText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Search Input */}
//       <TextInput
//         style={styles.searchInput}
//         placeholder={placeholder}
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />

//       {/* Animated Search Results Overlay */}
//       <Animated.View
//         style={[styles.searchResults, {transform: [{translateY: slideAnim}]}]}>
//         <FlatList
//           data={filteredData}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           ListEmptyComponent={
//             <Text style={styles.noResults}>No results found</Text>
//           }
//         />
//       </Animated.View>
//     </View>
//   );
// };

// // Default Styles for the component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   searchInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingLeft: 10,
//     marginBottom: 20,
//   },
//   searchResults: {
//     position: 'absolute',
//     top: 80,
//     left: 0,
//     right: 0,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     elevation: 4, // For Android shadow
//     shadowColor: 'black', // For iOS shadow
//     shadowOpacity: 0.2,
//     shadowOffset: {width: 0, height: 2},
//     shadowRadius: 4,
//     maxHeight: 300, // Limit the height of the result list
//   },
//   chatItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   chatText: {
//     fontSize: 16,
//   },
//   noResults: {
//     padding: 20,
//     textAlign: 'center',
//     color: 'gray',
//   },
// });

// export default SearchOverlay;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

// Reusable Search Overlay component
const SearchOverlay = ({data, placeholder = 'Search...', onItemSelect}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const slideAnim = new Animated.Value(-300); // Initial off-screen position

  // Handle the search and filter the data
  const handleSearch = query => {
    setSearchQuery(query);

    if (query) {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(filtered);

      // Trigger the slide-in animation when search query is active
      Animated.timing(slideAnim, {
        toValue: 0, // Slide in the results
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setFilteredData([]);
      // Slide out the results when search query is empty
      Animated.timing(slideAnim, {
        toValue: -300, // Slide out of view
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  // Render the search results
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => onItemSelect(item)}>
      <Text style={styles.chatText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Animated Search Results Overlay */}
      <Animated.View
        style={[styles.searchResults, {transform: [{translateY: slideAnim}]}]}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Text style={styles.noResults}>No results found</Text>
          }
        />
      </Animated.View>
    </View>
  );
};

// Default Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the screen
    paddingTop: 50, // To leave space for the search bar at the top
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  searchResults: {
    position: 'absolute',
    top: 90, // Adjust the top position to ensure it sits below the search bar
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4, // For Android shadow
    shadowColor: 'black', // For iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    maxHeight: '80%', // Limit the height of the result list to 80% of the screen
  },
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  chatText: {
    fontSize: 16,
  },
  noResults: {
    padding: 20,
    textAlign: 'center',
    color: 'gray',
  },
});

export default SearchOverlay;
