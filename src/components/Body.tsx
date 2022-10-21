import React from "react";
import Home from "./Home";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Profile from "./Profile";

const Body = () => {
  return (
    <ScrollView>
      <View>
        <Home />
        <Profile/>
      </View>
    </ScrollView>
  );
};

export default Body;
