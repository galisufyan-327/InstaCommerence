import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../Theme/Colors";

//A custom button.
const PrimaryButton = ({ onPress, title, disabled }) => (
  <TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
    {disabled ? (
      <ActivityIndicator size="small" color="white" />
    ) : (
      <Text style={styles.text}>{title}</Text>
    )}
  </TouchableOpacity>
);

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.purple,
    width: "90%",
    height: 55,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 15,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
