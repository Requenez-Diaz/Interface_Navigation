import React from 'react'
import {  StyleSheet,View, Text, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign, FontAwesome5, Ionicons, MaterialIcons } 
from '@expo/vector-icons';

const Navigation = () => {
  return (
    <ScrollView>
    <View>
      <Text> </Text>
      <Text style={styles.Text}>Como hacer una tostada</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width:360,
    height:1050,
  },

  Text: {
    top: 0,
  }
 
});

export default Navigation;
