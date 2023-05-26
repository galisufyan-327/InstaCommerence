import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { Context as UserContext } from "../Context/UserContext";
import SafeArea from "../Components/SafeArea";
import { FlashList } from "@shopify/flash-list";
import { Colors } from "../Theme/Colors";
import { SegmentedButtons } from "react-native-paper";
import PostThumbnail from "../Components/PostThumbnail";
import ProductCard from "../Components/ProductCard";
import { AppUsers } from "../Context/DATA";
import HeaderTop from "../Components/Header";

// this profle screen shows details of user
function Profile({ route, navigation }) {
  const userTitle = route.params?.userTitle ?? "";
  const user = AppUsers.find((user) => user.title === userTitle);
  const { state } = useContext(UserContext);
  const obj = user !== undefined ? user : state;

  const { width } = useWindowDimensions();
  const [segment, setSegment] = useState("post");

  function renderItem({ item }) {
    if (segment === "post") {
      return (
        <PostThumbnail
          width={(width - 100) / 3}
          item={item}
          postList={obj.posts}
          profileInfo={{
            profileName: obj.title,
            profilePicture: obj.profilePicture,
          }}
        />
      );
    } else {
      return <ProductCard item={item} />;
    }
  }
  function keyExtractor(item, index) {
    return index.toString(); // Provide a unique key for each item
  }
  function handleBackPress() {
    navigation.goBack();
  }
  function Header() {
    return (
      <>
        {user && (
          <HeaderTop
            title={`${obj.title}'s Profile`}
            onPress={handleBackPress}
          />
        )}

        <Image
          style={styles.coverImage}
          source={{
            uri: obj.coverPicture,
          }}
        />
        <View style={styles.profileInfoContainer}>
          <View style={styles.followContainer}>
            <Text style={styles.followNumber}>{obj.followers}</Text>
            <Text style={styles.followText}>Followers</Text>
          </View>
          <View style={styles.profileInfo}>
            <Image
              style={styles.profileImage}
              source={{
                uri: obj.profilePicture,
              }}
            />
            <Text style={styles.profileName}>{obj.title}</Text>
          </View>
          <View style={styles.followContainer}>
            <Text style={styles.followNumber}>{obj.following}</Text>
            <Text style={styles.followText}>Following</Text>
          </View>
        </View>
        <SegmentedButtons
          value={segment}
          onValueChange={setSegment}
          style={{ width: "97%", alignSelf: "center", marginBottom: 10 }}
          buttons={[
            {
              value: "post",
              label: "Post",
              style: {
                borderRadius: 10,
                borderColor: Colors.white,
              },
            },
            {
              value: "product",
              label: "Product",
              style: {
                borderRadius: 10,
                borderColor: Colors.white,
              },
            },
          ]}
        />
      </>
    );
  }
  return (
    <SafeArea>
      <View style={styles.container}>
        <FlashList
          ListHeaderComponent={Header}
          numColumns={3}
          data={segment === "post" ? obj.posts : obj.products}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={30}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeArea>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  coverImage: {
    height: 200,
    width: "100%",
  },
  profileImage: {
    height: 125,
    width: 125,
    borderRadius: 75,
    padding: 10,
    marginTop: -60,
    borderWidth: 10,
    borderColor: Colors.white,
  },
  profileInfoContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 10,
  },
  followContainer: {
    alignItems: "center",
  },
  followNumber: {
    fontSize: 22,
    fontWeight: "bold",
  },
  followText: {
    fontSize: 16,
    fontWeight: "100",
  },
  profileInfo: {
    alignItems: "center",
    marginHorizontal: -30,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 10,
  },
});
