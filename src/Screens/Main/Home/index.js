import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useGetAllRafflesQuery } from "../../../Api/rafflesApiSlice";
import PaginatedList from "./pagination/List";
import { colors } from "../../../theme/colors";
import { TextInput } from "react-native-gesture-handler";
import Popup from "../../../Components/Popup";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    limit: 5,
    search: "",
    startDate: "",
    endDate: "",
  });

  const [isVisible, setIsVisible] = useState(true);

  const renderItem = ({ item, index }) => (
    <View
      key={index}
      style={{
        marginBottom: 10,
        padding: 10,
        backgroundColor: colors?.theme?.primary,
      }}
    >
      <Text style={{ color: "white" }}>{item.taskName}</Text>
      <Text style={{ color: "white" }}>{item.taskDescription}</Text>
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
          onChangeText={(text) =>
            setSearchQuery((prevState) => ({
              ...prevState,
              search: text,
            }))
          } // Update search query
        />

        {/* Search button */}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            // Trigger the search (in this case, it's just updating filters)
            console.log("Searching for:", searchQuery);
          }}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <PaginatedList
        fetchData={useGetAllRafflesQuery}
        renderItem={renderItem}
        payload={searchQuery}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={() => (
          <Text style={{ textAlign: "center", color: "white" }}>
            No more data
          </Text>
        )}
      />
      <Button
        title="Filter"
        onPress={() => {
          setSearchQuery((prevState) => ({
            ...prevState,
            startDate: "2024-12-03T08:44:13.774Z",
            endDate: "2024-12-05T08:44:13.774Z",
          }));
        }}
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
