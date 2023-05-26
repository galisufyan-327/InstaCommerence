import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

//this component is render in profile ,shows only the image
function PostThumbnail({ width, item, postList, profileInfo }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, { minWidth: width }]}
      onPress={() =>
        navigation.navigate("PostList", {
          postArray: postList,
          profileInfo: profileInfo,
        })
      }
    >
      <Image
        style={styles.coverImage}
        source={{
          uri: item.image,
        }}
      />
    </TouchableOpacity>
  );
}

export default PostThumbnail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 2,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
  },
  coverImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
});
