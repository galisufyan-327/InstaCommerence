import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as UserProvider } from "./src/Context/UserContext";
import { Provider as AllPostProvider } from "./src/Context/AllPostContext";
import { NavContainer } from "./src/Screens/NavContainer";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Found screens with the same"]);

// app entry
export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <AllPostProvider>
          <NavContainer />
        </AllPostProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
}
