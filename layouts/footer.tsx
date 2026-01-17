import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const Footer = () => {
  return (
    <View style={{ elevation: 10 }} className="flex-row justify-between items-center h-20 w-full bg-gray-400 absolute bottom-0 inset-x-0 px-8">
      
         <TouchableOpacity onPress={()=>router.navigate("/")} className='items-center'>
                <AntDesign name="home" size={24} color="black" />
                <Link href="/" > Home </Link>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>router.navigate("/products")} className='items-center'>
                <AntDesign name="product" size={26} color="black" />
                <Link href="/products" > Product </Link>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>router.navigate("/category")} className='items-center'>
                <MaterialIcons name="category" size={30} color="black" />
                <Link href="/category" > Category </Link>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>router.navigate("/profile")} className='items-center'>
                <Ionicons name="person-circle-outline" size={30} color="black" />
                <Link href="/profile" > Profile </Link>
            </TouchableOpacity>
    </View>
  )
}

export default Footer