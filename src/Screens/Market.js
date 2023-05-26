import { View, Text, StyleSheet } from "react-native";
import SafeArea from "../Components/SafeArea";
import { FlashList } from "@shopify/flash-list";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import { AllProducts } from "../Context/DATA";

// market screen
function Market({ navigation }) {
  function handleBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      <Header title={"Products"} onPress={handleBackPress} />
      <View style={styles.container}>
        {/* lists all products */}
        <FlashList
          data={AllProducts}
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
