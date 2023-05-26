import { View, Image, TextInput, StyleSheet, Text } from "react-native";

import { Controller } from "react-hook-form";
import { Colors } from "../Theme/Colors";

const FormInputField = ({
  control,
  name,
  rule,
  placeholder,
  secureTextEntry,
  keyboardType,
  multiline,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rule}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Text style={styles.title}>{name}</Text>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : Colors.purple },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              style={styles.input}
              multiline={multiline}
              keyboardType={keyboardType || "default"}
            />
          </View>

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

export default FormInputField;

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginLeft: "5%",
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  container: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
  },
  errorContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: -10,
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
});
