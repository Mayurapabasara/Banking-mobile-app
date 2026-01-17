import Header from "@/layouts/header"
import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from "expo-router"
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useDrawer from "../contex/contex-hooks/useDrawer"
import "../global.css"

const Index = () => {
  // const drawer = useRef<DrawerLayoutAndroid>(null)

  const { drawer } = useDrawer()

  const navigationView = (
    <View className="flex-1 bg-gray-200 pt-10">
      <Link href="/" className="p-4 text-lg"> Home </Link>
      <Link href="/category" className="p-4 text-lg"> Category </Link>
      <Link href="/products" className="p-4 text-lg"> Products </Link>
      <Link href="/profile" className="p-4 text-lg"> Profile </Link>
    </View>
  )

  return (
    // <DrawerLayoutAndroid
    //   ref={drawer}
    //   drawerWidth={300}
    //   drawerPosition="left"
    //   renderNavigationView={() => navigationView}
    // >
    <View className="flex-1 items-center bg-white">
      
      <Header Left={<TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>} 
      
        centerText="Home"

        Right={<TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
          <Entypo name="menu" size={28} color="black" />
        </TouchableOpacity>}
      />


      
      <Text className="text-xl font-bold text-blue-500"> Welcome to WorkSure! </Text>
      <Link href="/category" className="mt-4 px-4 py-2 bg-green-500 rounded"> Go to Category </Link>
      <Link href="/products" className="mt-4 px-4 py-2 bg-purple-500 rounded"> Go to Products </Link>
      <Link href="/profile" className="mt-4 px-4 py-2 bg-purple-500 rounded"> Go to Profile </Link>

      {/* /product/index */}
      <Link href="/product" className="mt-4 px-4 py-2 bg-pink-500 rounded"> Go to Product </Link>


      {/* include the only one parameter for the unkown page */}
      <Link href="/test" className="mt-4 px-4 py-2 bg-yellow-500 rounded"> Go to Test </Link>

      {/* inlucde two more parameters for the unknown page */}
      <Link href={{
        pathname: "/product/[productId]",
        params: {
          productId: "MP/MN/12345",
          name: "John",
          age: "30"
        }   
      }} className="mt-4 px-4 py-2 bg-red-500 rounded"> Go to Test1 </Link> 
    </View>
  )
}

export default Index
