import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Scroll = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <ScrollView horizontal= {true} >
          <TouchableOpacity>
            <Text style={styles.txt}>Salad</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt1}>Breackfast</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>Appetizer</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>Noodie</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>Coca cola</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
export default Scroll;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10,
        marginLeft: 10,
    },
  scroll: {
    margin: 20
  },
  txt1: {
  justifyContent: "center",
  color: "white",
  paddingVertical: 7,
  paddingHorizontal: 20,
  borderRadius: 35,
  backgroundColor: "red",
  fontSize: 20,
  },
  txt: {
    textAlign: "center",
    marginHorizontal: 6,
    color: "pink",
    fontSize: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 50,
  }
});
