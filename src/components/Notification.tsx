import React from 'react'
import {  StyleSheet,View, Text, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialIcons, Entypo } 
from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Navigation = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.Text}>Como hacer una tostada</Text>
      <Text style={styles.flecha}><AntDesign name="arrowleft" size={24} color="black" /></Text>
      <Text style={styles.puntos}><Entypo name="dots-three-horizontal" size={24} color="black" /></Text>

      <Image
          style={styles.imagen1}
          source={require("../Img/1.jpg")}/>
    
      <Text style={styles.icon}></Text>
        <Text style={styles.iconV}> <MaterialIcons name="play-arrow" size={24} color="white" /></Text>
     
        <Text style={styles.iconI}>⭐ 4,5 </Text>
        <Text style={styles.reviews}> (300 Reviews)</Text>

        <Text>
          <Text></Text>
        </Text>

    <Text style={styles.button}>
      Follow
    </Text>

    <View>
      <Image
          style={styles.img}
          source={require("../Img/img.jpg")}/>
          <Text style={styles.text}>Roberta Anny</Text>
      </View>
      
      <Text style={styles.ubication}> <Entypo name="location-pin" size={18} color="red" />
        <Text>Bali, Indonecia</Text>
      </Text>
      <Text style={styles.ingrediente}>Ingredientes</Text>
      <Text style={styles.items}>5 items</Text>

      <View style={styles.cont1}>
        <Text style={styles.text1}>Bread</Text>
        <Text style={styles.g1}>200g</Text>
      </View>
      <Image
          style={styles.img1}
          source={require("../Img/imguno.jpg")}/>

      <View style={styles.cont2}>
        <Text style={styles.text2}>Eggs</Text>
        <Text style={styles.g2}>200g</Text>
      </View>
      <Image
          style={styles.img2}
          source={require("../Img/imgdos.jpg")}/>

      <View style={styles.cont3}>
        <Text style={styles.text3}>Milk</Text>
        <Text style={styles.g3}>200g</Text>
      </View>
      <Image
          style={styles.img3}
          source={require("../Img/imgtres.jpg")}/>

      <View style={styles.cont4}>
        <Text style={styles.text4}>Butter</Text>
        <Text style={styles.g4}>200g</Text>
      </View>
      <Image
          style={styles.img4}
          source={require("../Img/imgcuatro.jpg")}/>

      <View style={styles.cont5}>
        <Text style={styles.text5}>Vainilla</Text>
        <Text style={styles.g5}>200g</Text>
      </View>
      <Image
          style={styles.img5}
          source={require("../Img/imgcinco.jpg")}/>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width:360,
    height:880,
  },

  Text: {
    top:40,
    right:60,
    fontSize:20,
    fontWeight: "bold",
    position:"absolute",
  },
  flecha: {
    top: 15,
    right:320,
    position:"absolute"
  },
  puntos: {
    top:15,
    right:20,
    position:"absolute",
  },

  imagen1: {
    height: 200,
    width: 320,
    top: 80,
    borderRadius: 20,
    position: 'absolute',
},
icon: {
  backgroundColor:"black",
  opacity:0.5,
  height: 40,
  width: 40,
  borderRadius:40,
  top:160,
  right:160,
  position: "absolute",
  },
  iconV: {
    top:165,
    right:167,
  position: "absolute",
  },
  iconI: {
    top:290,
    right:290,
    color:"black",
    fontWeight: "bold",
    position: "absolute",
    },
reviews: {
 top:290,
 right:180,
 opacity:0.5,
 position:"absolute",
  },
  
button: {
top:-100,
right:-110,
backgroundColor:"red",
height:35,
width:70,
color:"white",
fontWeight:"bold",
paddingHorizontal:9,
paddingVertical:5,
borderRadius:10,
},

img: {
  height:50,
    width:50,
    top: -140,
    right:110,
    borderRadius:30,
    position: 'absolute',
  },

text:{
  height:30,
  width:130,
  top: -145,
  right:-30,
  position: 'absolute',
  fontWeight: "bold",
},
 ubication: {
  top:350,
  right:160,
  position:"absolute",
 },

ingrediente: {
  top:400,
  right:200,
  position:"absolute",
  fontWeight: "bold",
  fontSize:20,
 },
 items: {
  top:410,
  right:30,
  opacity:0.6,
  position:"absolute",
 },

 cont1: {
  height:70,
  width:320,
  top:450,
  right:20,
  borderRadius:10,
  backgroundColor:"#E3E3E3",
  position:"absolute",
 },
text1: {
  top:20,
  right:170,
  fontWeight:"bold",
  position:"absolute",
},
g1: {
  position:"absolute",
  top:20,
  right:20,
  opacity:0.5,
},

img1: {
  height:50,
  width:50,
  top: 460,
  right:275,
  borderRadius:10,
  position: 'absolute',
},

cont2: {
  height:70,
  width:320,
  top:530,
  right:20,
  borderRadius:10,
  backgroundColor:"#E3E3E3",
  position:"absolute",
 },
text2: {
  top:20,
  right:170,
  fontWeight:"bold",
  position:"absolute",
},
g2: {
  position:"absolute",
  top:20,
  right:20,
  opacity:0.5,
},

img2: {
  height:50,
  width:50,
  top: 540,
  right:275,
  borderRadius:10,
  position: 'absolute',
},

cont3: {
  height:70,
  width:320,
  top:610,
  right:20,
  borderRadius:10,
  backgroundColor:"#E3E3E3",
  position:"absolute",
 },
text3: {
  top:20,
  right:170,
  fontWeight:"bold",
  position:"absolute",
},
g3: {
  position:"absolute",
  top:20,
  right:20,
  opacity:0.5,
},

img3: {
  height:50,
  width:50,
  top: 620,
  right:275,
  borderRadius:10,
  position: 'absolute',
},

cont4: {
  height:70,
  width:320,
  top:690,
  right:20,
  borderRadius:10,
  backgroundColor:"#E3E3E3",
  position:"absolute",
 },
text4: {
  top:20,
  right:170,
  fontWeight:"bold",
  position:"absolute",
},
g4: {
  position:"absolute",
  top:20,
  right:20,
  opacity:0.5,
},

img4: {
  height:50,
  width:50,
  top: 700,
  right:275,
  borderRadius:10,
  position: 'absolute',
},

cont5: {
  height:70,
  width:320,
  top:770,
  right:20,
  borderRadius:10,
  backgroundColor:"#E3E3E3",
  position:"absolute",
 },
text5: {
  top:20,
  right:170,
  fontWeight:"bold",
  position:"absolute",
},
g5: {
  position:"absolute",
  top:20,
  right:20,
  opacity:0.5,
},

img5: {
  height:50,
  width:50,
  top: 780,
  right:275,
  borderRadius:10,
  position: 'absolute',
},

});

export default Navigation;
