import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Colors } from "../Theme/Colors";
import { useNavigation } from "@react-navigation/native";

//renders a product card with its details i.e image, title, price
function ProductCard({ item }) {
  const navigation = useNavigation();
  function handleProductPress() {
    navigation.navigate("ProductDetail", { product: item });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleProductPress}>
      <Image
        style={styles.coverImage}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    elevation: 3,
    borderRadius: 10,
    justifyContent: "flex-start",
    backgroundColor: Colors.white,
    aspectRatio: 1 / 1.4,
  },
  coverImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    aspectRatio: 1 / 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.purple,
  },
});
