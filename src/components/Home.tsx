import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import Vuclip from './Vuclip'
import Categoria from "./Categoria";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <EvilIcons
          style={styles.search}
          name="search"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="Search recipes" />
      </View>
      <View>
        <View style={styles.container2}>
          <Text style={styles.text1}>En tendencia🔥</Text>
          <Text style={styles.two} >Se all</Text>
          <AntDesign
          styles={styles.two}
           name="arrowright" size={24} color="red" />
        </View>
      </View>
      <View>
        <Vuclip/>
        <Categoria/>
        <Scroll/>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    paddingVertical: 10,
    flexDirection: "row",
    margin: 20,
  },
  input: {
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: "40%",
  },
  search: {
    color: "#D9D9D9",
    fontSize: 30,
    marginLeft: 10,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    paddingLeft: 20,
    fontSize: 15
  },
  two: {
    paddingLeft: 220,
    fontSize: 15,
    color: 'red'
  }
});
