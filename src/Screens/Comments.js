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
import { useContext, useState } from "react";
import { Context as UserContext } from "../Context/UserContext";
import { Context as AllPostContext } from "../Context/AllPostContext";
import { Colors } from "../Theme/Colors";

//This is comment screen
function Comments({ navigation, route }) {
  //importing state of user from context
  const { state } = useContext(UserContext);
  // data for all posts
  const allPost = useContext(AllPostContext);
  //state to handle text input
  const [input, setInput] = useState("");
  //post title of the current post sent through route
  const { postTitle } = route.params;
  //function to find current post comments array
  const { comments } = allPost.state.allPosts.find(
    (post) => post.title === postTitle
  );

  //this function  adds comment to the comments array.
  function handlePostPress() {
    const cObj = {
      profilePicture: state.profilePicture,
      profileName: state.title,
      comment: input,
    };
    allPost.addComment({ postTitle, comment: cObj });
  }
  //this function handle back button press
  function handleBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      {/* header */}
      <Header title="Comments" onPress={handleBackPress} />
      {/* container for comments list */}
      <View style={styles.container}>
        {/* components that handles rendering and managing comments list */}
        <FlashList
          data={comments}
          renderItem={({ item }) => <Comment item={item} />}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* this container contains text input for comment add. */}
      <View style={styles.inputContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: state.profilePicture,
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
          onPress={handlePostPress}
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
    backgroundColor: Colors.offWhite,
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
