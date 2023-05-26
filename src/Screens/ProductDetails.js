import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import SafeArea from "../Components/SafeArea";
import { Colors } from "../Theme/Colors";
import PrimaryButton from "../Components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

//product details screen. that shows product details as in title , picture, price.
function ProductDetails({ navigation, route }) {
  const { product } = route.params;
  function handleBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: product.image,
        }}
      >
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons
            name="ios-chevron-back-outline"
            size={40}
            color={Colors.white}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price} numberOfLines={1}>
          $ {product.price}
        </Text>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.text}>{product.description}</Text>

        <View style={{ flex: 1 }} />
        <PrimaryButton title={"Buy Now"} />
      </View>
    </SafeArea>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  backButton: {
    margin: 15,
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
    marginTop: "-4%",
    padding: 20,
    paddingTop: "8%",
  },

  title: {
    color: Colors.black,
    fontSize: 28,
    fontWeight: "bold",
    width: "70%",
  },

  text: {
    color: Colors.darkGrey,
    fontSize: 15,
    marginTop: 10,
  },
  price: {
    color: Colors.purple,
    textAlign: "right",
    fontSize: 20,
    marginTop: -28,
    marginRight: 20,
  },
  description: {
    marginTop: 10,
    marginLeft: 3,
    color: Colors.black,
    fontSize: 18,
    fontWeight: "500",
  },
});
