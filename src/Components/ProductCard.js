import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Colors } from "../Theme/Colors";
import { useNavigation } from "@react-navigation/native";

function ProductCard({ item, title, price }) {
  const navigation = useNavigation();
  function handleProductPress() {
    navigation.navigate("ProductDetail");
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleProductPress}>
      <Image
        style={styles.coverImage}
        source={{
          uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
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
          {title || "Item 1322277517/photo"}
        </Text>
        <Text style={styles.price}>$ {price || "0"}</Text>
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
