import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const Categoria = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>Categoria Popular</Text>
    </View>
  );
};
export default Categoria;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
