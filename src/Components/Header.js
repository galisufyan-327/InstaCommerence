import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../Theme/Colors";

function Header({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.opacity} onPress={onPress}>
        <Ionicons name="ios-chevron-back-outline" size={40} color={Colors.darkGrey} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxHeight: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black
  },
});
