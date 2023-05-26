import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import SafeArea from "../Components/SafeArea";
import Header from "../Components/Header";
import Comment from "../Components/Comment";
import { useState } from "react";
import { Colors } from "../Theme/Colors";

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Comments({ navigation }) {
  const [input, setInput] = useState("");
  function handleBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      <Header title="Comments" onPress={handleBackPress} />
      <View style={styles.container}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => <Comment item={item} />}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
          }}
        />

        <TextInput
          style={styles.textInput}
          value={input}
          onChangeText={setInput}
          placeholder="Enter Comment."
          placeholderTextColor={"grey"}
        />
        <TouchableOpacity
          style={styles.inputButton}
          disabled={input === "" ? true : false}
        >
          <Text
            style={{
              color: input === "" ? "#0B406C" : "#1574C2",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            POST
          </Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
}

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 50,
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    maxHeight: 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: Colors.offWhite
  },
  inputButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
