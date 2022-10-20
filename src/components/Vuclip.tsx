import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Vuclip = () => {
  return (
    <ScrollView horizontal={true}>
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
            <Ionicons name="ios-star" size={20} color="white" />
            <Text style={styles.text}>4,5</Text>
          </View>
          <View style={styles.circle}>
            <FontAwesome5
              style={styles.favo}
              name="bookmark"
              size={20}
              color="black"
            />
          </View>
          <View style={styles.time}>
            <Text style={styles.txt}>15:10</Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.txt1}>How to make sushi at home</Text>
            <MaterialCommunityIcons
              style={styles.three}
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.users}>
            <Image
              style={styles.img2}
              source={{
                uri: "https://i.pinimg.com/736x/ff/2d/6e/ff2d6e1f2c4d9c62a8a4f1f750401036.jpg",
              }}
            />
            <Text style={styles.name}>By Niki Samantha</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.img}
            source={require("../Img//Entomatadas.jpg")}
          />
          <FontAwesome5
            style={styles.play}
            name="play-circle"
            size={30}
            color="gray"
          />
          <View style={styles.str}>
            <Ionicons name="ios-star" size={20} color="white" />
            <Text style={styles.text}>4,5</Text>
          </View>
          <View style={styles.circle}>
            <FontAwesome5
              style={styles.favo}
              name="bookmark"
              size={20}
              color="black"
            />
          </View>
          <View style={styles.time}>
            <Text style={styles.txt}>15:10</Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.txt1}>How to make sushi at home</Text>
            <MaterialCommunityIcons
              style={styles.three}
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.users}>
            <Image
              style={styles.img2}
              source={{
                uri: "https://viapais.com.ar/resizer/GElQHW7xLjAYiDrw3g_qAqa-_Sc=/1200x793/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/LYUQGAXZENBGVPHEYFXLLS4X4E.png",
              }}
            />
            <Text style={styles.name}>By Alisha Lehmann</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.img}
            source={require("../Img/lasana-comida.jpg")}
          />
          <FontAwesome5
            style={styles.play}
            name="play-circle"
            size={30}
            color="gray"
          />
          <View style={styles.str}>
            <Ionicons name="ios-star" size={20} color="white" />
            <Text style={styles.text}>4,5</Text>
          </View>
          <View style={styles.circle}>
            <FontAwesome5
              style={styles.favo}
              name="bookmark"
              size={20}
              color="black"
            />
          </View>
          <View style={styles.time}>
            <Text style={styles.txt}>15:10</Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.txt1}>How to make sushi at home</Text>
            <MaterialCommunityIcons
              style={styles.three}
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.users}>
            <Image
              style={styles.img2}
              source={{
                uri: "https://quo.eldiario.es/wp-content/uploads/2019/10/estas-son-las-5-mujeres-mas-bellas-del-mundo-segun-la-ciencia.jpg",
              }}
            />
            <Text style={styles.name}>By Hazell Benny</Text>
          </View>
        </View>
        <View>
          <Image style={styles.img} source={require("../Img/good.jpg")} />
          <FontAwesome5
            style={styles.play}
            name="play-circle"
            size={30}
            color="gray"
          />
          <View style={styles.str}>
            <Ionicons name="ios-star" size={20} color="white" />
            <Text style={styles.text}>4,5</Text>
          </View>
          <View style={styles.circle}>
            <FontAwesome5
              style={styles.favo}
              name="bookmark"
              size={20}
              color="black"
            />
          </View>
          <View style={styles.time}>
            <Text style={styles.txt}>15:10</Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.txt1}>How to make sushi at home</Text>
            <MaterialCommunityIcons
              style={styles.three}
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.users}>
            <Image
              style={styles.img2}
              source={{
                uri: "https://cdn.smehost.net/sonymusiclatincom-uslatinprod/wp-content/uploads/2015/11/Pedro-Capo-1800x1209.jpg",
              }}
            />
            <Text style={styles.name}>By Pedro Capo</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Vuclip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    marginLeft: 10,
  },
  img: {
    width: 250,
    height: 170,
    borderRadius: 8,
    margin: 5,
  },
  play: {
    position: "absolute",
    left: 120,
    top: 75,
  },
  text: {
    color: "white",
    marginLeft: 5,
  },
  str: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.1)",
    width: "30%",
    borderRadius: 15,
    position: "absolute",
    left: 20,
    top: 10,
  },
  circle: {
    backgroundColor: "white",
    width: "15%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    right: 10,
    top: 10,
  },
  favo: {
    borderColor: "black",
    backgroundColor: "white",
  },
  time: {
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.1)",
    width: "30%",
    borderRadius: 15,
    position: "absolute",
    right: 10,
    height: 30,
    top: 140,
    justifyContent: "center",
  },
  txt: {
    color: "white",
  },
  point: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  txt1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  three: {
    marginLeft: 40,
  },
  users: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  img2: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    color: "gray",
    marginLeft: 10,
  },
});
