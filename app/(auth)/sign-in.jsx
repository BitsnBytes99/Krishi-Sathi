import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from 'react'
import { router } from "expo-router";

const signin = () => {
  return (
      <ImageBackground
          source={require("../../assets/images/authbg.png")}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          resizeMode="cover"
       ></ImageBackground>
   
  )
}

export default signin 