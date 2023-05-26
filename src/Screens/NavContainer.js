import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../Theme/Colors";
import { Octicons } from "@expo/vector-icons";
import Home from "./Home";
import NewPost from "./NewPost";
import Profile from "./Profile";
import Market from "./Market";
import Comments from "./Comments";
import PostList from "./PostList";
import { useLayoutEffect } from "react";
import ProductDetails from "./ProductDetails";

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: Colors.purple,
          tabBarStyle: {
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: -10,
            backgroundColor: Colors.offWhite,
          },
        }}
        initialRouteName="HomeScreen"
        tabBarHideOnKeyboard={true}
      >
        <BottomTab.Screen
          name="HomeScreen"
          component={HomeScreenStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="home" size={30} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="NewPost"
          component={NewPost}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="diff-added" size={30} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="person" size={30} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

function HomeScreenStack({ navigation, route }) {
  const tabHiddenRoutes = ["Comments", "PostList", "Market", "ProductDetail"];
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -10,
          backgroundColor: Colors.offWhite,
        },
      });
    }
  }, [navigation, route]);
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Comments" component={Comments} />
      <HomeStack.Screen name="Market" component={Market} />
      <HomeStack.Screen name="PostList" component={PostList} />
      <HomeStack.Screen name="ProductDetail" component={ProductDetails} />
    </HomeStack.Navigator>
  );
}
