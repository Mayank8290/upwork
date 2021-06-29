import { createBottomTabNavigator } from "react-navigation-tabs";
// Screens
import HomeScreen from "screens/home/HomeScreen";
import TestScreen from "screens/test/TestScreen";
import AndroidFif from "screens/androidfifteen/AndroidfifteenScreen";
import AndroidSevent from "screens/androidseventeen/androidseventeen"
const defaultNavigationOptions = {
  tabBarVisible: false,
  header: null
};

export const Navigator = createBottomTabNavigator(
  {
    home: HomeScreen,
    test: TestScreen,
    androidfif: AndroidFif,
    androidseventeen: AndroidSevent
  },
  {
    defaultNavigationOptions
  }
);
