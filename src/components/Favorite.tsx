import React from 'react'
import {  StyleSheet,View, Text, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign, FontAwesome5, Ionicons, MaterialIcons } 
from '@expo/vector-icons';

const Recipe = () => {
    return (
        <ScrollView>
       <View style={styles.container}>
      
      <View style={styles.video}>
          <Text style={styles.V}>Video</Text>
      </View>

      <View>
        <Text style={styles.R}>Recipe</Text>
      </View>

      <Image
          style={styles.imagen1}
          source={require("../Img/1.jpg")}/>
      
      <View>
        <Text style={styles.text1}>Como hacer una tostada</Text>
        <Text style={styles.iconpoints}><AntDesign name="ellipsis1" size={20} color="black" /></Text>
      </View>
      <Text style={styles.icon}></Text>
        <Text style={styles.iconV}> <MaterialIcons name="play-arrow" size={24} color="white" /></Text>
        <Text style={styles.iconI}>⭐5,0</Text>
      <Text style={styles.ICON}></Text>
        <Text style={styles.iconD}><FontAwesome5 name="bookmark" size={20} color="red" /></Text>   
        <Text style={styles.iconN}> 15:10</Text>
       
      <View>
      <Image
          style={styles.img}
          source={require("../Img/img.jpg")}/>
          <Text style={styles.text}>By Roberta Anny</Text>
      </View>
      

      <Image
          style={styles.imagen2}
          source={require("../Img/2.jpg")}/>
        
      <View>
        <Text style={styles.text2}>How to make sushi at home</Text>
        <Text style={styles.iconpoints2}><AntDesign name="ellipsis1" size={20} color="black" /></Text>
      </View>

      <Text style={styles.icon2}></Text>
        <Text style={styles.iconV2}> <MaterialIcons name="play-arrow" size={24} color="white" /></Text>
        <Text style={styles.iconI2}>⭐4,5</Text>
        <Text style={styles.ICON2}></Text>
        <Text style={styles.iconD2}><FontAwesome5 name="bookmark" size={20} color="red" /></Text>   
        <Text style={styles.iconN2}> 15:10</Text>

      <View>
      <Image
          style={styles.img1}
          source={require("../Img/img2.jpg")}/>
          <Text style={styles.Text2}>By Niki Samantha</Text>
      </View>
      

      <Image
          style={styles.imagen3}
          source={require("../Img/3.jpg")}/>

      <View>
        <Text style={styles.text3}>Easy oatmeal recipe</Text>
        <Text style={styles.iconpoints3}><AntDesign name="ellipsis1" size={20} color="black" /></Text>
      </View>

      <Text style={styles.icon3}></Text>
        <Text style={styles.iconV3}> <MaterialIcons name="play-arrow" size={24} color="white" /></Text>
        <Text style={styles.iconI3}>⭐4,9</Text>
        <Text style={styles.ICON3}></Text>
        <Text style={styles.iconD3}><FontAwesome5 name="bookmark" size={20} color="red" /></Text>   
        <Text style={styles.iconN3}> 15:10</Text>

      <View>
        <Image
          style={styles.img3}
          source={require("../Img/img3.jpg")}/>
          <Text style={styles.Text3}>By James wolden</Text>
      </View>
    
    </View>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width:360,
    height:1050,
  },
 
  video: {
    backgroundColor:"red",
    width:125,
    height:40,
    top:-420,
    right:90,
    borderRadius:10,
    color:"white",
  },
  V:{
    top:5,
    right:-40,
    color:"white",
  },
  R: {
    color:"red",
    fontSize:20,
    top:-455,
    right:-70,
  },

  imagen1: {
    height: 200,
    width: 320,
    top: 120,
    borderRadius: 20,
    position: 'absolute',
},

icon: {
backgroundColor:"black",
opacity:0.5,
height: 40,
width: 40,
borderRadius:40,
top:200,
right:160,
position: "absolute",
},
iconV: {
  top:205,
  right:167,
position: "absolute",
},
iconI: {
backgroundColor:"black",
opacity:0.6,
top:140,
right:280,
height: 20,
width: 50,
borderRadius:10,
color:"white",
position: "absolute",
},
ICON: {
  backgroundColor:"white",
  height: 35,
  width: 35,
  top:135,
  right:25,
  borderRadius:20,
  position: "absolute",
},
iconD: {
top:140,
right:34,
position: "absolute",
},
iconN: {
  backgroundColor:"black",
  opacity:0.6,
  height:30,
  width:50,
  top:-280,
  right:-130,
  borderRadius:10,
  fontWeight: "bold",
  color:"white",
},
text1: {
  top: -200,
  right:-30,
  fontSize: 15,
  fontWeight: "bold",
  position: 'absolute',
},
iconpoints: {
  top: -200,
  right:-140,
},
img: {
height:50,
  width:50,
  top: -220,
  right:110,
  borderRadius:30,
  position: 'absolute',
},
text:{
  height:30,
    width:130,
    top: -205,
    right:-40,
    opacity:0.4,
  position: 'absolute',
  },

imagen2: {
  height: 200,
  width: 320,
  top: 440,
  borderRadius: 20,
  position: 'absolute',
},

icon2: {
  backgroundColor:"black",
  opacity:0.4,
  height: 40,
  width: 40,
  borderRadius:40,
  top:515,
  right:160,
  position: "absolute",
  },
  iconV2: {
    top:520,
    right:167,
  position: "absolute",
  },
  iconI2: {
  backgroundColor:"black",
  opacity:0.6,
  top:455,
  right:280,
  height: 20,
  width: 50,
  borderRadius:10,
  color:"white",
  position: "absolute",
  },
  ICON2: {
    backgroundColor:"white",
    height: 35,
    width: 35,
    top:455,
    right:25,
    borderRadius:20,
    position: "absolute",
  },
  iconD2: {
  top:460,
  right:34,
  position: "absolute",
  },
  iconN2: {
    backgroundColor:"black",
    opacity:0.6,
    height:30,
    width:50,
    top:600,
    right:25,
    borderRadius:10,
    color:"white",
    fontWeight: "bold",
    position:"absolute",
  },
  text2: {
    top:65,
    right:-60,
    fontSize: 15,
    fontWeight: "bold",
    position:"absolute"
  },
  iconpoints2: {
    height: 30,
    width: 30,
    top: 70,
    right:-160,
    position:"absolute"
  },
  img1: {
  height:50,
  width:50,
  top:100,
  right:110,
  borderRadius:30,
  position: 'absolute',
  },
    Text2:{
    height:30,
      width:130,
      top:110,
      right:-40,
      opacity:0.5,
    position: 'absolute',
    },

imagen3: {
  height: 200,
  width: 320,
  top: 750,
  borderRadius: 20,
  position: 'absolute',
},

icon3: {
  backgroundColor:"black",
  opacity:0.6,
  height: 40,
  width: 40,
  borderRadius:40,
  top:825,
  right:160,
  position: "absolute",
  },
  iconV3: {
    top:830,
    right:167,
  position: "absolute",
  },
  iconI3: {
  backgroundColor:"black",
  opacity:0.6,
  top:765,
  right:280,
  height: 20,
  width: 50,
  borderRadius:10,
  color:"white",
  position: "absolute",
  },
  ICON3: {
    backgroundColor:"white",
    height: 35,
    width: 35,
    top:765,
    right:25,
    borderRadius:20,
    position: "absolute",
  },
  iconD3: {
  top:770,
  right:34,
  position: "absolute",
  },
  iconN3: {
    backgroundColor:"black",
    opacity:0.6,
    height:30,
    width:50,
    top:910,
    right:25,
    borderRadius:10,
    color:"white",
    fontWeight: "bold",
    position:"absolute",
  },
  text3: {
    top: 375,
    right:-10,
    fontSize: 15,
    fontWeight: "bold",
    position:"absolute"
  },
  iconpoints3: {
    height: 30,
    width: 30,
    top: 380,
    right:-160,
    position:"absolute"
  },
  img3: {
  height:50,
  width:50,
  top: 400,
  right:110,
  borderRadius:30,
  position: 'absolute',
},
Text3:{
height:30,
width:130,
top:415,
right:-40,
opacity:0.5,
position: 'absolute',
},



});
    
export default Recipe;