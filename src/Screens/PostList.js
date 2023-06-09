import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SafeArea from "../Components/SafeArea";
import { FlashList } from "@shopify/flash-list";
import Post from "../Components/Post";
import { Colors } from "../Theme/Colors";
import Header from "../Components/Header";

//shows all posts of a user
function PostList({ navigation, route }) {
  const { postArray } = route.params;
  const profileInfo = route.params?.profileInfo ?? "";

  function handleBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      <Header title={"All Posts"} onPress={handleBackPress} />
      <View style={styles.container}>
        <FlashList
          data={postArray}
          renderItem={({ item }) => (
            <Post item={item} disable profileInfo={profileInfo} />
          )}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View
              style={{
                marginBottom: 10,
                alignItems: "center",
              }}
            >
              <Text>No more Posts</Text>
            </View>
          }
        />
      </View>
    </SafeArea>
  );
}

export default PostList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
    paddingVertical: 0,
  },
  headerContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20,
    height: 70,
    borderWidth: 1,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    height: 50,
    width: 150,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: Colors.purple,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
