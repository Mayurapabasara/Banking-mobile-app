import '@/global.css';
import Footer from '@/layouts/footer';
import { Slot } from 'expo-router';
import { View } from 'react-native';


const RootLayout = () => {
  return (
    <View className="flex-1 w-full bg-gray-100">
        <Slot />
        <Footer />
      
    </View>
  )
}

export default RootLayout