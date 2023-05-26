import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//used to render Single post.
function Post({ item, disable, profileInfo }) {
  const [liked, setLiked] = useState(item.liked);
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate("UserProfile", { userTitle: item.profileName });
  }
  return (
    <View style={styles.container}>
      {/* This is profile info above image i.e. profile image and profile title */}
      <TouchableOpacity
        style={styles.profileInfoContainer}
        onPress={handleNavigation}
        disabled={disable}
      >
        <Image
          style={styles.profileImage}
          source={{
            uri: item.profilePicture || profileInfo.profilePicture,
          }}
        />

        <Text style={styles.profileTitle}>
          {item.profileName || profileInfo.profileName}
        </Text>
      </TouchableOpacity>
      {/* this shows post Image. */}
      <Image
        style={styles.postImage}
        source={{
          uri: item.image,
        }}
      />
      {/* container for buttons below image i.e heart and comment */}
      <View style={styles.iconsRow}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Octicons
            name={liked ? "heart-fill" : "heart"}
            size={24}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Comments", {
              postTitle: item.title,
            })
          }
        >
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
    justifyContent: "flex-start",
    paddingLeft: 10,
    width: "90%",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  profileTitle: {
    fontWeight: "bold",
    marginLeft: 10,
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
