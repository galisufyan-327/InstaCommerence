import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function PostThumbnail({ width }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, { minWidth: width }]}
      onPress={() => navigation.navigate("PostList")}
    >
      <Image
        style={styles.coverImage}
        source={{
          uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
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
