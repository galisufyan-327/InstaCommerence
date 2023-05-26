import { View, Text, StyleSheet } from "react-native";
import SafeArea from "../Components/SafeArea";
import { FlashList } from "@shopify/flash-list";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function Market({ navigation }) {
  function handleBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      <Header title={"Products"} onPress={handleBackPress} />
      <View style={styles.container}>
        <FlashList
          data={DATA}
          numColumns={2}
          estimatedItemSize={30}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard item={item} />}
          ListFooterComponent={
            <View
              style={{
                marginBottom: 10,
                alignItems: "center",
              }}
            >
              <Text>No more Products</Text>
            </View>
          }
        />
      </View>
    </SafeArea>
  );
}

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
