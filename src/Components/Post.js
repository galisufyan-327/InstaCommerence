import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Post() {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileInfoContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
          }}
        />

        <Text style={styles.profileTitle}>Profile Name</Text>
      </TouchableOpacity>
      <Image
        style={styles.postImage}
        source={{
          uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
        }}
      />
      <View style={styles.iconsRow}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Octicons
            name={liked ? "heart-fill" : "heart"}
            size={24}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Octicons name="comment" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 350,
    width: "100%",
    marginVertical: 15,
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 150,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  profileTitle: {
    fontWeight: "bold",
  },
  postImage: {
    height: 250,
    width: "100%",
    borderRadius: 20,
    marginVertical: 10,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: 100,
  },
});
