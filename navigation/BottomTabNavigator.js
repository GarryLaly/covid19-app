import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
const TabBarIcon = (props) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

const TabOneNavigator = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: "Tab One Title",
        }}
      />
    </TabOneStack.Navigator>
  );
};

const TabTwoStack = createStackNavigator();

const TabTwoNavigator = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="md-reorder"
              color="#fff"
              size={27}
              style={{ marginLeft: 16 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="md-notifications"
              color="#fff"
              size={27}
              style={{ marginRight: 16 }}
            />
          ),
          headerTitle: () => null,
          headerStyle: {
            backgroundColor: "#473F97",
            elevation: 0,
          },
        }}
      />
    </TabTwoStack.Navigator>
  );
};
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tabIconSelected }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="md-analytics"
              color={color}
              size={27}
              style={{
                backgroundColor: focused ? "#4C79FF" : "#fff",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 50,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
