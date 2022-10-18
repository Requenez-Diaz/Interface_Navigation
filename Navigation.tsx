import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
 
//screens

import HomeScreen from "./src/screens/HomeScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Encontrar mejores recetas para cocinar"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Resestas guardadas"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="favorite" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Mi perfil"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
