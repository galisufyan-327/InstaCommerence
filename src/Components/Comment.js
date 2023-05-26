import { View, Text, Image, StyleSheet } from "react-native";

function Comment({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{
          uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.profileTitle}>Profile Title</Text>
        <Text style={styles.commentText}>
          This is my Comment FlashList's rendered size is not usable. Either the
          height or width is too small. Please make sure that the parent view of
          the list has a valid size. FlashList will match the size of the parent
        </Text>
      </View>
    </View>
  );
}

export default Comment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 80,
    borderBottomWidth: 0.1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "#F2F3F4",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  commentText: {
    fontSize: 16,
  },
});
