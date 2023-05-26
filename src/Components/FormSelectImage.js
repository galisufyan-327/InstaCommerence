import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { EvilIcons } from "@expo/vector-icons";

//This component handles image picker  and validates selected image.
const FormSelectImage = ({ control, name, rule, title }) => {
  async function openGallery() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      return pickerResult.assets[0].uri;
    } else {
      return "";
    }
  }
  return (
    //control for selected image
    <Controller
      control={control}
      name={name}
      rules={rule}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={async () => {
              const res = await openGallery();
              onChange(res);
            }}
          >
            {value ? (
              <Image style={styles.imageSelected} source={{ uri: value }} />
            ) : (
              <View style={styles.placeholderContainer}>
                <EvilIcons
                  name="image"
                  size={200}
                  color={error ? "red" : "black"}
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: error ? "red" : "black",
                  }}
                >
                  Press to select an Image
                </Text>
              </View>
            )}
          </TouchableOpacity>
          {/* This component shows Errors if present */}
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{error.message || "Error"}</Text>
            </View>
          )}
        </>
      )}
    />
  );
};

export default FormSelectImage;

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginLeft: "5%",
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  imageSelected: {
    aspectRatio: 16 / 9,
    width: "90%",
    borderRadius: 10,
  },
  placeholderText: {},
  errorContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: -10,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});
