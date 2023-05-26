import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { EvilIcons } from "@expo/vector-icons";

const FormSelectImage = ({ control, name, rule }) => {
  async function openGallery() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log("Permission to access camera roll is required!");
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
    <Controller
      control={control}
      name={name}
      rules={rule}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Text style={styles.title}>{name}</Text>
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
