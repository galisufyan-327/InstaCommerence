import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SafeArea from "../Components/SafeArea";
import { FlashList } from "@shopify/flash-list";
import Post from "../Components/Post";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../Theme/Colors";

const DATA = [1, 2, 3, 4, 5];
function Home({ navigation }) {
  return (
    <SafeArea>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Market")}
        >
          <Entypo name="shop" size={24} color={Colors.white} />
          <Text style={styles.buttonText}>Shop</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => <Post item={item} />}
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    padddingTop: 0,
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
    height: 40,
    width: "100%",
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
