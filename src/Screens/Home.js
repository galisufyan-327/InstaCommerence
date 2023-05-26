import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import SafeArea from "../Components/SafeArea";
import { FlashList } from "@shopify/flash-list";
import { Context as AllPostContext } from "../Context/AllPostContext";
import Post from "../Components/Post";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../Theme/Colors";
import { useContext } from "react";

// news feed component first rendered when app starts.
function Home({ navigation }) {
  const { state, addPost } = useContext(AllPostContext);
  function handleEndReach() {
    addPost();
  }
  return (
    <SafeArea>
      {/* header container contains logo and button to market */}
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/insta.png")}
          style={{ maxWidth: 90, maxHeight: 50 }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Market")}
        >
          <Entypo name="shop" size={40} color={Colors.black} />
        </TouchableOpacity>
      </View>
      {/* shows post list */}
      <View style={styles.container}>
        <FlashList
          data={state.allPosts}
          renderItem={({ item }) => <Post item={item} />}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReach}
          ListFooterComponent={
            <View
              style={{
                marginBottom: 10,
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color={Colors.black} />
            </View>
          }
        />
      </View>
    </SafeArea>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    padddingTop: 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 70,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
