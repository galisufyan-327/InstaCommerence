import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import SafeArea from "../Components/SafeArea";
import { useForm } from "react-hook-form";
import PrimaryButton from "../Components/PrimaryButton";
import FormInputField from "../Components/FormInputField";
import FormSelectImage from "../Components/FormSelectImage";
import { SegmentedButtons } from "react-native-paper";
import { Colors } from "../Theme/Colors";
import { Context as UserContext } from "../Context/UserContext";

// screen to add new posts / products
function NewPost({ navigation }) {
  const { control, handleSubmit, reset } = useForm();
  const { addPost, addProduct } = useContext(UserContext);

  const [disabled, setDisabled] = useState(false);
  const [segment, setSegment] = useState("post");

  //adds new post/product with a delay of 1 second.
  function newPost(data) {
    setDisabled(true);
    setTimeout(() => {
      reset();
      setDisabled(false);
      if (segment === "post") {
        const post = {
          ...data,
          liked: false,
        };
        addPost(post);
      } else {
        addProduct(data);
      }
      navigation.navigate("HomeScreen");
    }, 1000);
  }
  return (
    <SafeArea>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.headerText}>New Post</Text>
            <SegmentedButtons
              value={segment}
              onValueChange={setSegment}
              style={{ width: "90%" }}
              buttons={[
                {
                  value: "post",
                  label: "Post",
                  style: { borderRadius: 10, borderColor: Colors.purple },
                },
                {
                  value: "product",
                  label: "Product",
                  style: { borderRadius: 10, borderColor: Colors.purple },
                },
              ]}
            />
          </View>

          <View style={styles.container}>
            <FormSelectImage
              name={"image"}
              title={"Image"}
              control={control}
              rule={{
                required: "Image must be selected.",
              }}
            />

            <FormInputField
              name={"title"}
              placeholder={"Enter title here."}
              control={control}
              rule={{
                required: "Title cannot be empty.",
              }}
            />
            {segment === "product" ? (
              <>
                <FormInputField
                  name={"description"}
                  title={"Description"}
                  placeholder={"Enter Description here."}
                  multiline
                  control={control}
                />
                <FormInputField
                  name={"price"}
                  title={"Price"}
                  placeholder={"Enter price here."}
                  keyboardType={"number-pad"}
                  control={control}
                  rule={{
                    required: "Title cannot be empty.",
                  }}
                />
              </>
            ) : null}
            <PrimaryButton
              title={"Publish"}
              onPress={handleSubmit(newPost)}
              disabled={disabled}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}

export default NewPost;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
