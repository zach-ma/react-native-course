import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  // setTimeout(() => {
  // console.log(props);
  //   console.log(navigation);
  //   console.log(navigation.navigate);
  // }, 2000);
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  console.log(results);

  const filterResultsByPrice = (price) => {
    // price === '$'|'$$'|'$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    // <View style={{ borderColor: "red", borderWidth: 10 }}>
    // NOTE add style of flex 1 into most parent view
    // <View style={{ flex: 1 }}>
    // NOTE using placeholder <> and </>, we do not have to worry about the flex property
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => {
          searchApi(term);
          console.log("submitted");
        }}
      />
      <ScrollView>
        {errorMessage ? <Text> {errorMessage}</Text> : null}
        {/* <Text> We have found {results.length} results</Text> */}
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
