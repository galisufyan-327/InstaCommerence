import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as UserProvider } from "./src/Context/UserContext";
import { NavContainer } from "./src/Screens/NavContainer";

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <NavContainer />
      </UserProvider>
    </SafeAreaProvider>
  );
}
