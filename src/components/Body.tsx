import React from "react";
import Home from "./Home";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Body = () => {
  return (
    <ScrollView>
      <View>
        <Home />
      </View>
    </ScrollView>
  );
};

export default Body;
