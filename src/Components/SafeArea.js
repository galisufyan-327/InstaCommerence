import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../Theme/Colors";

// this component is resposible for handling screen content so that it doesn't overlab any notches in phones.
const SafeArea = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: Colors.white,
      }}
    >
      {children}
    </View>
  );
};

export default SafeArea;
