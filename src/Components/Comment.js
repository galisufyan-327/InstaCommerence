import { View, Text, Image, StyleSheet } from "react-native";

//This component render single comment.
function Comment({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{
          uri: item.profilePicture,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.profileTitle}>{item.profileName}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
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
