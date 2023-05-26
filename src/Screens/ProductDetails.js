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

function ProductDetails({ navigation }) {
  function handleBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
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
        <Text style={styles.title}>daksjdk</Text>
        <Text style={styles.price} numberOfLines={2}>
          Rs. 0
        </Text>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.text}>
          1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=
        </Text>

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
