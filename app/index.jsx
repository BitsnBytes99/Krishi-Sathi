import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

const Index = () => {
  return (
    <ImageBackground
      source={require("../assets/images/GetStarted.png")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      resizeMode="cover"
    >
      {/* Slogan & Button Container */}
      <View className="absolute bottom-8 w-full px-6 items-center">
        {/* Slogan */}
        <Text className="text-black text-lg font-semibold text-center mb-9">
          कृषी साथी शेतकऱ्यांसाठी तंत्रज्ञानाची साथ, समृद्धीची वाट!
        </Text>

        {/* Custom Button */}
        <TouchableOpacity
          className="w-4/5 bg-[#678a1d] py-4 rounded-lg"
          onPress={() => console.log("Button Pressed!")}
          activeOpacity={0.7}
        >
          <Text className="text-white text-lg font-bold text-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Index;
