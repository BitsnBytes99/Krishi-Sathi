
import React from 'react';
import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
   <Tabs>
    <Tabs.Screen name='Home' options={
      { 
        title:'Home',
        headerShown: false,
        tabBarIcon:({color})=><Ionicons name="home" size={24} color="black" />
      }
    }/>
    <Tabs.Screen name='chatbot'
    options={
      { 
        title:'Chatbot',
        headerShown: false,
        tabBarIcon:({color})=><Ionicons name="chatbubble-ellipses" size={24} color="black" />
      }
    }/>
    <Tabs.Screen name='profile'
    options={
      { 
        title:'Profile',
        headerShown: false,
        tabBarIcon:({color})=><Ionicons name="person-sharp" size={24} color="black" />
      }
    }/>
   </Tabs>
  );
}
