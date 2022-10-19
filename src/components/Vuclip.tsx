import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Video from 'react-native-video'

const Vuclip = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../Img/Comida.jpg")} />
        <FontAwesome5
          style={styles.play}
          name="play-circle"
          size={30}
          color="gray"
        />
        <View style={styles.str}>
          <Ionicons
            style={styles.start}
            name="ios-star"
            size={24}
            color="gray"
          />
          <Text>4,5</Text>
        </View>
      </View>
      <View>
        <Image style={styles.img} source={require("../Img/Comida.jpg")} />
      </View>
    </View>
  );
};
export default Vuclip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    alignItems: "center",
  },
  img: {
    width: 180,
    height: 120,
    marginBottom: 15,
    borderRadius: 8,
  },
  play: {
    position: "absolute",
    left: 80,
    top: 45,
  },
  str: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'white',
    width:'30%',
    borderRadius: 8
  },
  start: {},
});
