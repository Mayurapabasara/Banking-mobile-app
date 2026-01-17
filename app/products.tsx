import Header from "@/layouts/header";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from "expo-router";
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import "../global.css";


const Products = () => {
  return (
    <View className='w-full flex-1'>
      
      <Header Left={
        <Link href="/" asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity> 
        </Link>}
      
        centerText="Products"

        Right={<TouchableOpacity>
          <Entypo name="menu" size={28} color="black" />
        </TouchableOpacity>}
      />

    </View>
  )
}

export default Products